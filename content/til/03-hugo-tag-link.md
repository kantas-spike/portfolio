---
title: "hugoで環境に依存しないタグのリンクを取得したい"
date: 2022-07-15T11:28:26+09:00
year: "2022"
month: "2022/07"
draft: false
tags:
- hugo
---

ページに定義されたタグから環境に依存しないURLを生成したい。

<!--more-->

参考書([Build Websites with Hugo](https://pragprog.com/titles/bhhugo/build-websites-with-hugo/))の例では、`.Params.tags`からタグのURLを生成していた。

~~~go
{{ range .Params.tags}}
    <span>
    <a class="tag_link" href="/tags/{{ . | urlize }}">#{{ . }}</a>
    </span>
{{ end}}
~~~

しかし、`href="/tags/{{ . | urlize }}"`のように、URL生成部分がハードコーディングなため、
本サイトのように`/portfolio/`配下にサイトが配置されるケースでリンク切れになる。

### 解決方法

`.GetTerms "tags"`により、ページのタグ情報を取得し、タグ情報の`.PermaLink`および`.LinkTitle`を利用すれば良い。

~~~go
{{ range (.GetTerms "tags")}}
    <span>
    <a class="tag_link" href="{{ .Permalink }}">#{{ .LinkTitle }}</a>
    </span>
{{ end}}
~~~

### 参考

- [Display a Single Piece of Content’s Taxonomies](https://gohugo.io/templates/taxonomy-templates/#display-a-single-piece-of-contents-taxonomies)