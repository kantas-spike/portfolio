---
title: "コマンドラインからSimple Inkscape Scriptingを使いたい"
date: 2023-01-17T13:32:46+09:00
draft: false
tags:
- python
- Inkscape
- SimpInkScr
---

[Simple Inkscape Scripting](https://github.com/spakin/SimpInkScr)を使って作成したスクリプトをコマンドラインから実行したい。

<!--more-->

### 解決策

[Procedural generation via Inkscape's command line · Issue #4 · spakin/SimpInkScr](https://github.com/spakin/SimpInkScr/issues/4)によると、Linux環境では以下により、コマンドラインから実行できる。

~~~shell
env PYTHONPATH=/usr/share/inkscape/extensions:$PYTHONPATH ~/.config/inkscape/extensions/simple_inkscape_scripting/simple_inkscape_scripting.py --py-source=my-script.py --output=output.svg input.svg
~~~

私のMacOSの場合、以下により、コマンドラインから実行できる。(1行だと長くなるので、例には環境変数を定義したシェルスクリプトとして記載)[^1]

[^1]: 私の環境では、`DYLD_LIBRARY_PATH`を指定しないとエラーになる。

~~~shell
# run_my_script_by_simpinkscr.sh
INKSCAPE_PYTHON=/Applications/Inkscape.app/Contents/Resources/bin/python3
SIMPINKSCR_SCRIPT=~/Library/Application\ Support/org.inkscape.Inkscape/config/inkscape/extensions/SimpInkScr/simpinkscr/simple_inkscape_scripting.py
export DYLD_LIBRARY_PATH=/Applications/Inkscape.app/Contents/Resources/lib
export PYTHONPATH=/Applications/Inkscape.app/Contents/Frameworks/Python.framework/Versions/3.10/lib/python3.10/site-packages:/Applications/Inkscape.app/Contents/Resources/share/inkscape/extensions:.

${INKSCAPE_PYTHON} "${SIMPINKSCR_SCRIPT}" --py-source=my-script.py --output=output.svg input.svg
~~~

入力ファイルと出力ファイルを引数で指定可能にすれば、より汎用的になる。

~~~shell
# run_my_script_by_simpinkscr.sh
INKSCAPE_PYTHON=/Applications/Inkscape.app/Contents/Resources/bin/python3
SIMPINKSCR_SCRIPT=~/Library/Application\ Support/org.inkscape.Inkscape/config/inkscape/extensions/SimpInkScr/simpinkscr/simple_inkscape_scripting.py
export DYLD_LIBRARY_PATH=/Applications/Inkscape.app/Contents/Resources/lib
export PYTHONPATH=/Applications/Inkscape.app/Contents/Frameworks/Python.framework/Versions/3.10/lib/python3.10/site-packages:/Applications/Inkscape.app/Contents/Resources/share/inkscape/extensions:.

${INKSCAPE_PYTHON} "${SIMPINKSCR_SCRIPT}" --py-source=my-script.py --output=$2 $1
~~~

~~~shell
% sh ./run_my_script_by_simpinkscr.sh input.svg output.svg
~~~

### 参考

- [Simple Inkscape Scripting](https://github.com/spakin/SimpInkScr)
- [Procedural generation via Inkscape's command line · Issue #4 · spakin/SimpInkScr](https://github.com/spakin/SimpInkScr/issues/4)