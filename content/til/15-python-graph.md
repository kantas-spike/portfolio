---
title: "Pythonでグラフを描きたい"
date: 2022-07-31T21:13:04+09:00
draft: false
tags:
- python
- matplotlib
- numpy
---
プログラムの処理中に出てくる数式の意味を理解するために、Pythonでグラフを描いて数式を確認したい。

<!--more-->

### 解決策

`numpy`、`matplotlib` を使ってグラフを表示する。

#### 折れ線グラフ

~~~python
import matplotlib
import matplotlib.pyplot as plt
import numpy as np

# BIZ UDGothic https://github.com/googlefonts/morisawa-biz-ud-gothic
matplotlib.rc('font', **{'family': 'BIZ UDGothic'})

x = np.arange(-1 * np.pi, np.pi, 0.1)

y = np.sin(x)

plt.plot(x, y)

plt.title("sin")
plt.xlabel('x')
plt.ylabel('sin(x)')

plt.show()
~~~

- 実際のグラフ

![sin](/images/til/15-sin.png)

#### 3次元グラフ

~~~python
import matplotlib
from matplotlib import cm
import matplotlib.pyplot as plt
import numpy as np

matplotlib.rc('font', **{'family': 'BIZ UDGothic'})

RADIUS = 365


def atan2(x, y):
    z = (np.arctan2(-1 * x,  y) + np.pi) / (np.pi * 2)

    for i in range(x.shape[0]):
        for j in range(y.shape[0]):
            if (x[i, i] ** 2 + y[j, j] ** 2) ** 0.5 > RADIUS:
                z[i][j] = np.nan
    return z


x = np.arange(-1 * RADIUS, RADIUS, 1)
y = np.arange(-1 * RADIUS, RADIUS, 1)


xx, yy = np.meshgrid(x, y)
z = atan2(xx, yy)

axes = plt.axes(projection='3d')
axes.plot_surface(xx, yy, z, cmap=cm.hsv)
axes.set_xlabel('x')
axes.set_ylabel('y')
axes.set_zlabel('atan2')
plt.show()
~~~

- 実際のグラフ

![atan2](/images/til/15-atan2.png)

### 参考

- [Pythonの学術利用 | プログラミング演習 Python 2021](https://repository.kulib.kyoto-u.ac.jp/dspace/bitstream/2433/265459/1/Version2021_10_08_01.pdf#page=208)
- [3D surface (color map)](https://matplotlib.org/2.0.2/mpl_examples/mplot3d/surface3d_demo.py)
- [Choosing Colormaps in Matplotlib](https://matplotlib.org/stable/tutorials/colors/colormaps.html)