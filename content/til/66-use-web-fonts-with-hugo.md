---
title: "HugoでWebフォントを利用したい"
date: 2023-06-07T14:50:17+09:00
draft: false
tags:
- font
- hugo
---

サブセット化したWebフォントをHugoで利用したい。

<!--more-->

### 解決策

1. テーマの`static`ディレクトリ内に`fonts`ディレクトリ(`themes/kantas/static/fonts`)を作成しWebフォントを配置する。
2. HTMLの`<head/>`内で、あらかじめフォントを読み込む

    ~~~html
    <link rel="preload" href="{{ .Site.BaseURL }}/fonts/NotoSansJP-Regular.woff2" as="font" type="font/woff2" crossorigin="anonymous">
    <link rel="preload" href="{{ .Site.BaseURL }}/fonts/NotoSansJP-Bold.woff2" as="font" type="font/woff2" crossorigin="anonymous">
    ~~~

3. CSSファイル(`themes/kantas/assets/css/fonts.css`)を追加し、`@font-face`を定義する。 [^1] [^2] [^3]

    ~~~css
    @font-face {
        font-display: swap;
        font-family: Noto Sans JP;
        font-style: normal;
        font-weight: 400;
        src: local("Noto Sans JP"),url(../fonts/NotoSansJP-Regular.woff2) format("woff2")
    }

    @font-face {
        font-display: swap;
        font-family: Noto Sans JP;
        font-style: normal;
        font-weight: 700;
        src: local("Noto Sans JP Bold"),url(../fonts/NotoSansJP-Bold.woff2) format("woff2")
    }
    ~~~

4. `fonts.css`をHTML内で読み込む

    ~~~html
    <!-- 略 -->
    {{- $fonts_css := resources.Get "css/fonts.css" | resources.Fingerprint -}}
    <link rel="stylesheet" href="{{ $fonts_css.RelPermalink }}">
    <!-- 略 -->
    ~~~

5. Webフォントが利用されているか確認する

    1. Chromeの`DevTools`で、ページのWebフォントが表示されているであろう要素を選択して、右クリックして`検証`を選択
    2. `DevTools`の`Elements`タブ内の`Computed`タブを表示し、スクロールして一番下に表示される`Rendered Fonts`を確認する

        以下のように、`Noto Sans JP`が`Network resource`と表示されていれば、Webフォントが利用されている。

        ~~~text
        Noto Sans JP—Network resource(3 glyphs)
        ~~~

        もし、`Network resource`ではなく、`Local file`と表示されている場合、Webフォントではなく、自PCにインストールされているフォントが利用されている。

### 参考

- [@font-face - CSS: カスケーディングスタイルシート | MDN](https://developer.mozilla.org/ja/docs/Web/CSS/@font-face)
- [fontTools Docs — fontTools Documentation](https://fonttools.readthedocs.io/en/latest/#utilities)
- [【備忘録】Chrome DevToolsで要素に適用されているフォントを確認する方法 - Qiita](https://qiita.com/yuusuke510/items/20bf219e90d22ff283be)
- [url() - CSS: カスケーディングスタイルシート | MDN](https://developer.mozilla.org/ja/docs/Web/CSS/url)

[^1]: WebフォントのURLは、CSSファイルからの相対パスで指定する
[^2]: `local()`と`url()`を併記することで、自PCに該当フォントがない場合のみWebフォントを利用するようになる。
[^3]: MacOSのChromeの場合、`local("Noto Sans JP")`と`font-weight: 700`だけでは太字にならない。`local("Noto Sans JP Bold")`のようにフルネームを指定する必要があるようだ。 参考: [@font-face で font-weight: 700を指定時に、local(Noto Sans JP)では太字にならない · Issue #52 · kantas-spike/kantas-theme](https://github.com/kantas-spike/kantas-theme/issues/52)