---
title: "Tailwind CSSでデフォルトのfont-familyを修正したい"
date: 2023-06-06T06:30:58+09:00
draft: false
tags:
- css
- tailwindcss
---

[Tailwind CSS](https://tailwindcss.com/docs/font-family)でブログのフォントを読みやすいフォントに修正したい。

<!--more-->

### 解決策

[Tailwind CSS](https://tailwindcss.com/docs/font-family)ではデフォルトのフォントは以下になるようだ。

|class|Properties|
|-----|-----|
|font-sans|font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";|

以下のように、[tailwind.config.js](https://tailwindcss.com/docs/font-family#customizing-the-default-font)のテーマを設定すれば、デフォルトのフォントを変更できる。

~~~js
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Proxima Nova', ...defaultTheme.fontFamily.sans],
      },
    }
  }
}
~~~

今回、デフォルトフォントに設定するフォントファミリーは、[デジタル庁](https://www.digital.go.jp/policies/servicedesign/designsystem/)を参考に、
[Noto Sans Japanese - Google Fonts](https://fonts.google.com/noto/specimen/Noto+Sans+JP)を採用したい。

~~~css
/* デジタル庁のstyleから抜粋 */
font-family: Noto Sans JP,-apple-system,blinkmacsystemfont,Segoe UI,Hiragino Kaku Gothic ProN,BIZ UDPGothic,meiryo,sans-serif;
~~~

ただし、[デジタル庁](https://www.digital.go.jp/policies/servicedesign/designsystem/)では、`Noto Sans JP`を`Webフォント`として読み込み必ず、そのフォントで表示されるようにしているようだ。

~~~css
/* デジタル庁のstyleから抜粋 */
@font-face {
    font-display: swap;
    font-family: Noto Sans JP;
    font-style: normal;
    font-weight: 400;
    src: local("Noto Sans JP"),url(/assets/fonts/NotoSansJP-Regular.woff2) format("woff2"),url(/assets/fonts/NotoSansJP-Regular.woff) format("woff"),url(/assets/fonts/NotoSansJP-Regular.ttf) format("truetype"),url(/assets/fonts/NotoSansJP-Regular.otf) format("opentype")
}

@font-face {
    font-display: swap;
    font-family: Noto Sans JP;
    font-style: normal;
    font-weight: 700;
    src: local("Noto Sans JP"),url(/assets/fonts/NotoSansJP-Bold.woff2) format("woff2"),url(/assets/fonts/NotoSansJP-Bold.woff) format("woff"),url(/assets/fonts/NotoSansJP-Bold.ttf) format("truetype"),url(/assets/fonts/NotoSansJP-Bold.otf) format("opentype")
}
~~~

今回は、`font-family`の優先順だけを調整する。
自PCで`Noto Sans JP`をあらかじめ利用しているので、`Noto Sans JP`の優先度を上げて表示させる。

~~~css
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Noto Sans JP', ...defaultTheme.fontFamily.sans],
      },
    }
  }
}
~~~

今後の課題として、`Webフォント`を利用できないか検討したい。
ダウンロードするフォントのサイズを減らすためにあらかじめ使用するフォントウェイトの整理等、検討が必要なようだ。

### 参考

- [Font Family - Tailwind CSS](https://tailwindcss.com/docs/font-family)
  - [Customizing the default font - Tailwind CSS](https://tailwindcss.com/docs/font-family#customizing-the-default-font)
- [デザインシステム｜デジタル庁](https://www.digital.go.jp/policies/servicedesign/designsystem/)