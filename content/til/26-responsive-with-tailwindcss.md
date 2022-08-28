---
title: "tailwindcss で Responsive Design したい"
date: 2022-08-28T10:52:51+09:00
draft: false
tags:
- tailwindcss
- hugo
---

tailwindcss で Responsive なデザインをしたい。

<!--more-->

### 解決策

**tailwindcss**では、画面サイズに応じた Responsive 用のバリアントが用意されている。

これを使い、以下のように画面サイズ別にスタイルを定義する。

なお、Responsive 用のバリアントはモバイルファーストとなっており、バリアント未指定時(例: `w-12`)は、全画面サイズに適応され、
バリアント指定時は、指定バリアントのサイズ以上の全画面サイズに適用される。

~~~html
<div class="w-12 md:w-24 xl:w-36">
    <!-- 略 -->
</div>
~~~

##### Responsive 用のバリアント

| variant | Minimum width | 説明 |
|:--:|:--:|:---|
| sm | 640px | 640px以上の画面にスタイルを適用する |
| md | 768px | 768px以上の画面にスタイルを適用する |
| lg | 1024px | 1024px以上の画面にスタイルを適用する |
| xl | 1280px | 1280px以上の画面時にスタイルを適用する |
| 2sl | 1536px | 1536px以上の画面にスタイルを適用する |

### 参考

- [Responsive Design | Tailwindcss ](https://tailwindcss.com/docs/responsive-design)