---
title: "JavaScriptを使ってCSSの色表記を変換したい"
date: 2023-07-28T16:23:27+09:00
draft: false
tags:
- javascript
- color
---

[Storybook: Frontend workshop for UI development](https://storybook.js.org/)の[ColorPalette](https://storybook.js.org/docs/react/api/doc-block-colorpalette)を使って、
色調パレットを作成している。

色調作成時のトーン操作は`hsl()`形式を使い、色の表記時には`16進数`形式を使いたい。

<!--more-->
### 解決策

色表記を変換するためのJavascriptライブラリはいくつもあるようだ。

今回は、人気のありそうな[gka/chroma.js](https://github.com/gka/chroma.js)を採用する。

#### インストール

~~~shell
npm install chroma-js
~~~

#### 使い方

基本的な使い方は以下になる。

~~~js
import chroma from "chroma-js";

primary = chroma("#5267ad")
primary.hex()      // #5267ad
primary.css()      // rgb(82,103,173)
primary.css('hsl') // hsl(226.15,35.69%,50%)
wk = primary.set('hsl.l', 90 / 100) // return new color, primary not changed
wk.css()           // rgb(220,225,239)
wk.css('hsl')      // hsl(224.21,37.25%,90%)
~~~

`primary`カラーの13個の色調パレットの値は以下で求めれる。

~~~js
import chroma from "chroma-js";

primary = chroma("#5267ad")

[0,10,20,30,40,50,60,70,80,90,95,99,100].map((val) => primary.set('hsl.l', val / 100).hex())
// ['#000000', '#101523', '#212945', '#313e68', '#42528a', '#5267ad', '#7585bd', '#97a4ce', '#bac2de', '#dce1ef', '#eef0f7', '#fcfcfd', '#ffffff']
~~~

### 参考

- [10 Best Color Manipulation JavaScript Libraries (2023 Update) | jQuery Script](https://www.jqueryscript.net/blog/best-color-manipulation.html)
- [gka/chroma.js: JavaScript library for all kinds of color manipulations](https://github.com/gka/chroma.js)
  - [chroma.js api docs!](https://www.vis4.net/chromajs/)
