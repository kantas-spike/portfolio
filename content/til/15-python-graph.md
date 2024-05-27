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

```python
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
```

- 実際のグラフ

![sin]({{<relurl "images/til/15-sin.png">}})

#### 3次元グラフ

```python
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
```

- 実際のグラフ
  ![atan2]({{<relurl "images/til/15-atan2.png">}})

### まとめ

登場したAPIは以下になる。

| モジュール/パッケージ | API            | 説明                                                                                                                |
| --------------------- | -------------- | ------------------------------------------------------------------------------------------------------------------- |
| matplotlib            | rc [^2]        | matplotlibの設定パラメータを更新する。第1引数に設定のグループ名を指定し、更新する設定値をキーワード引数で指定する。 |
| matplotlib.pyplot     | plot [^3]      | x,yの座標を線やマーカーとしてプロットする。                                                                         |
|                       | title [^4]     | グラフのタイトルを設定する。                                                                                        |
|                       | xlabel [^5]    | X軸のラベルを設定する。                                                                                             |
|                       | ylabel [^6]    | Y軸のラベルを設定する。                                                                                             |
|                       | show [^7]      | 用意したすべての図を表示する。                                                                                      |
|                       | axes [^8]      | 図のグラフを管理するオブジェクト。                                                                                  |
| numpy                 | arange [^9]    | 指定された間隔の数例を返す。                                                                                        |
|                       | sin [^10]      | 指定された `array_line`な引数の各要素のsinを求める。                                                                |
|                       | meshgrid [^11] | 座標ベクトルから座標行列のリストを返す。                                                                            |

登場した用語は以下になる。

| 分類       | 用語                        | 説明                                                                                     |
| ---------- | --------------------------- | ---------------------------------------------------------------------------------------- |
| Python文法 | 引数リストのアンパック [^1] | `**`オペレーターを使って、辞書をアンパックし、キーワード引数として利用することができる。 |

### 参考

- [Pythonの学術利用 | プログラミング演習 Python 2021](https://repository.kulib.kyoto-u.ac.jp/dspace/bitstream/2433/265459/1/Version2021_10_08_01.pdf#page=208)
- [3D surface (color map)](https://matplotlib.org/2.0.2/mpl_examples/mplot3d/surface3d_demo.py)
- [Choosing Colormaps in Matplotlib](https://matplotlib.org/stable/tutorials/colors/colormaps.html)

[^1]: [4.8.5. 引数リストのアンパック 引数... # 4. その他の制御フローツール — Python 3.12.3 ドキュメント](https://docs.python.org/ja/3/tutorial/controlflow.html#unpacking-argument-lists)
[^2]: [matplotlib.rc(group, ... # matplotlib — Matplotlib 3.9.0 documentation](https://matplotlib.org/stable/api/matplotlib_configuration_api.html#matplotlib.rc)
[^3]: [matplotlib.pyplot.plo... # matplotlib.pyplot.plot — Matplotlib 3.9.0 documentation](https://matplotlib.org/stable/api/_as_gen/matplotlib.pyplot.plot.html#matplotlib.pyplot.plot)
[^4]: [matplotlib.pyplot.title — Matplotlib 3.9.0 documentation](https://matplotlib.org/stable/api/_as_gen/matplotlib.pyplot.title.html)
[^5]: [matplotlib.pyplot.xlabel — Matplotlib 3.9.0 documentation](https://matplotlib.org/stable/api/_as_gen/matplotlib.pyplot.xlabel.html)
[^6]: [matplotlib.pyplot.ylabel — Matplotlib 3.9.0 documentation](https://matplotlib.org/stable/api/_as_gen/matplotlib.pyplot.ylabel.html)
[^7]: [matplotlib.pyplot.show — Matplotlib 3.9.0 documentation](https://matplotlib.org/stable/api/_as_gen/matplotlib.pyplot.show.html)
[^8]: [matplotlib.axes — Matplotlib 3.9.0 documentation](https://matplotlib.org/stable/api/axes_api.html)
[^9]: [numpy.arange — NumPy v1.26 Manual](https://numpy.org/doc/stable/reference/generated/numpy.arange.html)
[^10]: [numpy.sin(x, /, out=N... # numpy.sin — NumPy v1.26 Manual](https://numpy.org/doc/stable/reference/generated/numpy.sin.html#numpy.sin)
[^11]: [numpy.meshgrid numpy.... # numpy.meshgrid — NumPy v1.26 Manual](https://numpy.org/doc/stable/reference/generated/numpy.meshgrid.html#numpy-meshgrid)
