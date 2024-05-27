---
title: "Pythonでコマンドラインプログラムを作成したい"
date: 2023-12-20T22:15:43+09:00
draft: false
tags:
  - python
  - macos
---

Pythonでコマンドラインプログラムを作成する場合の一般的な方法を知りたい。

<!--more-->

### 解決策

Pythonでコマンドラインオプションを扱うには、[argparse --- コマンドラインオプション、引数、サブコマンドのパーサー — Python 3.12.1 ドキュメント](https://docs.python.org/ja/3/library/argparse.html)を利用する。[^1]

GitHubで`import argparse`を含むソースコードを知らべてみると、[^2]
以下のような構造になっているようだ。

```python
#!/usr/bin/env python3

import argparse
import sys


def main():
    args = parse_args()
    # 以下に処理を書く


def parse_args():
    parser = argparse.ArgumentParser(description="memoru")
    # オプションを設定
    return parser.parse_args()


if __name__ == "__main__":
    sys.exit(main())

```

以下にコードを解説する。

#### シバン(`#!/usr/bin/env python3`)

1行目の`#!/usr/bin/env python3`はシバンと呼ばれる。
シバンは、スクリプト実行時に使用するインタプリタを指定するための特別な命令である。

詳細は、[macOSでPythonのスクリプトをコマンドとして呼び出したい]({{<relref "/til/97-macOSでPythonのスクリプトをコマンドとして呼び出したい.md">}})を参照。

#### `if __name__ == "__main__":`

`if __name__ == "__main__":`には、`python`によりスクリプトが直接実行され場合に、実行される処理を記述する。

- `aaa.py`というモジュールがあり`import aaa`のようにモジュールをインポートした場合、`__name__`にはモジュールの名前(`aaa`)が設定される。
- 一方、`python aaa.py`を実行した場合、その`__name__`は`__main__`になる。

#### `def parse_args():`

`argparse`のオプション指定などは関数にまとめておくと、ロジックが整理されて良さそうだ。

エラー時に、ヘルプを表示したいので、オプションのエラーチェックも、この関数内で行う方が良さそう。

#### `sys.exit(main())`

`sys.exit()`の引数に`0`or`None`を指定した場合は終了ステータスは正常終了、それ以外は異常終了になる。

`sys.exit()`の引数に、エラーなどのオブジェクトを指定した場合は、`stderr`にオブジェクトを出力し、終了ステータス1(異常終了)になる。

そのため、コマンドラインプログラムの処理を`main()`にまとめておけばその戻り値を`sys.exit()`に渡すことができる。

### まとめ

登場したAPIは以下になる。

| モジュール/パッケージ | API       | 説明                                                                                      |
| --------------------- | --------- | ----------------------------------------------------------------------------------------- |
| sys                   | exit [^4] | `SystemExit` 例外を発生させインタプリタを終了します。引数で終了ステータスを指定できます。 |

登場した用語は以下になる。

| 分類   | 用語                              | 説明                                                                                                                         |
| ------ | --------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| Python | トップレベルのスクリプト環境 [^3] | 実行を開始した最初のPythonモジュールのこと。 トップレベルのスクリプト環境では、`__name__` 属性に `__main__` が設定されます。 |

### 参考

- [\_\_main\_\_ --- トップレベルのスクリプト環境 — Python 3.12.1 ドキュメント](https://docs.python.org/ja/3/library/__main__.html)
- [6. モジュール — Python 3.12.1 ドキュメント](https://docs.python.org/ja/3/tutorial/modules.html#tut-modules)
- [sys.exit([arg]) # sys --- システムパラメータと関数 — Python 3.11.7 ドキュメント](https://docs.python.org/ja/3.11/library/sys.html#sys.exit)

[^1]: [Pythonでコマンドラインオプション取得したい]({{< relref "/til/16-python-option-parser.md" >}})
[^2]: [electron/script/zip-symbols.py at 95d094d75bddb99c83d2902fbc9a4335632a41cf · electron/electron](https://github.com/electron/electron/blob/95d094d75bddb99c83d2902fbc9a4335632a41cf/script/zip-symbols.py#L3C1-L3C1)
[^3]: [「トップレベルのスクリプト環境」とは **... # **main\_\_ --- Top-level code environment — Python 3.12.3 ドキュメント](https://docs.python.org/ja/3/library/__main__.html#what-is-the-top-level-code-environment)
[^4]: [sys.exit([arg]) # sys --- システムパラメータと関数 — Python 3.11.8 ドキュメント](https://docs.python.org/ja/3.11/library/sys.html#sys.exit)
