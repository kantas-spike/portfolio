---
title: "Webページを PDF化したい"
date: 2024-02-28T02:04:22+09:00
draft: false
tags:
  - pandoc
  - tool
---

Webサイトで公開したページをPDF化して、ブックリーダーなどでオフラインでも読めるようにしたい。

<!--more-->

### 解決策

[Pandoc - index](https://pandoc.org/)を使うと、指定したURLのページを各種フォーマットのファイルに変換できる。

以下のように`-f`で入力フォーマット、`-t`で出力フォーマットを指定する。

```shell
pandoc -f html -t markdown https://www.fsf.org
```

以下のようにURLにアクセス時に、リクエストヘッダを修正して`Use-Agent`を指定することもできる。

```shell
pandoc -f html -t markdown --request-header User-Agent:'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36' https://www.fsf.org
```

### 参考

- [Pandoc User’s Guide 日本語版 — 日本Pandocユーザ会](https://pandoc-doc-ja.readthedocs.io/ja/latest/users-guide.html)
