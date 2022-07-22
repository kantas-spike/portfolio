---
title: "HugoでシンタックスハイライトCSSを利用したい"
date: 2022-07-22T14:35:35+09:00
draft: false
tags:
- hugo
- syntax_highlight
---

デフォルトだと`hugo`の`Markdown`のコードブロックには、シンタックスハイライト用の`style`が直接埋め込まれる。

`style`ではなく`class`名の埋め込みに変更し、`css`によりハイライトの表示を変更可能にしたい。

<!--more-->

### 解決策

`hugo`には、[Chroma](https://github.com/alecthomas/chroma)というシンタックスハイライター用のCSSを生成する機能がある。

以下の手順で生成したCSSを利用できる。

1. **サイト** の`config.toml`で以下の設定を追加し、`style`埋め込み → `class`名埋め込み方式に変更する。(**テーマ** の`config.toml`では反映されません。)

    ~~~toml
    [markup.highlight]
      noClasses = false
    ~~~

2. [Chroma Style Gallery](https://xyproto.github.io/splash/docs/all.html)を参考に好みのCSSファイルを生成

    ~~~shell
    cd ${themeのフォルダ}
    mkdir -p static/css
    hugo gen chromastyles --style=solarized-dark > static/css/syntax.css
    ~~~

3. 生成したCSSファイルをヘッド(`layouts/partials/head.html`)で読み込む

    ~~~html
    {{/*  略  */}}
    <link rel="stylesheet" href="{{ "css/syntax.css" | relURL }}">
    {{/*  略  */}}
    ~~~

### 参考

- [Syntax Highlight](https://gohugo.io/content-management/syntax-highlighting/)
- [Configuration markup - Highlight](https://gohugo.io/getting-started/configuration-markup#highlight)
- [hugo gen chromastyles](https://gohugo.io/commands/hugo_gen_chromastyles/)
- [Chroma Style Gallery](https://xyproto.github.io/splash/docs/all.html)
