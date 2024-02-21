---
title: "curlでダウンロードする"
date: 2024-02-22T00:31:17+09:00
draft: false
tags:
  - curl
  - tool
---

[curl](https://curl.se/)を使って、[Homebrew](https://brew.sh/)のFomulaファイルをダウンロードしたい。

<!--more-->

### 解決策

`-OL`オプションをつけて`curl`実行する。[^1]

以下のように実行すると、URLの内容をURLのベースネームをファイル名として保存する。

```shell
$ curl -OL https://github.com/Homebrew/homebrew-core/raw/2fd8dba871a6a5412fa7c00b12ac99b5738cd199/Formula/h/hugo.rb
$ ls
hugo.rb
```

### 参考

- [curl - Tutorial](https://curl.se/docs/tutorial.html)
- [curl - How To Use # -L](https://curl.se/docs/manpage.html#-L)
- [curl - How To Use # -O](https://curl.se/docs/manpage.html#-O)

[^1]: `-O`はURLのベースネームをファイル名にして保存.`-L`は`Location`ヘッダによるリダイレクトに対応
