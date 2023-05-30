---
title: "Reactを使って検索画面を作る"
date: 2023-05-31T02:16:55+09:00
draft: false
tags:
- react
---

Reactを使って検索画面を作りたい。

<!--more-->

### 解決策

Hugoのページ情報を[Lunr.js](https://lunrjs.com/docs/index.html)を使ってインデックス化し、検索フォームで検索させる。

今回はページのタイトルのみインデックス化する。

#### 手順


1. `Lunr.js`関連パッケージとHTTP通信用の`axios`をインストール

    ~~~shell
    npm install lunr lunr-languages axios
    ~~~

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

3. 検索画面を配置する場所を定義する

    ~~~~html
    ~~~rawhtml
    <div id="search_menu_wk"></div>
    ~~~
    ~~~~

4. 検索用モーダル画面を作成する(`assets/js/search-modal.jsx`)

    ~~~jsx
    import React, { useState, useEffect, useRef} from 'react'
    import { createRoot } from 'react-dom/client'
    import axios from 'axios'
    const lunr = require("lunr")
    require("lunr-languages/lunr.stemmer.support")(lunr)
    require("lunr-languages/tinyseg")(lunr)
    require("lunr-languages/lunr.ja")(lunr)
    const _ = require("lodash")

    export default function SearchModal({show, close}) {

        const inputRef = useRef(null);

        const [searchResults, setSearchResults] = useState([])
        const [mySearchInfo, setMySearchInfo] = useState({
            searchData: {},
            searchIndex: {}
        })

        const keywordUpdated = (keyword) => {
            console.log(`keyword updated: ${keyword}`)
            if (keyword.trim().length == 0) {
                setSearchResults([])
            } else {
                const list = mySearchInfo.searchIndex.search(keyword).map((entry) => {
                    // console.log(entry)
                    const obj = mySearchInfo.searchData.results.filter(d => entry.ref == d.href)[0]
                    return { 'href': obj.href, 'title': obj.title }
                })
                setSearchResults(list)
            }
        }

        const handleInput =  _.debounce((e) => {
            const val = e.target.value
            keywordUpdated(val)
        }, 500)

        const handleKeydown = (e) => {
            // console.log("keyCode:", e.keyCode)
            if (e.keyCode === 27) { // ESC
                close()
            }
        }

        useEffect(() => {
            axios
                .get('/portfolio/search/index.json')
                .then(res => {
                    const searchInfo = {
                        searchData: {},
                        searchIndex: {}
                    }
                    searchInfo.searchData = res.data
                    searchInfo.searchIndex = lunr(function() {
                        this.ref('href')
                        this.field('title')
                        this.use(lunr.ja)
                        searchInfo.searchData.results.forEach(e => {
                            this.add(e);
                        })
                    })
                    setMySearchInfo(searchInfo)
                })
        }, [])

        useEffect(() => {
            if (show) {
                if (inputRef.current) {
                    inputRef.current.focus()
                }
            }
        }, [show])

        if (show) {
            const list = searchResults.map((result, idx) => {
                return (
                    <div key={idx} className="pt-4 pb-2 px-6 border-b border-primary-dark w-full hover:bg-primary/60 hover:text-on-primary text-left">
                        <a className="block" href={result.href}>{result.title}</a>
                    </div>
                )
            })
            return (
                <div id="modal-overlay" onClick={close} className='fixed top-0 left-0 w-full h-full bg-black/70 flex flex-col justify-start items-center z-50'>
                    <div onClick={(e) => e.stopPropagation() } className='flex flex-col items-center border border-primary-dark mt-4 md:mt-12 md:w-[700px] w-80 md:w-[500px] rounded-lg bg-primary-light text-primary-dark mx-auto'>
                        <div className="flex items-center w-full border-b border-primary-dark">
                            <div className="flex-none"><i className="fa-solid fa-magnifying-glass text-3xl mx-2"></i></div>
                            <input type="text" ref={inputRef} onInput={handleInput} onKeyDown={handleKeydown} className="grow bg-primary-light text-on-primary-light
                            text-sm rounded-lg focus:outline-none block p-2.5 w-full" placeholder="Search this blog" required />
                        </div>
                        <div className="flex flex-col items-start mb-4 overflow-y-auto h-[580px] md:h-[800px] w-full">
                            {list}
                        </div>
                    </div>
                </div>
            );
        } else {
            return null;
        }
    }
    ~~~

5. モーダル画面を配置する(`assets/js/hello-react-search-modal.jsx`)

    ~~~jsx
    import React, { useState, useEffect, useRef} from 'react'
    import { createRoot } from 'react-dom/client'
    import SearchModal from 'js/search-modal'

    export default function MyApp() {
        const [show, setShow] = useState(false)
        const openModal = () => {
            setShow(true)
        }
        const closeModal = () => {
            setShow(false)
        }
        return (
            <div className="bg-stone-200 rounded-md m-4 p-2 text-center">
            <h1>Click Search icon!!</h1>
            <a className="block text-center no-underline text-on-primary py-2 px-2 font-normal cursor-pointer hover:font-bold"  onClick={openModal}>
                <i className="fa-solid fa-magnifying-glass"></i>
            </a>
            <SearchModal show={show} close={closeModal} >
            </SearchModal>
            </div>
        )
    }

    const container = document.getElementById('search_menu_wk')
    const root = createRoot(container)
    root.render(<MyApp />)
    ~~~

6. 以前作成したショートコード([include-with-jsbuild.html](/til/2023/05/54-introducing-react/))で`assets/js/hello-react-search-modal.jsx`を読み込む

    ~~~markdown
    {{</* include-with-jsbuild jsFile="js/hello-react-search-modal.jsx" */>}}
    ~~~

### 実際の例

~~~rawhtml
<div id="search_menu_wk"></div>
~~~

{{< include-with-jsbuild jsFile="js/hello-react-search-modal.jsx" >}}

### 参照

- [Lunr.js](https://lunrjs.com/docs/index.html)
- [axios](https://github.com/axios/axios)
- [Build Websites with Hugo](https://pragprog.com/titles/bhhugo/build-websites-with-hugo/)
