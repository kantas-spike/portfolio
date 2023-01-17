---
title: "Simple Inkscape Scriptingでスクリプトに追加の引数を渡したい"
date: 2023-01-17T15:46:23+09:00
draft: false
tags:
- python
- argparse
- SimpInkScr
---

[Simple Inkscape Scripting](https://github.com/spakin/SimpInkScr)をコマンドラインで実行するときに、スクリプトに`data.txt`のような追加の引数を渡したい。[^1]

~~~shell
% simple_inkscape_scripting.py --py-source my_script.py input.svg data.txt
~~~

<!--more-->
#### 現状のソースの解析結果

1. [Simple Inkscape Scripting](https://github.com/spakin/SimpInkScr)は、`SimpleInkscapeScripting`クラスの`add_arguments(self, pars)`[^2]で、コマンドライン引数を定義している。

   ~~~python
   class SimpleInkscapeScripting(inkex.EffectExtension):
        # ..略..
        def add_arguments(self, pars):
            'Process program parameters passed in from the UI.'
            pars.add_argument('--tab', dest='tab',
                            help='The selected UI tab when OK was pressed')
            pars.add_argument('--program', type=str,
                            help='Python code to execute')
            pars.add_argument('--py-source', type=str,
                            help='Python source file to execute')
        # ..略..
    ~~~

2. `inkex.EffectExtension`の親クラスである`InkscapeExtension` [^3] と `SvgInputMixin` [^4] のコンストラクタで標準のコマンドライン引数を定義し、さらに、`add_arguments(self, pars)`を呼び出し、子クラス固有のコマンドライン引数を定義している。

    ~~~python
    class InkscapeExtension:
        # ..略..
        def __init__(self):
                # ..略..
                self.arg_parser = ArgumentParser(description=self.__doc__)

                self.arg_parser.add_argument(
                    "input_file",
                    nargs="?",
                    metavar="INPUT_FILE",
                    type=filename_arg,
                    help="Filename of the input file (default is stdin)",
                    default=None,

                )

                self.arg_parser.add_argument(
                    "--output",
                    type=str,
                    default=None,
                    help="Optional output filename for saving the result (default is stdout).",
                )

                self.add_arguments(self.arg_parser)
                # ..略..

    class SvgInputMixin(_Base):
         # ..略..
         def __init__(self):
            # ..略..
            self.arg_parser.add_argument(
                "--id",
                action="append",
                type=str,
                dest="ids",
                default=[],
                help="id attribute of object to manipulate",
            )

            self.arg_parser.add_argument(
                "--selected-nodes",
                action="append",
                type=str,
                dest="selected_nodes",
                default=[],
                help="id:subpath:position of selected nodes, if any",
            )
        # ..略..
    ~~~

3. そのため、ターミナルから`simple_inkscape_scripting.py`に`-h`オプションを指定して実行した結果は以下となる。

    ~~~shell
    % DYLD_LIBRARY_PATH=/Applications/Inkscape.app/Contents/Resources/lib PYTHONPATH=/Applications/Inkscape.app/Contents/Frameworks/Python.framework/Versions/3.10/lib/python3.10/site-packages:/Applications/Inkscape.app/Contents/Resources/share/inkscape/extensions /Applications/Inkscape.app/Contents/Resources/bin/python3 ~/Library/Application\ Support/org.inkscape.Inkscape/config/inkscape/extensions/SimpInkScr/simpinkscr/simple_inkscape_scripting.py -h
    usage: simple_inkscape_scripting.py [-h] [--output OUTPUT] [--tab TAB]
                                        [--program PROGRAM]
                                        [--py-source PY_SOURCE] [--id IDS]
                                        [--selected-nodes SELECTED_NODES]
                                        [INPUT_FILE]

    Help the user create Inkscape objects with a simple API.

    positional arguments:
    INPUT_FILE            Filename of the input file (default is stdin)

    options:
    -h, --help            show this help message and exit
    --output OUTPUT       Optional output filename for saving the result
                            (default is stdout).
    --tab TAB             The selected UI tab when OK was pressed
    --program PROGRAM     Python code to execute
    --py-source PY_SOURCE
                            Python source file to execute
    --id IDS              id attribute of object to manipulate
    --selected-nodes SELECTED_NODES
                            id:subpath:position of selected nodes, if any
    ~~~




### 解決策

`SimpleInkscapeScripting`クラスの`add_arguments(self, pars)`に、以下のコマンドライン引数を`rest_args`定義し[^11]、追加の引数を保持させる。[^5]

そして、`effect(self)`内で、保持した引数をスクリプトのグローバル変数`rest_args`として定義すれば、[Simple Inkscape Scripting](https://github.com/spakin/SimpInkScr)に指定したスクリプトで利用できる。[^6]

~~~python
class SimpleInkscapeScripting(inkex.EffectExtension):
        # ..略..
        def add_arguments(self, pars):
            # ..略..
            pars.add_argument('rest_args', nargs="*",
                              help='Rest Arguments for passing Python code')
        # ..略..

        def effect(self):
            # ..略..
            sis_globals['rest_args'] = self.options.rest_args
            # ..略..
~~~

この修正により、追加の引数は、グローバル変数`rest_args`として利用可能となる。

~~~shell
% DYLD_LIBRARY_PATH=/Applications/Inkscape.app/Contents/Resources/lib PYTHONPATH=/Applications/Inkscape.app/Contents/Frameworks/Python.framework/Versions/3.10/lib/python3.10/site-packages:/Applications/Inkscape.app/Contents/Resources/share/inkscape/extensions /Applications/Inkscape.app/Contents/Resources/bin/python3 ~/Library/Application\ Support/org.inkscape.Inkscape/config/inkscape/extensions/SimpInkScr/simpinkscr/simple_inkscape_scripting.py --program "print('rest_args: ', rest_args)"  --output output.svg input.svg 1 2 3
rest_args:  ['1', '2', '3']
~~~

ただし、`-a`や`--b`のように`-`で始まる引数をスクリプトに渡す場合は、位置引数として解釈させる必要があるため、ダミー引数`--`を必ず挿入する必要がある。[^7]

~~~shell
% DYLD_LIBRARY_PATH=/Applications/Inkscape.app/Contents/Resources/lib PYTHONPATH=/Applications/Inkscape.app/Contents/Frameworks/Python.framework/Versions/3.10/lib/python3.10/site-packages:/Applications/Inkscape.app/Contents/Resources/share/inkscape/extensions /Applications/Inkscape.app/Contents/Resources/bin/python3 ~/Library/Application\ Support/org.inkscape.Inkscape/config/inkscape/extensions/SimpInkScr/simpinkscr/simple_inkscape_scripting.py --program "print('rest_args: ', rest_args)"  --output output.svg input.svg -- -a --b 1 2 3
rest_args:  ['-a', '--b', '1', '2', '3']
~~~

### 課題

ただし、この修正は、1つ問題がある。
標準の位置引数`INPUT_FILE`を省略した場合、以下のように`rest_args`の1番目の引数が`INPUT_FILE`と解釈される。

~~~shell
% DYLD_LIBRARY_PATH=/Applications/Inkscape.app/Contents/Resources/lib PYTHONPATH=/Applications/Inkscape.app/Contents/Frameworks/Python.framework/Versions/3.10/lib/python3.10/site-packages:/Applications/Inkscape.app/Contents/Resources/share/inkscape/extensions /Applications/Inkscape.app/Contents/Resources/bin/python3 ~/Library/Application\ Support/org.inkscape.Inkscape/config/inkscape/extensions/SimpInkScr/simpinkscr/simple_inkscape_scripting.py --program "print('rest_args: ', rest_args)"  --output output.svg a b c
usage: simple_inkscape_scripting.py [-h] [--output OUTPUT] [--tab TAB]
                                    [--program PROGRAM]
                                    [--py-source PY_SOURCE] [--id IDS]
                                    [--selected-nodes SELECTED_NODES]
                                    [INPUT_FILE] [rest_args ...]
simple_inkscape_scripting.py: error: argument INPUT_FILE: File not found: a
~~~

`Inkscape`の拡張機能では、`INPUT_FILE`を省略した場合、標準入力からSVGファイルのデータを取得する。
この標準入力の取得と`rest_args`を共存させるために、`cat`コマンドの`-`引数のように、明示的に標準入力を指定できるように変更する必要がある。[^8]

そのため、`InkscapeExtension`で定義された`INPUT_FILE`引数を、`argparse`のトリッキーな方法[^9]で、以下のように変更する。[^10] [^12]

~~~python
class SimpleInkscapeScripting(inkex.EffectExtension):
    # ..略..
    def filename_arg(self, name):
        """Existing file to read or option used in script arguments"""
        if name == "-":
            return None  # filename is set to None to read stdin
        return inkex.utils.filename_arg(name)

    def reconfigure_input_file_argument(self, pars):
        target_action = None
        for action in pars._actions:
            if 'input_file' == action.dest:
                target_action = action
                break

        target_action.container._remove_action(target_action)
        pars.add_argument(
            "input_file",
            nargs="?",
            metavar="INPUT_FILE",
            type=self.filename_arg,
            help="Filename of the input file (default is stdin). Filename can be `-` for stdin",
            default=None,
        )

    def add_arguments(self, pars):
        # ..略..
        self.reconfigure_input_file_argument(pars)
        # ..略..
~~~

ただし、この方法は、`argparse`の`_actions`や`_remove_action`など非公開のAPIを利用しているため、`Pull Request`しても採用されそうにないかも。

### 参考

- [コマンドラインからSimple Inkscape Scriptingを使いたい](../37-use-commandline-by-simpinkscr)
- [spakin/SimpInkScr: Simple Inkscape Scripting](https://github.com/spakin/SimpInkScr)
- [Inkscape / extensions · GitLab](https://gitlab.com/inkscape/extensions)
- [argparse --- コマンドラインオプション、引数、サブコマンドのパーサー — Python 3.11.1 ドキュメント](https://docs.python.org/ja/3/library/argparse.html)
- [kantas-spike/SimpInkScr at feature-pass-remaining-command-line-args-to-python-code](https://github.com/kantas-spike/SimpInkScr/tree/feature-pass-remaining-command-line-args-to-python-code)
- [Use of Dash “-” in Command-Line Parameters | Baeldung on Linux](https://www.baeldung.com/linux/dash-in-command-line-parameters)
- [python - Disable/Remove argument in argparse - Stack Overflow](https://stackoverflow.com/questions/32807319/disable-remove-argument-in-argparse/32809642#32809642)

[^1]: [コマンドラインからSimple Inkscape Scriptingを使いたい](../37-use-commandline-by-simpinkscr)
[^2]: [SimpInkScr/simple_inkscape_scripting.py at master · spakin/SimpInkScr](https://github.com/spakin/SimpInkScr/blob/master/simpinkscr/simple_inkscape_scripting.py#L2231)
[^3]: [inkex/base.py · master · Inkscape / extensions · GitLab](https://gitlab.com/inkscape/extensions/-/blob/master/inkex/base.py#L69)
[^4]: [inkex/base.py · master · Inkscape / extensions · GitLab](https://gitlab.com/inkscape/extensions/-/blob/master/inkex/base.py#L453)
[^5]: [Comparing spakin:master...kantas-spike:feature-pass-remaining-command-line-args-to-python-code · spakin/SimpInkScr](https://github.com/spakin/SimpInkScr/compare/master...kantas-spike:SimpInkScr:feature-pass-remaining-command-line-args-to-python-code#diff-0b0ce8676d37cd05efe0726e5ffcdd9b52e4682df9c1ffaedf96ffca8b14c199R2264)
[^6]: [Comparing spakin:master...kantas-spike:feature-pass-remaining-command-line-args-to-python-code · spakin/SimpInkScr](https://github.com/spakin/SimpInkScr/compare/master...kantas-spike:SimpInkScr:feature-pass-remaining-command-line-args-to-python-code#diff-0b0ce8676d37cd05efe0726e5ffcdd9b52e4682df9c1ffaedf96ffca8b14c199R2308)
[^7]: [- を含む引数 | argparse --- コマンドラインオプション、引数、サブコマンドのパーサー — Python 3.11.1 ドキュメント](https://docs.python.org/ja/3/library/argparse.html#arguments-containing)
[^8]: [Use of Dash “-” in Command-Line Parameters | Baeldung on Linux](https://www.baeldung.com/linux/dash-in-command-line-parameters#using---to-specify-a-standard-input)
[^9]: [python - Disable/Remove argument in argparse - Stack Overflow](https://stackoverflow.com/questions/32807319/disable-remove-argument-in-argparse/32809642#32809642)
[^10]: [Comparing spakin:master...kantas-spike:feature-pass-remaining-command-line-args-to-python-code · spakin/SimpInkScr](https://github.com/spakin/SimpInkScr/compare/master...kantas-spike:SimpInkScr:feature-pass-remaining-command-line-args-to-python-code#diff-0b0ce8676d37cd05efe0726e5ffcdd9b52e4682df9c1ffaedf96ffca8b14c199R2237)
[^11]: [nargs | argparse --- コマンドラインオプション、引数、サブコマンドのパーサー — Python 3.11.1 ドキュメント](https://docs.python.org/ja/3/library/argparse.html#nargs)
[^12]: `filename_arg(self, name)`で`-`が指定された場合は、`None`を指定し強制的に`INPUT_FILE`が標準入力なるように変換している。