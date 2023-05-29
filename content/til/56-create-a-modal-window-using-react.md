---
title: "Reactを使ってモーダルウィンドウを作成する"
date: 2023-05-30T05:53:08+09:00
draft: false
tags:
- react
---

Reactを使ってモーダルウィンドウを作成したい。

<!--more-->

### 解決策

[Reactの基礎を学ぶのにモーダルウィンドウはいい教材 | アールエフェクト](https://reffect.co.jp/react/react-modal)の記事を参考にモーダルウィンドウを作成する。

手順は以下となる。

1. モーダルウィンドウを表示するアプリの配置場所を定義する

    ~~~~html
    ~~~rawhtml
    <div id="modal-point"></div>
    ~~~
    ~~~~

2. モーダルウィンドウを表示するアプリ(`assets/js/hello-react-modal.jsx`)を作成する

    ~~~jsx
    import * as React from 'react'
    import { createRoot } from 'react-dom/client';

    export function MyModal({show, close, children}) {
        if (show) {
            return (
                <div id="modal-overlay" onClick={close} className='fixed top-0 left-0 w-full h-full bg-black/50 flex flex-col justify-center items-center z-10'>
                    <div onClick={(e) => e.stopPropagation() } className='bg-slate-100 w-2/6 h-4/6 shadow-lg rounded-md flex flex-col items-center content-center justify-center'>
                        {children}
                        <p><button onClick={close} className='hover:bg-blue-500 bg-blue-700 text-white font-bold py-2 px-4 rounded m-4 outline-none shadow-lg active:scale-95 transition-transform'>Close</button></p>
                    </div>

                </div>
            );
        } else {
            return null;
        }
    }

    export default function MyApp() {
        const [show, setShow] = React.useState(false)
        const openModal = () => {
            setShow(true)
        }
        const closeModal = () => {
            setShow(false)
        }
        return (
            <div className="bg-stone-200 rounded-md m-4 p-2 text-center">
            <h1>Welcom to my modal window!!!</h1>
            <button onClick={openModal} className="hover:bg-blue-500 bg-blue-700 text-white font-bold py-2 px-4 rounded m-4 outline-none shadow-lg active:scale-95 transition-transform">Open</button>
            <MyModal show={show} close={closeModal} >
                <h1 className='text-lg font-bold'>これがモーダルウィンドウです!!</h1>
                <p className=''>"Close"ボタンをクリックとモーダルウィンドウを閉じます。<br/>また、半透明の背景をクリックしてもモーダルウィンドウを閉じます。</p>
            </MyModal>
            </div>
        )
    }

    const container = document.getElementById('modal-point')
    const root = createRoot(container)
    root.render(<MyApp />)
    ~~~

3. 以前作成したショートコード([include-with-jsbuild.html](/til/2023/05/54-introducing-react/))で``assets/js/hello-react-modal.jsx``を読み込む

    ~~~markdown
    {{</* include-with-jsbuild jsFile="js/hello-react-modal.jsx" */>}}
    ~~~

#### 実際の例

~~~rawhtml
<div id="modal-point"></div>
~~~

{{< include-with-jsbuild jsFile="js/hello-react-modal.jsx" >}}

### 参照

- [Reactの基礎を学ぶのにモーダルウィンドウはいい教材 | アールエフェクト](https://reffect.co.jp/react/react-modal)