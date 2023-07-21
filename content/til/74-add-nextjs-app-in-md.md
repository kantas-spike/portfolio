---
title: "Markdownのページ内にNext.jsアプリを埋め込みたい"
date: 2023-07-10T06:01:59+09:00
draft: false
tags:
- next.js
- hugo
---

[以前の記事]({{< ref "/til/72-publich-next.js-app-with-hugo.md" >}})で公開した Next.jsアプリをMarkdownページにも埋めこみたい。

<!--more-->

### 解決策

以下のように、Markdown内に[`rawhtml`のコードブロック(自作したMarkdown Render Hooks)](https://kantas-spike.github.io/portfolio/til/2022/07/10-hugo-with-rawhtml/)を記載する。

~~~~html
~~~rawhtml
<iframe id="hogeframe" src="/tictactoe" width="100%"></iframe>

<script>
const iframe = document.getElementById('hogeframe');
const defaultHeight = iframe.contentDocument.body.scrollHeight
console.log("defaultHeight:", defaultHeight)
const margin_y = 16 * 3 // ここは手動調整 TODO 要修正
iframe.style.height = (defaultHeight + margin_y)+ 'px'
</script>
~~~
~~~~

~~~rawhtml
<iframe id="hogeframe" src="/tictactoe" width="100%"></iframe>

<script>
const iframe = document.getElementById('hogeframe');
const defaultHeight = iframe.contentDocument.body.scrollHeight
console.log("defaultHeight:", defaultHeight)
const margin_y = 16 * 3 // ここは手動調整 TODO 要修正
iframe.style.height = (defaultHeight + margin_y)+ 'px'
</script>
~~~

### 課題

Next.jsアプリの動作の結果、高さが大きくなるため、`<iframe />`にスクロールが表示される。

動的な高さに応じて、`<iframe />`の高さを変化させる方法については要検討。

#### 参考

- [Embedding and Styling External HTML in Next.js Project | by Mayank Chaudhari | Medium](https://mayank1513.medium.com/embedding-and-styling-external-html-in-next-js-project-78f6bfdd511a)
- [javascript - Iframe does not trigger resize event - Stack Overflow](https://stackoverflow.com/questions/27846057/iframe-does-not-trigger-resize-event)
- [How to Resize iframes with Message Events - DEV Community](https://dev.to/tvanantwerp/how-to-resize-iframes-with-message-events-2fec)
- [Make an iframe automatically resize to fit its content | by Filip Haglund | Medium](https://medium.com/@kaptenadhoc/how-to-make-an-iframe-automatically-resize-to-fit-its-content-31593ff54f01)