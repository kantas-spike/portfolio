---
title: "Hugoでtailwindcssを使いたい"
date: 2022-07-27T10:44:53+09:00
lastmod: 2023-05-26T00:44:53+09:00
draft: false
tags:
- hugo
- tailwindcss
---

Hugoで**PostCSS**のプラグインとして**tailwindcss**を使いたい。

<!--more-->

**PostCSS** と **tailwindcss** の設定は以下とする。

- `postcss.config.js`

~~~js
var tailwind_config = require("./tailwind.config")
module.exports = {
  plugins: {
    'postcss-import': {
      root: __dirname,
      path: ['assets/css', 'node_modules'],
    },
    'tailwindcss/nesting': {},
    tailwindcss: tailwind_config,
    autoprefixer: {},
  }
}
~~~

- `tailwindcss.config.js`

~~~js
const path = require('path')
const theme_dir = path.basename(__dirname)

const colors = require('tailwindcss/colors')
module.exports = {
  content: ["./layouts/**/*.html", `./themes/${theme_dir}/layouts/**/*.html`, "./content/**/*.md"],
  // 略
}
~~~

### 解決策

いくつか方法がある。本サイトでは、トリッキーだがシンプルな[方法2](#方法2-hugoのpostcss機能を利用する)を採用している。
[方法1](#方法1-cssファイルの生成はwebpack-などのbundlerツールにまかせる) は、bundlerツールのインストールや設定が複雑なため採用しない。

#### 方法1： CSSファイルの生成は、webpack などのbundlerツールにまかせる

`webpack` を導入し、以下のような`webpack.config.js`を定義する。

~~~js
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = {
  output: {
      path: path.resolve(process.cwd(), 'assets'),
  },
  plugins: [new MiniCssExtractPlugin({ filename: 'css/theme.css' })],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"],
      },
    ],
  },
};
~~~

Hugoのレイアウトでは、以下のように、webpackで生成したCSSファイルを取得し読み込む。

~~~html
{{- $css := resources.Get "css/theme.css" -}}
<link rel="stylesheet" href="{{ $css.RelPermalink }}">
~~~

あとは、開発時は以下のように `webpack` と `hugo` の両方を起動する。

~~~shell
webpack --watch &
hugo server --disableFastRender --ignoreCache --cleanDestinationDir
~~~

サイト生成時は、`webpack`を実行後に`hugo`を実行する。

~~~shell
webpack
hugo --cleanDestinationDir
~~~

#### 方法2: Hugoの**PostCSS**機能と**resources.ExecuteAsTemplate**を利用する(Hugo v0.111.3以前)

Hugoには、リソースとして、`assets`フォルダに格納した`css`ファイルを取得し、**resources.PostCSS**関数により変換する機能がある。

この機能を利用すれば、**PostCSS**をプリプロセッサにして**tailwindcss**を利用できる。

しかし、**tailwindcss** は、設定ファイルの`content`に指定されたCSSファイルやHTMLファイルを解析し、使用されているユーティリティクラスのみ抽出しCSSファイルに保存する。
そのため、解析対象のCSSファイルやHTMLファイルが更新されるたびに、**PostCSS**関数を実行する必要がある。

ただ、たとえ解析対象のファイルが更新されたとしても、CSSファイルが既にHugoにキャッシュされているため、CSSファイルの更新を検知できず、**PostCSS**関数はCSSファイルを処理できない。

そこで、[resources.ExecuteAsTemplate](https://gohugo.io/hugo-pipes/resource-from-template/) 関数を使い、開発時は画面更新毎に、擬似的にCSSファイル名を変更させて、
毎回、強制的に**PostCSS**関数が実行されるようにする。

~~~html
    {{- $css := resources.Get "css/theme.css" -}}
    {{- if hugo.IsProduction }}
        {{- $css = $css | resources.PostCSS }}
    {{- else }}
        {{- $css = $css | resources.ExecuteAsTemplate (printf "css/theme.dev.%v.css" now.Unix) .
            | resources.PostCSS }}
    {{- end }}
    <link rel="stylesheet" href="{{ $css.RelPermalink }}">
~~~

#### 方法3: Hugoの**PostCSS**機能と**new cache buster**を利用する(Hugo v0.112.0以降)

[Hugo Release v0.112.0](https://github.com/gohugoio/hugo/releases/tag/v0.112.0)で、`TailwindCSS v3.x Support, new cache buster configuration`という機能が追加された。

これは、既に存在する`CSS purging with PostCSS`のための仕組みである`hugo_stats.json`を利用し、ページ変更にともなうCSSファイルの変更要否を検知し、
変更要の場合は、CSSファイルをHugoのキャッシュから削除し、**PostCSS**関数で再度CSSファイルを処理するようにする方法である。

この方法を利用すると、CSSファイルの読み込みは以下のようにシンプルになる。

~~~html
    {{- $css := resources.Get "css/theme.css" -}}
    {{- $css := $css | resources.PostCSS -}}
    {{- if hugo.IsProduction }}
        {{- $css = $css | resources.Minify | resources.Fingerprint }}
    {{- end }}
    <link rel="stylesheet" href="{{ $css.RelPermalink }}">
~~~

設定手順は以下になる。

1. `hugo_hugo_stats.json`を出力するように`config.toml`を修正

    ~~~toml
    # config.toml or hugo.toml
    #  ... 略 ...
    [build]
      # 手順1. hugo_hugo_stats.jsonを出力
      writeStats = true
    #  ... 略 ...
    ~~~

2. `tailwindc.config.js`の`content`設定に`hugo_hugo_stats.json`を追加

    ~~~js
    // tailwindc.config.js
    const path = require('path')
    const theme_dir = path.basename(__dirname)
    //  ... 略 ...

    module.exports = {
      // 手順2. `content`設定に`hugo_hugo_stats.json`を追加
      content: [`./hugo_stats.json`, `./themes/${theme_dir}/assets/**/*.{js,css}`],
    //  ... 略 ...
    }
    ~~~

3. Hugoで`hugo_hugo_stats.json`を監視するために、Assetとしてマウントするように`config.toml`を修正 [^1]

    ~~~toml
    # config.toml or hugo.toml
    [module]
      [[module.mounts]]
        # 手順3. hugo_stats.jsonをmountし、Hugoの監視対象に
        source = "hugo_stats.json"
        target = "assets/watching/hugo_stats.json"

    #  ... 略 ...
    [build]
      # 手順1. hugo_hugo_stats.jsonを出力
      writeStats = true
    #  ... 略 ...
    ~~~

4. `hugo_hugo_stats.json`の更新を検知したら、`theme.css`をキャッシュから外すように`cachebusters`に設定する

    ~~~toml
    # config.toml or hugo.toml
    [module]
      [[module.mounts]]
        # 手順3. hugo_stats.jsonをmountし、Hugoの監視対象に
        source = "hugo_stats.json"
        target = "assets/watching/hugo_stats.json"

    #  ... 略 ...
    [build]
      # 手順1. hugo_hugo_stats.jsonを出力
      writeStats = true
      [[build.cachebusters]]
        # 手順4. hugo_stats.jsonに変更があれば、theme.cssを更新する
        source = "assets/watching/hugo_stats\\.json"
        target = "theme\\.css"
    #  ... 略 ...
    ~~~

以上の設定後に、`--debug`オプション付きでHugoのサーバーを起動すると、コンソールにログが出力される。
そのなかの`cachebusterl:`というプレフィックスのログメッセージを確認すると`hugo_stats.json`の監視状況を確認できる。

~~~shell
hugo server --debug
~~~

また、実際の`tailwind.config.js`や`config.toml`の例は以下を参照のこと。

- [kantas-theme/tailwind.config.js at main · kantas-spike/kantas-theme](https://github.com/kantas-spike/kantas-theme/blob/main/tailwind.config.js)
- [portfolio/config.toml at main · kantas-spike/portfolio](https://github.com/kantas-spike/portfolio/blob/main/config.toml)

#### 参考 resources.ExecuteAsTemplate について

本来、[resources.ExecuteAsTemplate](https://gohugo.io/hugo-pipes/resource-from-template/) 関数は、
ロジックを含むテンプレートファイルを処理するための関数である。

例えば、以下のような`test.css.tmpl`を、

~~~css
:root {
  --main-bg-color: {{ .Site.Param.bgcolor }};
}
/* ..略.. */
~~~

処理してから`test.css`として読み込むために利用する。

~~~html
{{ $css := resources.Get "tmpl/test.css.tmpl" | resources.ExecuteAsTemplate "css/test.css" . }}
<link rel="stylesheet" href="{{ $css.RelPermalink }}">
~~~

### 参考

- [PostCSS | Hugo](https://gohugo.io/hugo-pipes/postcss/#readout)
- [Creating a resource from template | Hugo](https://gohugo.io/hugo-pipes/resource-from-template/)
- [tailwindcss](https://tailwindcss.com/docs/installation)
  - [Using PostCSS as your preprocessor | tailwindcss](https://tailwindcss.com/docs/using-with-preprocessors#using-post-css-as-your-preprocessor)
- [Making Tailwind JIT work with Hugo, the Version 3 edition](https://www.brycewray.com/posts/2022/03/making-tailwind-jit-work-hugo-version-3-edition/)
- [Release v0.112.0 · gohugoio/hugo](https://github.com/gohugoio/hugo/releases/tag/v0.112.0)

[^1]: Hugoの初回起動時は`hugo_stats.json`が存在しないため、`hugo_stats.json`をマウントできない。あらかじめ空の`hugo_stats.json`を作成するか、再度Hugoを起動する必要がある。
