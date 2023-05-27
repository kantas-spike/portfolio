---
title: "Reactを導入したい"
date: 2023-05-26T10:36:57+09:00
draft: false
tags:
- react
- hugo
---

今後ブログに検索機能などを追加したいので、Hugoに [React](https://react.dev/) を導入したい。

<!--more-->

以前、[HugoにVue.jsを導入する方法](/til/2022/08/22-introducing-vue/)について学んだ。

しかし、Hugo標準で`vue`のテンプレートに対応していないため、テンプレートを`<script type="x-template"/>`内に記載するというトリッキーな方法で実現した。

一方、[React](https://react.dev/)は、[js.Build](https://gohugo.io/hugo-pipes/js/)を利用すれば、Hugo標準機能で利用できるようだ。

### 解決策

以下の方法を採用する。

- npmで`React`を導入する
- [js.Build](https://gohugo.io/hugo-pipes/js/)を使って`js`や`jsx`ファイルを処理する

手順は以下となる。

1. まず、`react`と`react-dom`をインストール

    ~~~shell
    npm install --save react react-dom
    ~~~

2. 次に、`React`で作成したUIを配置する場所を作成する。

    ~~~~html
    ~~~rawhtml
    <div id="app"></div>
    ~~~
    ~~~~

3. `assets/js/hello-react.jsx`を作成する

    ~~~jsx
    import * as React from 'react'
    import { createRoot } from 'react-dom/client';

    function MyButton() {
        return (
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-4">
            I'm a button
            </button>
        );
    }

    export default function MyApp() {
        return (
            <div className="bg-stone-200 rounded-md m-4 p-2 text-center font-bold">
            <h1>Welcome to my app!!!</h1>
            <MyButton />
            </div>
        );
    }

    const container = document.getElementById('app')
    const root = createRoot(container)
    root.render(<MyApp />)
    ~~~

4. Markdown内で[js.Build](https://gohugo.io/hugo-pipes/js/)を使って`js`や`jsx`ファイルを処理する可能にするため、Shortcode(`include-with-jsbuild.html`)を作成する

    ~~~html
    <!-- layouts/shortcodes/include-with-jsbuild.html -->
    {{- $jsFile := .Get "jsFile" -}}

    {{ $defines := dict "process.env.NODE_ENV" `"development"` }}

    {{ $opts := dict "defines" $defines }}
    {{ $built := resources.Get $jsFile | js.Build $opts }}
    <script type="text/javascript" src="{{ $built.RelPermalink }}" defer></script>
    ~~~

5. Shortcode(`include-with-jsbuild.html`)を使って、`assets/js/hello-react.jsx`を読み込む

    ~~~markdown
    {{</* include-with-jsbuild jsFile="js/hello-react.jsx" */>}}
    ~~~

6. 実行結果は以下になる

~~~rawhtml
<div id="app"></div>
~~~

{{< include-with-jsbuild jsFile="js/hello-react.jsx" >}}

### 参考

- [React](https://react.dev/)
  - [Add React to an Existing Project – React](https://react.dev/learn/add-react-to-an-existing-project)
- [js.Build | Hugo](https://gohugo.io/hugo-pipes/js/)
- [ESBuild Live Reloading - HUGO](https://discourse.gohugo.io/t/esbuild-live-reloading/30152/7)
- [【Hugo】Markdownで作成する記事にReactを組み込む - 時々前進](https://right-tech.net/tips/hugo-x-react/)
- [esbuild - API](https://esbuild.github.io/api/#platform)
