---
title: "HugoでSVGを埋め込みたい"
date: 2022-07-24T08:11:18+09:00
draft: flase
tags:
- hugo
- svg
---

HugoでSVGのアイコンを埋め込みたい。

<!--more-->

### 解決策

いくつか方法がある。`<img>`タグからも読み込みたい場合は**方法1**、埋め込みのみの場合は**方法2**を採用する。

ただし、Markdown内で埋め込む場合は、ショートコードでラップする必要がある。

#### 方法1. `readFile` を使う

`static/image/xxx.svg`のように`static`フォルダにSVGファイルを置き、[readFile](https://gohugo.io/functions/readfile/)で読み込む。

~~~html
<span class="icon">{{ readFile "static/img/close_icon.svg" | safeHTML }}</span>
~~~

#### 方法2. `partial` を使う

`layouts/partials/icons/xxx.svg`のように`partial`フォルダにSVGファイルを置き、[partial](https://gohugo.io/templates/partials/#readout)で読み込む。

~~~html
<span class="icon">{{ partial "icons/xxx.svg" . }}</span>
~~~

注意: 埋め込む場合は、svgファイル内にXML宣言(`<?xml version="1.0" encoding="UTF-8"?>`)があれば、それがそのまま文字として出力されるので、事前に削除しておく必要がある。

### 参考

- [[SOLVED] Inject an SVG file into my HTML](https://discourse.gohugo.io/t/solved-inject-an-svg-file-into-my-html/7446/7)