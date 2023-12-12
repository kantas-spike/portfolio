---
title: "GIMPをPythonで使う"
date: 2023-12-11T10:17:21+09:00
draft: false
tags:
  - python
  - GIMP
---

Pythonを使って、GIMPを操作したい。

<!--more-->

### 解決策

GIMPにはPythonが内蔵されており、組み込みのAPIを利用して、
アドオンを作成したり、コマンドラインからGIMPを操作したりできる。

```column{title="APIの調べ方"}
PythonでGIMPを利用する場合、**GIMP's Procedural Database (PDB)** が提供するAPIを利用します。
APIは、**Python Procedure Browser**で調べることができます。

**Python Procedure Browser**の使い方は以下になります。

1. GIMPのメニュー`Filters > Python-Fu > Console`から**Python Console**を開く
2. `Browse`ボタンをクリックで、**Python Procedure Browser**を開く
3. `Search:`欄にAPI名やキーワードを入力し、検索結果を確認する


また、**PDB**は、**libgimp**のAPIをPythonに提供しています。
**PDB**が提供する機能を知るには**libgimp**のリファレンスが参考になりそうです。

~~~column
[Part I. GIMP Library: GIMP Library Reference Manual](https://developer.gimp.org/api/2.0/libgimp/libgimp.html)
~~~
ただし、**libgimp**と**PDB**のAPIには差異(引数の数や順序など)があるため、Pythonで利用する場合は、必ず**Python Procedure Browser**で確認してから利用する必要があります。
```

#### バッチで呼びだす方法

例えば`xxx.py`というファイルにGimp操作用のコードを記載する場合、
以下のコマンドを実行することにより、GIMPに処理させることができる。

```shell
gimp --no-interface --console-messages --no-data --no-splash --batch-interpreter python-fu-eval --batch - < xxx.py
```

#### スクリプトの内容

`xxx.py`の実行結果は以下になる。

![](/til/96_label.png)

```column {title="GIMPのPythonのバージョンについて"}
GIMP2.10に組み込まれているPythonのバージョンは2.7系です。

そのため、スクリプトに日本語(UTF-8)を記載する場合は、先頭行に
`# -*- coding: utf-8 -*-` を記載する必要があります。

また、2023年現在のPythonの最新バージョンは3.12.xです。

PDBを利用するだけの簡単なスクリプトならあまりPythonのバージョンを意識することはありません。
しかし、複雑なスクリプトなど作成する場合は、Pythonの2系と3系の差異についても意識する必要があるかもしれません。
```

`xxx.py`の内容です。

```python
# -*- coding: utf-8 -*-
# plug-ins/pygimp/gimpfu.py · GIMP_2_10_34 · GNOME / GIMP · GitLab
#  - https://gitlab.gnome.org/GNOME/gimp/-/blob/GIMP_2_10_34/plug-ins/pygimp/gimpfu.py?ref_type=tags
from gimpfu import *  # gimp のAPIをインポート pdbオブジェクト経由で各種APIを利用可能
import os


def add_text(text, hexColor, font_name, font_size, label_layer):
    image = pdb.gimp_item_get_image(label_layer)
    text_layer = pdb.gimp_text_fontname(
        image,
        label_layer,
        0,
        0,
        text,
        0,
        TRUE,
        font_size,
        PIXELS,
        font_name,
    )
    # 文字色を設定
    pdb.gimp_text_layer_set_color(text_layer, hexColor)
    # テキストをセンタリング
    pdb.gimp_text_layer_set_justification(text_layer, TEXT_JUSTIFY_CENTER)
    # 行間を調整
    pdb.gimp_text_layer_set_line_spacing(text_layer, font_size * -0.25)
    layer_w = pdb.gimp_drawable_width(label_layer)
    layer_h = pdb.gimp_drawable_height(label_layer)
    text_w = pdb.gimp_drawable_width(text_layer)
    text_h = pdb.gimp_drawable_height(text_layer)
    offset_x = round((layer_w - text_w) / 2)
    offset_y = round((layer_h - text_h) / 2)
    # 中央に移動
    pdb.gimp_layer_set_offsets(text_layer, offset_x, offset_y)

    # テキストをレイヤーに貼り付け
    pdb.gimp_floating_sel_anchor(text_layer)


img_w = 400
img_h = 300
# 400x300のRGB画像を生成
image = pdb.gimp_image_new(img_w, img_h, RGB)

######
# 背景
######
# 背景用のレイヤーを追加
bg_layer = pdb.gimp_layer_new(
    image, img_w, img_h, RGBA_IMAGE, "背景", 100, LAYER_MODE_NORMAL_LEGACY
)

# レイヤーを背景色で塗る
pdb.gimp_context_set_background("#40516a")
pdb.gimp_drawable_fill(bg_layer, FILL_BACKGROUND)

# レイヤーを画像の先頭に追加
pdb.gimp_image_add_layer(image, bg_layer, 0)

################
# ラベルの作成
################
# テキスト用のレイヤーを追加
label_layer = pdb.gimp_layer_new(
    image, img_w, img_h, RGBA_IMAGE, "ラベル用", 100, LAYER_MODE_NORMAL_LEGACY
)
# レイヤーを透明に
pdb.gimp_drawable_fill(label_layer, TRANSPARENT_FILL)
# レイヤーを画像の先頭に追加
pdb.gimp_image_add_layer(image, label_layer, 0)

# テキストを作成
font_size = 48
add_text("はじめての\nGIMP", "#2877c0", "Noto Sans JP Bold", font_size, label_layer)

######################
# アウトラインの作成
######################
# ラベルレイヤーをコピーし、アウトライン用のレイヤーを作成
outline_layer = pdb.gimp_layer_copy(label_layer, True)
# ラベルレイヤーのレイヤー番号を取得
idx = pdb.gimp_image_get_item_position(image, label_layer)
# ラベルレイヤーの下にアウトラインレイヤーを配置
pdb.gimp_image_add_layer(image, outline_layer, idx + 1)

# レイヤー内の画像のアウトラインを選択
pdb.gimp_image_select_item(image, CHANNEL_OP_ADD, outline_layer)
# 選択範囲を拡大
pdb.gimp_selection_grow(image, font_size * 0.08)
# 選択範囲の境界をぼかす
pdb.gimp_selection_feather(image, font_size * 0.08)

# 背景色を白に
pdb.gimp_context_set_background((255, 255, 255))
pdb.gimp_drawable_edit_fill(outline_layer, FILL_BACKGROUND)

# 選択を解除
pdb.gimp_selection_none(image)

#############
# 画像の保存
#############
output_path = os.path.abspath("./label.png")
# 可視レイヤーを1つに統合
merged_layer = pdb.gimp_image_merge_visible_layers(image, CLIP_TO_IMAGE)
# 保存
pdb.gimp_file_save(image, merged_layer, output_path, output_path)

# 画像をGimpで表示
# pdb.gimp_display_new(image)

# 終了処理
pdb.gimp_image_delete(image)
pdb.gimp_quit(1)
```

### 参考

- [第186回　夏休み特別企画・GIMPでアスキーアートを3Dっぽくしよう！ | gihyo.jp](https://gihyo.jp/admin/serial/01/ubuntu-recipe/0186)
- [GIMP python-fu CLI実行 - やってみる](https://ytyaru.hatenablog.com/entry/2019/12/29/222222)
- [Gimp Python Documentation](https://www.gimp.org/docs/python/index.html#WHAT-IS-IT)
- [GIMP Library Reference Manual: GIMP Library Reference Manual](https://developer.gimp.org/api/2.0/libgimp/index.html)
