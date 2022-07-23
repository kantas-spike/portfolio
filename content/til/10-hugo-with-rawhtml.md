---
title: "HugoのMarkdownでHTMLをそのまま記述したい"
date: 2022-07-23T12:13:01+09:00
draft: false
tags:
- hugo
- render_hooks
---

HugoのMarkdown内にHTMLを直接記述すると、`<!-- raw HTML omitted -->`に変換され無視される。
直接HTMLを書く手段が欲しい。

<!--more-->

例えば、Markdownで表を書く場合、以下のように書く。

~~~markdown
| aa | bb | cc |
|:--:|:---|:---|
|あいうえお|かきくけこ|さしすせそ|
~~~

| aa | bb | cc |
|:--:|:---|:---|
|あいうえお|かきくけこ|さしすせそ|

しかし、表内にリストを書くような少し複雑な表は、HTMLを直接書けないために、書くことができない。

### 解決策

直接HTMLを書くための[Markdown Render Hooks](https://gohugo.io/templates/render-hooks/)を利用する。

`layouts/_default/_markup/render-codeblock-rawhtm.html`を作成する。

~~~html
<div class="rawhtml">
    {{- .Inner | safeHTML }}
</div>
~~~

これにより、以下のように直接HTMLを記載できる。

~~~~text
~~~rawhtml
<table>
<tr><th>aa<th>bb<th>cc</tr>
<tr><td><ul><li>あ<li>い<li>う<li>え<li>お</ul><td>かきくけこ<td>さしすせそ</tr>
</table>
~~~
~~~~

~~~rawhtml
<table>
<tr><th>aa<th>bb<th>cc</tr>
<tr><td><ul><li>あ<li>い<li>う<li>え<li>お</ul><td>かきくけこ<td>さしすせそ</tr>
</table>
~~~
### 参考

- [Tables (extension) | GitHub Flavor Markdown Spec](https://github.github.com/gfm/#tables-extension-)
- [Render Hooks for Code Blocks](https://gohugo.io/templates/render-hooks/#render-hooks-for-code-blocks)