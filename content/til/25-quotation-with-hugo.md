---
title: "Hugoで引用した文を目立たせたい"
date: 2022-08-27T04:23:14+09:00
draft: false
tags:
- quotation
- hugo
- render_hooks
---

引用した文を目立たせたい。

<!--more-->

### 解決策

以下のような引用文専用のコードブロックと[Render Hooks for Code Blocks](https://gohugo.io/templates/render-hooks/#render-hooks-for-code-blocks)を用意する。

~~~~text
~~~quote
~~~
~~~~

引用元も記載するため、コードブロックに属性を引き渡す。

~~~~text
~~~quote {author="Eric Steven Raymond" source="How To Become A Hacker" url="http://www.catb.org/~esr/faqs/hacker-howto.html#believe5"}
Attitude is no substitute for competence.
~~~
~~~~

#### `render-codeblock-quote.html`の実装

~~~html
<div class="quote text-secondary-dark relative p-2 pt-6 pr-4 bg-secondary-light/30 border border-secondary-dark/30 rounded-md my-2">
    <div class="font-serif text-6xl absolute top-0 left-0 py-1 pl-3 font-bold text-secondary-dark/30">“</div>
    <div class="text-xl ml-10 mt-2">
        {{- .Inner | safeHTML }}
    </div>
    <div class="flex justify-end text-lg">
    {{ if .Attributes.author }}
        <div>— {{ .Attributes.author }}{{ if .Attributes.source }}, {{ end }}</div>
    {{ end }}
    {{ if and .Attributes.source .Attributes.url }}
    <div class="ml-4"><a href="{{ .Attributes.url }}">{{ .Attributes.source }}</a></div>
    {{ else if .Attributes.source }}
    <div class="ml-4">{{ .Attributes.source }}</div>
    {{ end }}
    </div>
</div>
~~~

#### 引用文の表示例

~~~quote {author="Eric Steven Raymond" source="How To Become A Hacker" url="http://www.catb.org/~esr/faqs/hacker-howto.html#believe5"}
Attitude is no substitute for competence.
~~~