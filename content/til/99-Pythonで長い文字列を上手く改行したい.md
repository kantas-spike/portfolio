---
title: "Pythonで長い文字列を上手く改行したい"
date: 2023-12-20T22:56:37+09:00
draft: false
tags:
  - python
---

Pythonで長い文字列を書くと、`flake8`などのスタイルチェックツールに引っかかる。
上手く長い文字列を改行したい。

<!--more-->

### 解決策

[文字列リテラルの結合](https://docs.python.org/ja/3/reference/lexical_analysis.html#string-literal-concatenation)を使う。

以下のような長い文字列は、

```python
a = "aaaaaaaaaaaaabbbbbbbbbbbbbbcccccccccccccdddddddddddddddeeeeeeeeeeeeeeee"
```

以下のように、文字列リテラルを空白文字(スペースや改行)で区切って並べても同じ意味になる。(文字列を改行で区切る場合は、`()`で囲む必要がある。)

```python
b = (
    "aaaaaaaaaaaaa"
    "bbbbbbbbbbbbbb"
    "ccccccccccccc"
    "ddddddddddddddd"
    "eeeeeeeeeeeeeeee"
)
a == b # => True
```

この**文字列リテラルの結合**は、文法レベルで定義されており、スクリプトのコンパイル時に結合される。

また、以下のように通常の文字列リテラルと`f-strings`を混ぜることもできる。

```python
c = "012345" f"67{4*2}90"
c == "01234567890" # => True
```

### 参考

- [Pythonで長い文字列を複数行に分けて書く | note.nkmk.me](https://note.nkmk.me/python-long-string/)
- [2.4.2. 文字列リテラルの結合 (co... # 2. 字句解析 — Python 3.12.1 ドキュメント](https://docs.python.org/ja/3/reference/lexical_analysis.html#string-literal-concatenation)
- [Flake8: Your Tool For Style Guide Enforcement — flake8 6.1.0 documentation](https://flake8.pycqa.org/en/latest/)
