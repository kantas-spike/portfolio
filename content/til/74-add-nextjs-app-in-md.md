---
title: "Markdownのページ内にNext.jsアプリを埋め込みたい"
date: 2023-07-10T06:01:59+09:00
draft: false
tags:
- next.js
- hugo
---

[以前の記事]({{< ref "/til/72-publich-next.js-app-with-hugo.md" >}})で公開した Next.jsアプリをMarkdownページにも埋め込みたい。

<!--more-->

### 解決策

`<iframe/>`内にNext.jsアプリを埋め込むだけだと、アプリ側の高さが変更された場合、`<iframe/>`にはスクロールバーが表示され、アプリ全体が表示されない。

まずは、この現象を避けるために、Next.jsアプリを修正し、高さが変更された場合、親ウィンドウにメッセージを表示するようにする。

~~~js
// app/page.js
'use client'

import Game from "@/components/game"
import { useEffect, useRef } from "react"

export default function Home() {
  const divRef = useRef(null)
  useEffect(() => {
    // フレーム内に表示されている場合
    if (window.self !== window.top) {
      console.log("in frame")
      // アプリの高さを監視
      const resizeObserver = new ResizeObserver(entries => {
        for (let entry of entries) {
          if (entry.borderBoxSize[0]) {
            console.log(entry.borderBoxSize[0])
            console.log(`h: ${entry.borderBoxSize[0].blockSize}, w: ${entry.borderBoxSize[0].inlineSize}`)
            // アプリの高さ変更があれば、親ウィンドウに高さを通知
            window.parent.postMessage({ height: entry.borderBoxSize[0].blockSize }, "*")
          }
        }
      })
      resizeObserver.observe(divRef.current)
    } else {
      console.log("not in frame")
    }
    return () => {
      console.log("resizeObserver.disconnect()...")
      resizeObserver.disconnect()
    }
  }, [])

  return (
    <div ref={divRef} className="m-4 p-4 border rounded-md">
      <Game/>
    </div>
  )
}
~~~

あとは、以下のように、Markdown内に[`rawhtml`のコードブロック(自作したMarkdown Render Hooks)](https://kantas-spike.github.io/portfolio/til/2022/07/10-hugo-with-rawhtml/)を記載する。

`window.addEventListener("message", ...)`で、Next.jsアプリからの高さ変更通知をチェックし、変更があれば`<iframe/>`の高さを修正する。

~~~~html
~~~rawhtml
<iframe id="hogeframe" src="/tictactoe" width="100%"></iframe>

<script>
const iframe = document.getElementById('hogeframe');
const margin_y = 16 * 2 // ここは手動調整 TODO 要修正
window.addEventListener("message", (event) => {
    console.log(`event.origin: ${event.origin}`)
    console.log(`event.data.height: ${event.data.height}`)
    if (event.data.height) {
        iframe.style.height = (event.data.height + margin_y) + 'px'
    }
}, false);
const defaultHeight = iframe.contentDocument.body.scrollHeight
console.log("defaultHeight:", defaultHeight)
iframe.style.height = (defaultHeight + margin_y)+ 'px'
</script>
~~~
~~~~

### 埋め込まれた Next.jsアプリ

~~~rawhtml
<iframe id="hogeframe" src="/tictactoe" width="100%"></iframe>

<script>
const iframe = document.getElementById('hogeframe');
const margin_y = 16 * 2 // ここは手動調整 TODO 要修正
window.addEventListener("message", (event) => {
    console.log(`event.origin: ${event.origin}`)
    console.log(`event.data.height: ${event.data.height}`)
    if (event.data.height) {
        iframe.style.height = (event.data.height + margin_y) + 'px'
    }
}, false);
const defaultHeight = iframe.contentDocument.body.scrollHeight
console.log("defaultHeight:", defaultHeight)
iframe.style.height = (defaultHeight + margin_y)+ 'px'
</script>
~~~

#### 参考

- [How to Resize iframes with Message Events - DEV Community](https://dev.to/tvanantwerp/how-to-resize-iframes-with-message-events-2fec)
- [ResizeObserver - Web API | MDN](https://developer.mozilla.org/ja/docs/Web/API/ResizeObserver)
- [Window.postMessage() - Web API | MDN](https://developer.mozilla.org/ja/docs/Web/API/Window/postMessage)
