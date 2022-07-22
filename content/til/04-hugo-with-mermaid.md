---
title: "hugoでmermaid.jsを使いたい"
date: 2022-07-22T13:49:28+09:00
draft: false
tags:
- hugo
- mermaid.js
- render_hooks
---

Hugoで[mermaid.js](https://mermaid-js.github.io/mermaid/#/)を使いたい。

<!--more-->

### 解決策

[カスタムshortcode](https://gohugo.io/templates/shortcode-templates/#create-custom-shortcodes)を作成する方法もあるようですが、
今回は、[Markdown Render Hooks](https://gohugo.io/templates/render-hooks/)を利用する方法を採用します。

`layouts/_default/_markup/render-codeblock-mermaid.html`を作成します。

~~~html
<div class="mermaid">
  {{- .Inner | safeHTML }}
</div>
{{ .Page.Store.Set "hasMermaid" true }}
~~~

これは、[コード例](#コードブロック例)のような`mermaid`のコードブロックがあったときに、以下を実行します。

- `<div class='mermaid'/>`内に、記載コードをそのまま出力
- ページストアで、hasMermaid に true を設定

あとは、`layouts/_default/baseof.html`内で、ページストアで、hasMermaidが設定されてい場合のみ、`mermaid.js`を読み込み初期化するようにすれば、`mermaid.js`が動きます。

実際の[表示例](#実行例)を確認ください。

~~~html
{{ if .Page.Store.Get "hasMermaid" }}
<script src="https://cdn.jsdelivr.net/npm/mermaid/dist/mermaid.min.js"></script>
<script>
    mermaid.initialize({ startOnLoad: true });
</script>
{{ end }}
~~~

#### コードブロック例

~~~~text
~~~mermaid
flowchart TD
    Start --> Stop
~~~
~~~~

#### 実行例

~~~mermaid
flowchart TD
    Start --> Stop
~~~

### 参考
- [Mermaid Diagrams](https://gohugo.io/content-management/diagrams/#mermaid-diagrams)
- [Render Hooks for Code Blocks](https://gohugo.io/templates/render-hooks/#render-hooks-for-code-blocks)

