---
title: "Hugoで四則演算や論理演算や比較演算を使いたい"
date: 2023-07-31T17:16:06+09:00
draft: false
tags:
- hugo
---

Hugoのテンプレート内で、四則演算や論理演算、比較演算を使いたい。

<!--more-->

### 解決策

以下を利用する。

~~~rawhtml
<table>
<thead>
<tr>
<th>分類
<th>名前
<th>Function
<th>利用例
<th>参考: Pythonの場合
</tr>
</thead>
<tbody>
<tr>
<td rowspan="5">四則演算
<td>加算
<td>add
<td><code>{{ add 12 3 2 }} //=> 17</code>
<td><code>12 + 3 + 2 #=> 17</code>
</tr>
<tr>
<td>減算
<td>sub
<td><code>{{ sub 12 3 2 }} //=> 7</code>
<td><code>12 - 3 - 2 #=> 7</code>
<tr>
<td>乗算
<td>mul
<td><code>{{ mul 12 3 2 }} //=> 72</code>
<td><code>12 * 3 * 2 #=> 72</code>
<tr>
<td>除算
<td>div
<td><code>{{ div 12 3 2 }} //=> 2</cod>
<td><code>12 / 3 / 2 #=> 2</code>
<tr>
<td>剰余
<td>mod
<td><code>{{ div 15 3 }} //=> 0</code>
<td><code>15 % 3 #=> 0</code>
<tr>
<td rowspan="2">論理演算
<td>論理積
<td>and
<td>
    <ul>
    <li><code>{{ and (true true)}} //=> true</code>
    <li><code>{{ and (true false)}} //=> false</code>
    <li><code>{{ and (false true)}} //=> false</code>
    <li><code>{{ and (false false)}} //=> false</code>
    </ul>
<td>
    <ul>
    <li><code>(True and True) #=> True</code>
    <li><code>(True and False) #=> False</code>
    <li><code>(False and True) #=> False</code>
    <li><code>(False and False) #=> False</code>
    </ul>
<tr>
<td>論理和
<td>or
<td>
    <ul>
        <li><code>{{ or (false true)}} //=> true</code>
        <li><code>{{ or (false false)}} //=> false</code>
    </ul>
<td>
    <ul>
        <li><code>(False or True) #=> True</code>
        <li><code>(False or False) #=> False</code>
    </ul>
<tr>
<tr>
<td rowspan="6">比較演算子
<td>等しい
<td>eq
<td>
    <ul>
        <li><code>{{ eq 1 1 }} //=> true</code>
        <li><code>{{ eq 1 2 }} //=> false</code>
    </ul>
<td>
    <ul>
        <li><code>1 == 1 #=> True</code>
        <li><code>1 == 2 #=> False</code>
    </ul>
<tr>
<td>等しくない
<td>ne
<td>
    <ul>
        <li><code>{{ ne 1 2 }} //=> true</code>
        <li><code>{{ ne 1 1 }} //=> false</code>
    </ul>
<td>
    <ul>
        <li><code>1 != 2 #=> True</code>
        <li><code>1 != 1 #=> False</code>
    </ul>
<tr>
<td>より小さい
<td>lt
<td>
    <ul>
        <li><code>{{ lt 2 1 }} //=> false</code>
        <li><code>{{ lt 1 1 }} //=> false</code>
        <li><code>{{ lt 1 2 }} //=> true</code>
    </ul>
<td>
    <ul>
        <li><code>2 < 1 #=> False</code>
        <li><code>1 < 1 #=> False</code>
        <li><code>1 < 2 #=> True</code>
    </ul>
<tr>
<td>以下
<td>le
<td>
    <ul>
        <li><code>{{ le 2 1 }} //=> false</code>
        <li><code>{{ le 1 1 }} //=> true</code>
        <li><code>{{ le 1 2 }} //=> true</code>
    </ul>
<td>
    <ul>
        <li><code>2 <= 1 #=> False</code>
        <li><code>1 <= 1 #=> True</code>
        <li><code>1 <= 2 #=> True</code>
    </ul>
<tr>
<td>より大きい
<td>gt
<td>
    <ul>
        <li><code>{{ gt 1 2 }} //=> false</code>
        <li><code>{{ gt 1 1 }} //=> false</code>
        <li><code>{{ gt 2 1 }} //=> true</code>
    </ul>
<td>
    <ul>
        <li><code>1 > 2 #=> False</code>
        <li><code>1 > 1 #=> False</code>
        <li><code>2 > 1 #=> True</code>
    </ul>
<tr>
<td>以上
<td>ge
<td>
    <ul>
        <li><code>{{ ge 1 2 }} //=> false</code>
        <li><code>{{ ge 1 1 }} //=> true</code>
        <li><code>{{ ge 2 1 }} //=> true</code>
    </ul>
<td>
    <ul>
        <li><code>1 >= 2 #=> False</code>
        <li><code>1 >= 1 #=> True</code>
        <li><code>2 >= 1 #=> True</code>
    </ul>
</tbody>
</table>
~~~


### 参考

- [Templating | Hugo](https://gohugo.io/templates/introduction/#conditionals)
  - [and & or | Hugo](https://gohugo.io/templates/introduction/#example-6-and--or)
- [Math | Hugo](https://gohugo.io/functions/math/)
- [eq | Hugo](https://gohugo.io/functions/eq/)
- [ne | Hugo](https://gohugo.io/functions/ne/)
- [ge | Hugo](https://gohugo.io/functions/ge/)
- [gt | Hugo](https://gohugo.io/functions/gt/)
- [le | Hugo](https://gohugo.io/functions/le/)
- [lt | Hugo](https://gohugo.io/functions/lt/)
