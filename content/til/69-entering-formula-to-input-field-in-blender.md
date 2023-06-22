---
title: "Blenderの入力フィールドに数式を入力したい"
date: 2023-06-22T11:05:26+09:00
draft: false
useMathJax: true
tags:
- blender
- python
---

Blenderの入力フィールドに数式を入力したい。

<!--more-->

例えば、半径5mの円内の五角形の辺の長さと等しいメッシュを作成する場合、
メッシュ幅 [^4] の入力フィールドに以下のような数式を入力したい。 [^1]

$$ 2 \times 5 \times sin(36^\circ) $$

### 解決策

入力フィールドに、Pythonの演算式を直接入力する。

Blenderでは、数値の入力フィールドにPythonの算術演算式を入力できる。

~~~python
# Pythonの算術演算式の例
3 * 2
10 / 5 + 4
~~~

また、Blenderでは、Pythonの`math`モジュールの全ての名前がインポートされている。 [^2]
従って、上述の数式は以下のように入力できる。 [^3]

~~~python
2 * 5 * sin(radians(36))
~~~

### 参考

- [Fields — Blender Manual](https://docs.blender.org/manual/en/latest/interface/controls/buttons/fields.html#expressions)

[^1]: 半径5mの円内に、頂点の角度が72度で2辺が5mの二等辺三角形が5つあるので、その二等辺三角形の底辺を求めている。より良い求め方がありそう...
[^2]: `from math import *`のように全ての名前がインポートされているようだ。
[^3]: 入力項目には、計算結果の`5.877852522924732`が設定される。
[^4]: Dimensions X座標に入力
