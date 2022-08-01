---
title: "2色のコントラストの差を知りたい"
date: 2022-08-01T23:45:37+09:00
draft: false
tags:
- python
- html
- color
---

背景色にあったテキスト色を選べるようにしたい。
赤に白い字は読めるが、薄黄に白い字は読めない。

背景色とテキスト色の差から文字色を変更できるようにしたい。

<!--more-->

- 赤に白い字

~~~rawhtml
<div class="bg-[#e63110] w-1/3 h-24 flex justify-center items-center">
<div class="text-white text-3xl">赤に白</div>
</div>
~~~

- 薄黄に白い字(読めない)

~~~rawhtml
<div class="bg-yellow-50 w-1/3 h-24 flex justify-center items-center">
<div class="text-white text-3xl">薄黄に白</div>
</div>
~~~

### 解決策

2つの色の相対輝度を求めて、そのコントラスト比から判断する。

[Web Content Accessibility Guidelines](https://www.w3.org/TR/2008/REC-WCAG20-20081211/#relativeluminancedef)のサイトによると、
コントラスト比が最低でも4.5になるようにする必要がある。

背景色と文字色(白)のコントラスト比が4.5以上の場合は文字色を白のままに、それ以外は、文字色を黒に変える。


#### 相対輝度

相対輝度(**L**)の定義は以下になる。

~~~text
L = 0.2126 * R + 0.7152 * G + 0.0722 * B
~~~

そして、**R**、**G**、**B**の定義は以下になる。

~~~text
if RsRGB <= 0.03928 then R = RsRGB/12.92 else R = ((RsRGB+0.055)/1.055) ^ 2.4

if GsRGB <= 0.03928 then G = GsRGB/12.92 else G = ((GsRGB+0.055)/1.055) ^ 2.4

if BsRGB <= 0.03928 then B = BsRGB/12.92 else B = ((BsRGB+0.055)/1.055) ^ 2.4

ただし、
RsRGB = R8bit/255
GsRGB = G8bit/255
BsRGB = B8bit/255
~~~

#### コントラスト比

また、コントラスト比の定義は以下になる。

~~~text
(L1 + 0.05) / (L2 + 0.05)

※ L1は明るい色の相対輝度、L2は暗い色の相対輝度
~~~

### 参考

- [How to measure the contrast between any given color and white?](https://ux.stackexchange.com/questions/82056/how-to-measure-the-contrast-between-any-given-color-and-white/82068#82068)
- [contrast ratio](https://www.w3.org/TR/2008/REC-WCAG20-20081211/#contrast-ratiodef)
- [relative luminance](https://www.w3.org/TR/2008/REC-WCAG20-20081211/#relativeluminancedef)