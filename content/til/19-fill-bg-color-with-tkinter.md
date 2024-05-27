---
title: "Tkinterで部品の背景色を変更したい"
date: 2022-08-06T15:59:38+09:00
draft: false
tags:
  - python
  - tkinter
---

Tkinterでウィンドウの背景色を変更した時に、部品の周りに異なる背景色が表示される。
ウィンドウの背景色に合せるために、Tkinterで部品の背景色を変更したい。

<!--more-->

#### コード例

```python
import tkinter as tk

root = tk.Tk()
root.title("部品の背景色")
root["bg"] = "#454199"
root.geometry("200x100")

lbl = tk.Label(root, text="ラベル")
lbl.pack(anchor=tk.NW)
btn = tk.Button(root, text="ボタン")
btn.pack(anchor=tk.CENTER)
root.mainloop()
```

#### 表示例

![スクリーンショット]({{<relurl "images/til/19-bg-color.png">}})

### 解決策

各ウィジェットの背景色(`bg`)にウィンドウの背景色を指定する。
ただし、MacOSの場合は、ボタンの背景色(`bg`)を指定しても色が変わらないため、代りに`highlightbackground`で背景色を変更する。

#### コード例

```python
import tkinter as tk

root = tk.Tk()
root.title("部品の背景色")
root["bg"] = "#454199"
root.geometry("250x100")

lbl = tk.Label(root, text="ラベルはbgで変更可")
lbl["bg"] = "#454199"
lbl.pack(anchor=tk.NW)
btn = tk.Button(root, text="ボタンはbgで変更不可")
btn["bg"] = "#454199"
btn.pack(anchor=tk.CENTER)

btn2 = tk.Button(root, text="highlightbackgroundで変更可")
btn2["highlightbackground"] = "#454199"
btn2.pack(anchor=tk.CENTER)
root.mainloop()
```

#### 表示例

![スクリーンショット]({{<relurl "images/til/19-bg-color2.png">}})

### 参考

- [ウィジェットの体裁の調整|プログラミング演習 Python 2021](https://repository.kulib.kyoto-u.ac.jp/dspace/bitstream/2433/265459/1/Version2021_10_08_01.pdf#page=145)
