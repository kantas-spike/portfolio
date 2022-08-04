---
title: "Pythonで図形を回転させたい"
date: 2022-08-03T23:01:11+09:00
draft: false
tags:
- python
- tkinter
---
`tkinter`のCanvas内にある図形の位置を原点を中心に回転させたい。

<!--more-->

### 解決策

三角関数を使う。

~~~mathjax
<div class="w-3/4 m-auto p-4 border border-gray-500 rounded">
<ul>
<li>回転の中心となる原点: \((0,0)\)
<li>回転角: \(\theta\)
<li>回転前の点: \((a, b)\)
<li>回転後の点: \((a', b')\)
</ul>

この時、回転後の点は以下になる。
<p class="m-4">
\(
(a', b') = (a \cos\theta - b \sin\theta,  a \sin\theta + b \cos\theta)
\)
</p>
</div>
~~~

#### 画像を原点を中心に回転させて配置する例

~~~python
import tkinter as tk
import math


def rotate(x, y, rad, cx, cy):
    rx, ry = (x - cx), (y - cy)
    nx = rx * math.cos(rad) - ry * math.sin(rad) + cx
    ny = rx * math.sin(rad) + ry * math.cos(rad) + cy
    return nx, ny


root = tk.Tk()
root.title("図形の回転")
canvas = tk.Canvas(root, width=400, height=400, bg="white")
target = tk.PhotoImage(file="target.png")
canvas.pack(anchor=tk.CENTER)
canvas.update()
cx, cy = canvas.winfo_width() / 2, canvas.winfo_height() / 2
print(cx, cy)

x, y = (70, 100)

canvas.create_image(x, y, image=target)
canvas.create_text(x, y + 15, anchor=tk.N, text="元画像", fill="red")

for d in range(30, 360, 30):
    nx, ny = rotate(x, y, math.radians(d), cx, cy)
    canvas.create_image(nx, ny, image=target)
    canvas.create_text(nx, ny + 15, anchor=tk.N, text=f"{d}度回転", fill="gray")

root.mainloop()
~~~

- 画面イメージ

  ![](/images/til/18-rotate.png)