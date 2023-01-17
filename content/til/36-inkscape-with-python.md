---
title: "InkscapeでPythonを使う"
date: 2022-12-11T08:24:09+09:00
draft: false
tags:
- python
- Inkscape
- SimpInkScr
---

`Inkscape`でPythonを使い、縁取り文字の作成を自動化したい。
<!--more-->

### 解決策

Pythonスクリプトで`Inkscape`の機能を使いやすくする`Simple Inkscape Scripting`という拡張機能がある。

まず、この拡張機能をインストールする。

~~~shell
cd  ~/Library/Application Support/org.inkscape.Inkscape/config/inkscape/extensions
git clone https://github.com/spakin/SimpInkScr.git
~~~

`Inkscape`を再起動すると利用可能になる。

メニューの`エクステンション`->`レンダリング`->`Simple Inkscape Scripting...`を選択し、
表示されるダイアログで、Pythonスクリプトファイルを選択するか、直接Pythonコードを入力すれば、
Pythonを使ってInkscapeに描画できる。

また、Inkscapeで何かを手動で描いた後、
メニューの`ファイル`->`名前を付けて保存`を選択し、`ファイル保存先の選択`ダイアログで、
ファイルの種類を`Simple Inkscape Scripting script (*.py)`に設定し保存すれば、
描いたものがPythonスクリプトとして保存される。

#### 使い方

`Simple Inkscape Scripting`ダイアログに以下のコードを入力して実行すると、
`Inkscapeで文字を書きます`という文字が指定したスタイルで追加されます。

~~~python
text("Inkscapeで文字を書きます", (30, 30), font='Dela Gothic One', font_size=24*pt, font_weight='Bold', fill='#2937c2', stroke='#c2b329', stroke_width=1)
~~~

また、以下を入力して実行すると、`テストです!`という文字を30x4個追加します。

~~~python
OFFSET_X = 24*pt
OFFSET_Y = 24*pt * 1.5
MARGIN_X = 12*pt
MARGIN_Y = 6*pt
font_style = {"font": 'Dela Gothic One', "font_size": 24*pt, "font_weight": 'Bold', "fill": '#000000', "stroke": '#c31913', "stroke_width": 0.3}
txt = text("テストです!", (0, 0), **font_style)
box = txt.bounding_box()
txt.remove()
cursor = [OFFSET_X, OFFSET_Y]
for i in range(30):
    for j in range(4):
        text("テストです!", cursor, **font_style)
        cursor[0] += box.width + MARGIN_X
    cursor[1] += box.height + MARGIN_Y
    cursor[0] = OFFSET_X
~~~

### 参考

- [Simple Inkscape Scripting](https://github.com/spakin/SimpInkScr)