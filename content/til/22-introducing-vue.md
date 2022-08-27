---
title: "Vue.jsを導入したい"
date: 2022-08-24T02:25:04+09:00
draft: false
tags:
- vue
- hugo
---

今後ブログに検索機能などを追加したいので、Hugoに `Vue.js` を導入したい。

<!--more-->

### 解決策

`Vue.js`を利用するには[いくつか方法](https://v3.ja.vuejs.org/guide/installation.html#%E3%82%A4%E3%83%B3%E3%82%B9%E3%83%88%E3%83%BC%E3%83%AB)がある。
今回はHugo単体で完結させるために、以下の方法を採用する。

- ページ上で CDN パッケージ として取り込む
- `<script type="x-template" />` からテンプレートを取得する

以下に`Vue.js`でUIを作成する手順を示す。

1. まず、`Vue.js`作成したUIを配置する場所を作成する。

    ~~~html
    <div id="app"></div>
    ~~~

2. そして、最新のVueのCDNパッケージを取り込む。

    ~~~html
    <script src="https://unpkg.com/vue@next"></script>
    ~~~

3. 次に、UIのテンプレートを定義する

    ~~~html
    <script type="x-template" id="app-vue">
      <div class="border border-secondary-dark p-4 rounded-md bg-secondary-light text-on-secondary-light w-fit">
          [[ message ]]
      </div>
    </script>
    ~~~

4. 最後に、Vueアプリを作成し、DOM上に配置する

    ~~~html
    <script>
    // テンプレートを指定してアプリを作成
    const app = Vue.createApp({
      template: '#app-vue',
      data() {
          return {
          message: 'Hellow Vue!'
        }
      }
    })
    // Hugoのテンプレート言語と区切り文字が衝突するため、[[, ]] に変更
    app.config.compilerOptions.delimiters = ["[[", "]]"]
    // 作成したアプリをDOM上に配置
    app.mount('#app')
    </script>
    ~~~

4. 実行結果は以下になる。

~~~rawhtml
<div id="app"></div>

<script src="https://unpkg.com/vue@next"></script>

<script type="x-template" id="app-vue">
  <div class="border border-secondary-dark p-4 rounded-md bg-secondary-light text-on-secondary-light w-fit">
      [[ message ]]
  </div>
</script>

<script>
// テンプレートを指定してアプリを作成
const app = Vue.createApp({
  template: '#app-vue',
  data() {
      return {
      message: 'Hellow Vue!'
    }
  }
})
// Hugoのテンプレート言語と区切り文字が衝突するため、[[, ]] に変更
app.config.compilerOptions.delimiters = ["[[", "]]"]
// 作成したアプリをDOM上に配置
app.mount('#app')
</script>
~~~

#### ソース

~~~html
<div id="app"></div>

<script src="https://unpkg.com/vue@next"></script>

<script type="x-template" id="app-vue">
  <div class="border border-secondary-dark p-4 rounded-md bg-secondary-light text-on-secondary-light w-fit">
      [[ message ]]
  </div>
</script>

<script>
// テンプレートを指定してアプリを作成
const app = Vue.createApp({
  template: '#app-vue',
  data() {
      return {
      message: 'Hellow Vue!'
    }
  }
})
// Hugoのテンプレート言語と区切り文字が衝突するため、[[, ]] に変更
app.config.compilerOptions.delimiters = ["[[", "]]"]
// 作成したアプリをDOM上に配置
app.mount('#app')
</script>
~~~

### 参考

- [はじめに | Vue.js](https://v3.ja.vuejs.org/guide/introduction.html)
- [How to use Vue.js with a Hugo project](https://discourse.gohugo.io/t/how-to-use-vue-js-with-a-hugo-project/25401)
- [app.config.compilerOptions.delimiters](https://v3.ja.vuejs.org/api/application-config.html#compileroptions-delimiters)