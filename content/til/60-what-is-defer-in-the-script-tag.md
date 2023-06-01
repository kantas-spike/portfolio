---
title: "scriptタグに設定されている`defer`って何？"
date: 2023-06-02T06:03:54+09:00
draft: false
tags:
- html
---

scriptタグに設定されている`defer`って何だ?

<!--more-->

### 調査結果

HTMLのページ内に`<script src="..."></script>`のようなscriptタグがあると、スクリプトがダウンロードされ、さらに実行されるまで、ページの解析がブロックされるためページ表示に時間がかかってしまう。

ページの表示時間を改善するために`defer`がある。HTMLのページ内に`<script defer src="..."></script>`がある場合、ページの解析と並行してスクリプトがダウンロードされる。
そして、ページの解析が完了して`DOMContentLoaded`イベントを発行する直前にスクリプトを実行する。

ページの解析とスクリプトとダウンロードを並行処理することでHTMLの表示時間を改善している。 [^1]

### 参考

- [スクリプト: async, defer](https://ja.javascript.info/script-async-defer)
- [<script>: スクリプト要素 - HTML: HyperText Markup Language | MDN](https://developer.mozilla.org/ja/docs/Web/HTML/Element/script)
- [Document: DOMContentLoaded イベント - Web API | MDN](https://developer.mozilla.org/ja/docs/Web/API/Document/DOMContentLoaded_event)

[^1]: `async`はページの解析と並行して、スクリプトのダウンロードと実行を行う。`DOMContentLoaded`イベントの直前ではなく、スクリプトが準備できしだい実行される。
