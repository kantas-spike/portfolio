---
title: "Hugoでtailwindcssを使いたい"
date: 2022-07-27T10:44:53+09:00
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

#### 方法2: Hugoの**PostCSS**機能を利用する

Hugoには、リソースとして、`assets`フォルダに格納した`css`ファイルを取得し、**resources.PostCSS**関数により変換する機能がある。

この機能を利用すれば、**PostCSS**をプリプロセッサにして**tailwindcss**を利用できる。

しかし、**tailwindcss** は、設定ファイルの`content`に指定されたCSSファイルやHTMLファイルを解析し、使用されているユーティリティクラスのみ抽出しCSSファイルに保存する。
そのため、解析対象のCSSファイルやHTMLファイルが更新されるたびに、**PostCSS**関数を実行する必要がある。

ただ、Hugoの**PostCSS**関数は、インプットのCSSファイルに変更がなければ処理を行わないため、たとえ解析対象のファイルが更新されたとしても、**PostCSS**関数が実行されないため、CSSファイルが処理されない。

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
- [Creating a resource from template | Hugo ](https://gohugo.io/hugo-pipes/resource-from-template/)
- [tailwindcss](https://tailwindcss.com/docs/installation)
  - [Using PostCSS as your preprocessor | tailwindcss](https://tailwindcss.com/docs/using-with-preprocessors#using-post-css-as-your-preprocessor)
- [Making Tailwind JIT work with Hugo, the Version 3 edition](https://www.brycewray.com/posts/2022/03/making-tailwind-jit-work-hugo-version-3-edition/)