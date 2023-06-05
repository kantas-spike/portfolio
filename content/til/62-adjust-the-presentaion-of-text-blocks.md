---
title: "CSSで文章を読み易くしたい"
date: 2023-06-06T06:03:18+09:00
draft: false
tags:
- css
- tailwindcss
---

私は文章を読むのが苦手なので、CSSでなるべく読み易い見た目に調整したい。

<!--more-->

### 解決策

アクセシビリティのガイドラインによると、[テキストブロックの視覚的提示](https://waic.jp/translations/UNDERSTANDING-WCAG20/visual-audio-contrast-visual-presentation.html)に以下の記載があった。

~~~markdown
- 利用者が、前景色と背景色を選択できる。
- 幅が 80 字を越えない (全角文字の場合は、40 字)。
- テキストが、均等割り付けされていない (両端揃えではない)。
- 段落中の行送りは、少なくとも 1.5 文字分ある。そして、段落の間隔は、その行送りの少なくとも 1.5 倍以上ある。
- テキストは、支援技術なしで 200％までサイズ変更でき、利用者が全画面表示にしたウィンドウで 1 行のテキストを読むときに横スクロールする必要がない。
~~~

行間、行内文字数、がポイントになるようだ。また、均等割付により文字間隔が空きすぎるのは良くないようだが、文字間隔も調整ポイントのようだ。

今回は文章用に以下のスタイルを定義した。

~~~css
.text_block {
    @apply leading-7 tracking-wider max-w-[50em] break-all;
}
~~~

[Tailwind CSS](https://tailwindcss.com/)を使用しているため、それぞれの意味は以下となる。

|class|Properties|
|---|---|
|leading-7|line-height: 1.75rem;|
|tracking-wider|letter-spacing: 0.05em;|
|max-w-[50em]|max-width: 50em;|
|break-all|word-break: break-all;|

これを起点にして、今後、行間、行内文字数、文字間隔を調整していく。

### 参考

- [達成基準 1.4.8 を理解する | WCAG 2.0解説書](https://waic.jp/translations/UNDERSTANDING-WCAG20/visual-audio-contrast-visual-presentation.html)
- [【CSS】上下左右の文字間隔を調整する方法を詳しく解説！ - WEBCAMP MEDIA](https://web-camp.io/magazine/archives/90656)
