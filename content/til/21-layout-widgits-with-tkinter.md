---
title: "Tkinterで部品を上手く配置したい"
date: 2022-08-07T02:18:55+09:00
draft: false
tags:
- python
- tkinter
---

Tkinterで画面に部品を上手く配置したいが、
**Geometry Manager** には幾つか種類があるが、どれを使って画面を作成するべきなのか。

<!--more-->

#### **Geometry Manager**の種類

- grid
- pack
- place

### 解決策

**grid** が最善策である。強力で柔軟性もあり使いやすい。

#### 各列にボタンを配置

~~~python
from tkinter import ttk
import tkinter as tk

# ウィンドウを作成
root = tk.Tk()
root.title("grid")

# 各列にボタンを配置
btn1 = ttk.Button(root, text="ボタン1").grid(column=0, row=0)
btn2 = ttk.Button(root, text="ボタン2").grid(column=1, row=0)

root.mainloop()
~~~

- 表示例

   0列目と1列目にボタンが表示される

  ![screenshot1](/images/til/21-buttons.png)

### 列を一つ飛してボタンを配置

~~~python
from tkinter import ttk
import tkinter as tk

# ウィンドウを作成
root = tk.Tk()
root.title("grid")

# あらかじめ列のミニマムサイズを指定
#   これを指定しないと飛した列の幅が詰められる
for cidx in range(3):
   root.columnconfigure(cidx, minsize=100)

# 各列にボタンを配置
btn1 = ttk.Button(root, text="ボタン1").grid(column=0, row=0)
btn2 = ttk.Button(root, text="ボタン2").grid(column=2, row=0)

root.mainloop()
~~~

- 表示例(列のミニマムサイズを指定時)

   0列目と2列目にボタンが表示される

  ![screenshot1](/images/til/21-buttons-with-colminsize.png)

- 表示例(列のミニマムサイズを未指定時)

   0列目と2列目にボタンが表示されるが、1列目に要素がないため幅が詰められる

  ![screenshot1](/images/til/21-buttons-without-colminsize.png)

### 参考

- [The Grid Geometry Manager](https://tkdocs.com/tutorial/grid.html)