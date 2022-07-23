---
title: "Hugoでショートコードの記述をエスケープして表示したい"
date: 2022-07-23T12:34:13+09:00
draft: false
tags:
- hugo
- markdown
---

説明用に、ショートコードをエスケープして表記方法を記載したい。

<!--more-->

### 解決策

ショートコードの`<`と`>`の間を`/* 〜 */`で囲む。

~~~text
{{</*/* youtube xxxx */*/>}}
~~~

上記のように記載すると、以下の出力となる。

~~~text
{{</* youtube xxxx */>}}
~~~

### 参考

- [Escaping and commenting out Hugo shortcodes](https://www.ii.com/hugo-tips-fragments/#_11_escaping_hugo_shortcodes)
