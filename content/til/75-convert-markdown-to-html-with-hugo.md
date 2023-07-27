---
title: "Hugoでショートコードやコードブロックの子要素にMarkdownを渡したい"
date: 2023-07-27T23:27:25+09:00
draft: false
tags:
- hugo
- shortcodes
- render_hooks
---

ショートコードやレンダーブロックの子要素にMarkdownコンテンツを渡したい。

<!--more-->

- ショートコードの場合

    ~~~markdown
    {{</* qcontent */>}}
    ![](http://xxxxxx)
    {{</* /qcontent */>}}
    ~~~

- コードブロックの場合

    ~~~~markdown
    ~~~quote
    [テスト](xxxx)
    ~~~
    ~~~~

### 解決策

MarkdownをHTMLに変換する関数である[markdownify](https://gohugo.io/functions/markdownify/)を使う。

使い方は以下となる。

~~~markdown
{{ .Inner | markdownify }}
~~~

ショートコードやレンダーブロック内で`.Inner`を処理する箇所を`markdownify`で変換すれば良い。

### 参考

- [markdownify | Hugo](https://gohugo.io/functions/markdownify/)