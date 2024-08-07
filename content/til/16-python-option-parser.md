---
title: "Pythonでコマンドラインオプション取得したい"
date: 2022-08-01T12:09:43+09:00
draft: false
tags:
  - python
  - argparse
---

Pythonで作った自作のコマンドラインツールで、コマンドラインオプションを利用したい。

<!--more-->

### 解決策

[argparse](https://docs.python.org/ja/3/library/argparse.html) を使う。

[argparse](https://docs.python.org/ja/3/library/argparse.html)では、オプションだけでなく引数も解析できる。

また、ヘルプを表示するメソッド(`print_usage()`)などもあり、機能豊富で至れり尽くせりのパッケージになっている。

#### 例 引数に1つの数値を持つコマンドの場合

```text
usage: hoge.py 5
```

`ArgumentParser`のインスタンスに`add_argument`で引数の名前と型を指定すれば、
解析結果として指定した名前の変数に、指定した型で引数が格納される。

```python
import argparse

parser = argparse.ArgumentParser(description='argparse test')
parser.add_argument('value', metavar='N', type=int, help='引数の数値')
args = parser.parse_args(['5']) # 引数なしで、parse_args()を呼びだすと`sys.argv`から取得
print(args.value, type(args.value))  # 5 <class 'int'> が表示
```

#### 例 引数に1つ以上の複数の数値を持つコマンドの場合

```text
usage: hoge.py 5 6 7
```

`ArgumentParser`のインスタンスに`add_argument`に`nargs='+'`(1つ以上の引数)の指定を追加する。

- その他のnargsの指定例
  - `nargs=N(整数)`: N個の引数
  - `nargs='?'`: 1個の引数。未指定の場合はデフォルト値を採用
  - `nargs='*'`: 0個以上の複数の引数

```python
import argparse

parser = argparse.ArgumentParser(description='argparse test')
parser.add_argument('values', metavar='N', type=int, nargs='+', help='引数の数値')
args = parser.parse_args(['5', '6', '7'])
print(args.values, type(args.values))  # [5, 6, 7] <class 'list'> が表示
```

#### 例 フラグオプションを持つコマンドの場合

```text
usage: hoge.py -i
```

```python
import argparse

parser = argparse.ArgumentParser(description='argparse test')
parser.add_argument('-i', action='store_true',help='大文字小文字を無視する')
args = parser.parse_args(['-i'])
print(args.i, type(args.i))  # True <class 'bool'> が表示
args = parser.parse_args([])
print(args.i, type(args.i))  # False <class 'bool'> が表示
```

#### 例 引数を1つ取るオプションを持つコマンドの場合

```text
usage: hoge.py --input foo.txt
```

```python
import argparse

parser = argparse.ArgumentParser(description='argparse test')
parser.add_argument('--input', metavar='INPUT_FILE', type=str, required=True, help='入力ファイル')
args = parser.parse_args(['--input', 'foo.txt'])
print(args.input, type(args.input))  # foo.txt <class 'str'> が表示
args = parser.parse_args([]) # 引数未指定時
print(args.n, type(args.n))  # エラーが発生 : error: the following arguments are required: --input
```

### まとめ

登場したAPIは以下になる。

| モジュール/パッケージ      | API                           | 説明                                                                           |
| -------------------------- | ----------------------------- | ------------------------------------------------------------------------------ |
| argparse [^1]              | ArgumentParser コンストラクタ | コマンドライン引数のパーザオブジェクトを生成する                               |
| arange.ArgumentParser [^3] | add_argument [^2]             | 解析したいコマンドライン引数の解析ルールを定義する                             |
|                            | parse_args [^4]               | コマンドライン引数を`add_argument`に定義したルールでパースし、解析結果を返す。 |

### 参考

- [argparse](https://docs.python.org/ja/3/library/argparse.html)

[^1]: [argparse --- Parser for command-line options, arguments and sub-commands — Python 3.12.3 ドキュメント](https://docs.python.org/ja/3/library/argparse.html)
[^2]: [add_argument() メソッド A... # argparse --- Parser for command-line options, arguments and sub-commands — Python 3.12.3 ドキュメント](https://docs.python.org/ja/3/library/argparse.html#the-add-argument-method)
[^3]: [class argparse.Argume... # argparse --- Parser for command-line options, arguments and sub-commands — Python 3.12.3 ドキュメント](https://docs.python.org/ja/3/library/argparse.html#argparse.ArgumentParser)
[^4]: [parse_args() メソッド Arg... # argparse --- Parser for command-line options, arguments and sub-commands — Python 3.12.3 ドキュメント](https://docs.python.org/ja/3/library/argparse.html#the-parse-args-method)
