---
title: "hugoでyoutubeのplaylistを埋め込みたい"
date: 2022-07-23T11:55:13+09:00
draft: false
tags:
- hugo
- shortcodes
---

youtube用の標準ショートコードのplaylist版が欲しい。
<!--more-->

Hugoにはyoutube動画を埋め込むショートコードがある。
以下のように書くと該当動画が埋め込まれる。

これのプレイリスト版が欲しい。

~~~markdown
{{</* youtube ignCTeEMaLk */>}}
~~~

~~~rawhtml
<div class="w-[640px]">
{{< youtube ignCTeEMaLk >}}
</div>
~~~

### 解決策

[youtube用の標準ショートコード](https://github.com/gohugoio/hugo/blob/master/tpl/tplimpl/embedded/templates/shortcodes/youtube.html)を参考に
[playlist用ショートコード](https://github.com/kantas-spike/kantas-theme/blob/main/layouts/shortcodes/youtube_pl.html)を`layouts/shortcodes/youtube_pl.html`作成した。

以下のように書くと該当プレイリストが埋め込まれる。

~~~markdown
{{</* youtube_pl PLYhWljFaYHSIgh9EBuibRFJc3sAAaOOxH */>}}
~~~

{{<youtube_pl PLYhWljFaYHSIgh9EBuibRFJc3sAAaOOxH>}}

### 参考

- [youtube - Shortcodes](https://gohugo.io/content-management/shortcodes/#youtube)
- [Create Your Own Shortcodes](https://gohugo.io/templates/shortcode-templates/)
- [youtube.html | gohugoio/hugo](https://github.com/gohugoio/hugo/blob/master/tpl/tplimpl/embedded/templates/shortcodes/youtube.html)
- [playlist用ショートコード](https://github.com/kantas-spike/kantas-theme/blob/main/layouts/shortcodes/youtube_pl.html)
