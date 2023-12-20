---
title: "MacOSでPythonのスクリプトをコマンドとして呼び出したい"
date: 2023-12-20T18:43:06+09:00
draft: false
tags:
  - python
  - macOS
---

自分で作成したPythonスクリプトをmacOSでターミナルでコマンドとして実行できるようにしたい。

<!--more-->

### 解決策

`spike.py`というPythonのスクリプトがあるとする。

通常、このスクリプトを実行するためには以下のように実行する必要がある。

```shell
python spike.py
```

しかし、以下の手順を行うと、`spike.py`自体を単体で実行できるようになる。

##### 手順

1. `spike.py`の先頭行に`#!/usr/bin/env python3`を記載する。[^1]
2. `chmod +x spike.py`を実行し、スクリプトに実行権限を付与する。

以上により、`./spike.py`のように直接実行するか、**PATH**の通ったディレクトリに`spike.py`を格納すれば、`spike.py`のみでスクリプトを実行できる。[^2]

### 参考

- [シバン (Unix) - Wikipedia](<https://ja.wikipedia.org/wiki/%E3%82%B7%E3%83%90%E3%83%B3_(Unix)>)
- [シバン行の意味 # シェルスクリプト - Wikipedia](https://ja.wikipedia.org/wiki/%E3%82%B7%E3%82%A7%E3%83%AB%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%97%E3%83%88#%E3%82%B7%E3%83%90%E3%83%B3%E8%A1%8C%E3%81%AE%E6%84%8F%E5%91%B3)
- [Shebang が interpreter を呼び出す仕組み - 理系学生日記](https://kiririmode.hatenablog.jp/entry/20090905/p1)

[^1]: このような先頭行のコマンドの指定行をシバン(shebang)と呼ぶ
[^2]: ファイルの拡張子で判断する訳ではないため、スクリプトに拡張子は不要。`spike`というファイルにシバンと実行権限があれば良い
