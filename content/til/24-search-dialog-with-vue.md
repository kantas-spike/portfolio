---
title: "Vueで検索フォームを作成したい"
date: 2022-08-26T00:12:03+09:00
draft: false
tags:
- vue
- hugo
---

Vueで検索フォームを作成したい。

<!--more-->

### 解決策

Hugoのページ情報を[Lunr.js](https://lunrjs.com/docs/index.html)を使ってインデックス化し、検索フォームで検索させる。

今回はページのタイトルのみインデックス化する。

#### 手順

1. [Lunr.js](https://lunrjs.com/docs/index.html)を使い、クライアントサイドで検索インデックスを作成し、検索可能にする。

2. そのために、検索インデックスの元となる情報は、Hugoで以下のコンテンツとレイアウトを用意し、`/portfolio/search/index.json` でページの情報を取得可能にする。

   - コンテンツ(content/search.md)

       ~~~md
       ---
       title: "Search"
       date: 2022-08-23T01:58:01+09:00
       draft: false
       outputs:
       - JSON
       layout: search
       ---
       ~~~

   - レイアウト(layout/_default/search.json)

       ~~~json
       {
           "results": [
           {{- range $index, $page := .Site.RegularPages }}
               {{- if $index -}},{{- end }}
           {
               "href": {{ .Permalink | jsonify }},
               "title": {{ .Title | jsonify }}
           }
           {{- end }}
           ]
       }
       ~~~

3. [axios](https://github.com/axios/axios)を使い `/portfolio/search/index.json` を取得し、インデックスを構築する。

4. [Vue.js](https://v3.ja.vuejs.org/)で検索フォームを作成し、キーワード入力に応じてインデックスを検索する。

#### 作成した検索フォーム

~~~rawhtml
<script src="https://unpkg.com/vue@next"></script>
<script src="//unpkg.com/lunr@2.3.6/lunr.js"></script>
<script src="https://cdn.jsdelivr.net/npm/lunr-languages@1.9.0/lunr.stemmer.support.js"></script>
<script src="https://cdn.jsdelivr.net/npm/lunr-languages@1.9.0/tinyseg.js"></script>
<script src="https://cdn.jsdelivr.net/npm/lunr-languages@1.9.0/lunr.ja.js"></script>
<script src="//unpkg.com/axios@0.19.0/dist/axios.js"></script>
<script src="https://unpkg.com/lodash@4.17.20/lodash.min.js"></script>

<div id="my_search">
</div>

<script type="text/x-template" id="my-app">
<search-panel v-on:update="keywordUpdated" :searchResults="results" />
</script>

<script type="text/x-template" id="my-search-panel">
    <div class="flex flex-col items-center border border-secondary-dark w-fit rounded bg-secondary-light text-secondary-dark mx-auto">
        <div class="flex items-center justify-center m-4">
            <div><i class="fa-solid fa-magnifying-glass text-3xl mr-2"></i></div>
            <input type="text" v-on:input="handleInput" v-on:keyup.enter="handleInput" class="border border-secondary-dark
            text-sm rounded-lg focus:ring-secondary-light focus:border-secondary-light block w-96 p-2.5" placeholder="Search this blog" required>
        </div>
        <div class="flex flex-col items-start mb-2 overflow-y-auto h-[400px]">
            <div class="p-2 m-2"  v-for="result in searchResults">
                <a :href="result.href">[[result.title]]</a>
            </div>
        </div>
    </div>
</script>

<script>
(()=>{
    const panel = {
        template: '#my-search-panel',
        data() {
            return {
            }
        },
        props: ['searchResults'],
        emits: ['update'],
        methods: {
            handleInput: _.debounce(function(e) {
                const val = e.target.value
                console.log(val)
                this.$emit('update', val)
            }, 500)
        }
    }

    const my_searchInfo = {
        searchData: {},
        searchIndex: {}
    }

    axios
        .get('/portfolio/search/index.json')
        .then(res => {
            my_searchInfo.searchData = res.data
            my_searchInfo.searchIndex = lunr(function() {
                this.ref('href')
                this.field('title')
                this.use(lunr.ja)
                my_searchInfo.searchData.results.forEach(e => {
                    this.add(e);
                })
            })
        })

    // app作成
    const my_app = Vue.createApp({
        template: '#my-app',
        data() {
            return {
                results: []
            }
        },
        components: {
            'search-panel': panel
        },
        methods: {
            keywordUpdated: function(keyword) {
                console.log(`updated: ${keyword}`)
                if (keyword.trim().length == 0) {
                    this.results = []
                } else {
                    const list = my_searchInfo.searchIndex.search(keyword).map(entry => {
                        console.log(entry)
                        const obj = my_searchInfo.searchData.results.filter(d => entry.ref == d.href)[0]
                        return { 'href': obj.href, 'title': obj.title }
                    })
                    this.results = list
                }
            }
        }
    })
    // app設定
    my_app.config.compilerOptions.delimiters = [ "[[", "]]" ]
    // htmlにマウント
    my_app.mount('#my_search')
})()
</script>
~~~

#### ソース

~~~html
<script src="https://unpkg.com/vue@next"></script>
<script src="//unpkg.com/lunr@2.3.6/lunr.js"></script>
<script src="https://cdn.jsdelivr.net/npm/lunr-languages@1.9.0/lunr.stemmer.support.js"></script>
<script src="https://cdn.jsdelivr.net/npm/lunr-languages@1.9.0/tinyseg.js"></script>
<script src="https://cdn.jsdelivr.net/npm/lunr-languages@1.9.0/lunr.ja.js"></script>
<script src="//unpkg.com/axios@0.19.0/dist/axios.js"></script>
<script src="https://unpkg.com/lodash@4.17.20/lodash.min.js"></script>

<div id="my_search">
</div>

<script type="text/x-template" id="my-app">
<search-panel v-on:update="keywordUpdated" :searchResults="results" />
</script>

<script type="text/x-template" id="my-search-panel">
    <div class="flex flex-col items-center border border-secondary-dark w-fit rounded bg-secondary-light text-secondary-dark mx-auto">
        <div class="flex items-center justify-center m-4">
            <div><i class="fa-solid fa-magnifying-glass text-3xl mr-2"></i></div>
            <input type="text" v-on:input="handleInput" v-on:keyup.enter="handleInput" class="border border-secondary-dark
            text-sm rounded-lg focus:ring-secondary-light focus:border-secondary-light block w-96 p-2.5" placeholder="Search this blog" required>
        </div>
        <div class="flex flex-col items-start mb-2 overflow-y-auto h-[400px]">
            <div class="p-2 m-2"  v-for="result in searchResults">
                <a :href="result.href">[[result.title]]</a>
            </div>
        </div>
    </div>
</script>

<script>
(()=>{
    const panel = {
        template: '#my-search-panel',
        data() {
            return {
            }
        },
        props: ['searchResults'],
        emits: ['update'],
        methods: {
            handleInput: _.debounce(function(e) {
                const val = e.target.value
                console.log(val)
                this.$emit('update', val)
            }, 500)
        }
    }

    const my_searchInfo = {
        searchData: {},
        searchIndex: {}
    }

    axios
        .get('/portfolio/search/index.json')
        .then(res => {
            my_searchInfo.searchData = res.data
            my_searchInfo.searchIndex = lunr(function() {
                this.ref('href')
                this.field('title')
                this.use(lunr.ja)
                my_searchInfo.searchData.results.forEach(e => {
                    this.add(e);
                })
            })
        })

    // app作成
    const my_app = Vue.createApp({
        template: '#my-app',
        data() {
            return {
                results: []
            }
        },
        components: {
            'search-panel': panel
        },
        methods: {
            keywordUpdated: function(keyword) {
                console.log(`updated: ${keyword}`)
                if (keyword.trim().length == 0) {
                    this.results = []
                } else {
                    const list = my_searchInfo.searchIndex.search(keyword).map(entry => {
                        console.log(entry)
                        const obj = my_searchInfo.searchData.results.filter(d => entry.ref == d.href)[0]
                        return { 'href': obj.href, 'title': obj.title }
                    })
                    this.results = list
                }
            }
        }
    })
    // app設定
    my_app.config.compilerOptions.delimiters = [ "[[", "]]" ]
    // htmlにマウント
    my_app.mount('#my_search')
})()
</script>
~~~

### 参考

- [Lunr.js](https://lunrjs.com/docs/index.html)
- [Build Websites with Hugo](https://pragprog.com/titles/bhhugo/build-websites-with-hugo/)
- [axios](https://github.com/axios/axios)
- [Vue.js](https://v3.ja.vuejs.org/)
