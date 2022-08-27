---
title: "Vueでモーダル画面を作成したい"
date: 2022-08-24T15:43:23+09:00
draft: false
tags:
- vue
- hugo
---

Vueを使ってモーダル画面を作成したい。

<!--more-->

### 解決策

`teleport`を使って、**body** の子供としてダイアログを表示させる。

~~~rawhtml
<script src="https://unpkg.com/vue@next"></script>

<div id="modal" class="relative bg-gray-100 border-secondary-dark border-2 rounded-md p-4">
    <p>モーダルの実験</p>
    <div class="flex justify-center">
    <modal-frame title="モーダル画面"></modal-frame>
    </div>
</div>

<script type="text/x-template" id="my-modalFrame">
    <button class="button-secondary" @click="modalOpen = true">Open full screen modal!!</button>
    <teleport to="body">
        <div v-if="modalOpen" class="fixed top-0 left-0 right-0 bottom-0 bg-black/70 flex items-center flex-col content-center" @click.self="modalOpen = false">
            <div class="relative flex flex-col items-center content-center rounded-md bg-surface border-secondary-dark border-2 m-auto p-2 w-5/12 h-5/6">
            <div class="flex content-center items-center">
                [[title]]
            </div>
            <button class="absolute top-0 right-0 py-3 px-4 text-xl" @click="modalOpen = false"><i class="fa-solid fa-x font-xl"></i></button>
            <div id="search_result">
            </div>
            </div>
        </div>
    </teleport>
</script>

<script>
(()=>{
    const modalFrame = {
        template: '#my-modalFrame',
        props: ['title'],
        data() {
            return {
                modalOpen: false
            }
        }
    }

    const app = Vue.createApp()
    app.config.compilerOptions.delimiters = ["[[", "]]"]

    app.component('modal-frame', modalFrame)

    app.mount('#modal')
})()
</script>
~~~

#### ソース

~~~html
<script src="https://unpkg.com/vue@next"></script>

<div id="modal" class="relative bg-gray-100 border-secondary-dark border-2 rounded-md p-4">
    <p>モーダルの実験</p>
    <div class="flex justify-center">
    <modal-frame title="モーダル画面"></modal-frame>
    </div>
</div>

<script type="text/x-template" id="my-modalFrame">
    <button class="button-secondary" @click="modalOpen = true">Open full screen modal!!</button>
    <teleport to="body">
        <div v-if="modalOpen" class="fixed top-0 left-0 right-0 bottom-0 bg-black/70 flex items-center flex-col content-center" @click.self="modalOpen = false">
            <div class="relative flex flex-col items-center content-center rounded-md bg-surface border-secondary-dark border-2 m-auto p-2 w-5/12 h-5/6">
            <div class="flex content-center items-center">
                [[title]]
            </div>
            <button class="absolute top-0 right-0 py-3 px-4 text-xl" @click="modalOpen = false"><i class="fa-solid fa-x font-xl"></i></button>
            <div id="search_result">
            </div>
            </div>
        </div>
    </teleport>
</script>

<script>
(()=>{
    const modalFrame = {
        template: '#my-modalFrame',
        props: ['title'],
        data() {
            return {
                modalOpen: false
            }
        }
    }

    const app = Vue.createApp()
    app.config.compilerOptions.delimiters = ["[[", "]]"]

    app.component('modal-frame', modalFrame)

    app.mount('#modal')
})()
</script>
~~~

### 参考

- [Teleport | Vue.js](https://v3.ja.vuejs.org/guide/teleport.html#vue-%E3%82%B3%E3%83%B3%E3%83%9B%E3%82%9A%E3%83%BC%E3%83%8D%E3%83%B3%E3%83%88%E3%81%A8%E4%BD%BF%E3%81%86)