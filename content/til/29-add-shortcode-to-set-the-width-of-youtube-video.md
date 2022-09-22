---
title: "表示時の幅を指定できるYoutube動画用のShortcodeを追加したい"
date: 2022-09-22T20:19:54+09:00
draft: false
tags:
- shortcodes
- hugo
---

Hugo標準のYoutube用ショートコードを使用すると、横幅一杯にYoutube動画が表示される。
幅をスタイル指定可能なYoutube動画用のShortcodeを追加したい。

<!--more-->

* Hugo標準のYoutube用ショートコードの使用例

~~~markdown
{{</* youtube BOP7IegsCl8 */>}}
~~~

上記のように記載すると、以下のように、ページ幅で動画が表示される。

{{< youtube BOP7IegsCl8 >}}

### 解決策

以下のような新たなショートコードを作成し、一定幅以上に動画が広がらないようにする。

~~~markdown
{{</* youtube_w BOP7IegsCl8 */>}}
~~~

上記のように記載すると、以下のように、指定ページ幅以内に動画が表示される。

{{< youtube_w BOP7IegsCl8 >}}

### youtube_w の実装イメージ

`youtube_w` では、最大幅を指定するための親要素となるdivで `youtbe` の内容を囲むようにする。

イメージとしては、以下のようなHTML構成になるように実装する。
今回は、最大幅のデフォルト値として、**tailwindcss** の 最初のブレークポイントプレフィックスである`sm`の幅(**640px**)を指定している。

~~~html
<div class="max-w-[640px]">
{{</* youtube BOP7IegsCl8 */>}}
</div>
~~~

あわせて、以前に作成した [Youtube playlist埋め込み用のショートコード](/til/2022/07/09-hugo-with-youtube-playlist/)も、同様の方式に修正する。

#### レスポンシブ表示の仕組み

Hugo標準のYoutube用ショートコード `youtube` のソースを確認すると、youtbe動画のiframeをレスポンシブに表示するようになっている。

簡略化すると以下のような構成になっている。

~~~html
<div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden;">
    <iframe src="youtubeのURL" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border:0;">
</div>
~~~

子要素のiframeにはyoutube動画が表示される。youtube動画のアスペクト比(横:縦)は、**16:9** になっている。

親要素のdivは、自身が表示される幅に従って、自身の高さをアスペクト比が **16:9** になるようにする必要がある。
表示される自身の幅はわかるので、**高さ** を **幅 × 9 / 16** つまり、 **幅 × 0.5625** となる。

要素の高さは `height: 56.25%` で指定できそうだが、この場合、要素の高さは包含ブロックの高さに対しての割合になるため正しく表示できない。

そのため、包含ブロックの幅に対しての割合になる`padding-bottom`を使用する。 `padding-bottom: 56.25%` で高さを正しく設定できる。

これにより、親要素のdivは、**padding-bottom**により、表示幅とその56.25%分の高さを確保できる。
子要素のiframeは、その親要素の全体に絶対位置指定で100%表示されるため、アスペクト比が **16:9** に保たれる。

### 参考

* [shortcodes/youtube.html](https://github.com/gohugoio/hugo/blob/b80853de90b10171155b8f3fde47d64ec7bfa0dd/tpl/tplimpl/embedded/templates/shortcodes/youtube.html)
* [youtubeの動画をCSSで固定比レイアウトにする](https://qiita.com/FJHoshi/items/11684c352aebc8d4f87b)
* [height - CSS](https://developer.mozilla.org/ja/docs/Web/CSS/height)
* [padding-bottom - CSS](https://developer.mozilla.org/ja/docs/Web/CSS/padding-bottom)
