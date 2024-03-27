---
title: "Libre Officdeでドキュメントを指定したサイズの PNG画像でエクスポートしたい"
date: 2024-03-28T06:38:37+09:00
draft: false
tags:
  - libreOffice
---

```column{title="質問" icon="Q. "}
LibreOffice Drawで `1920 x 1080 px` のエクスポート画像(PNG)を作成するには、ドキュメントのサイズを 何cm × 何cm にすれば良いか?
```

<!--more-->

LibreOfficeのDrawでスライド原稿を作成したい。
作成したスライドは最終的に動画にするため、ドキュメントを以下のサイズのPNG画像にエクスポートしたい。

`1920 x 1080 px` or `1080 x 1920 px`

### 解決策

```column{title="答え" icon="A. "}
`1920 x 1080 px` のPNG画像を作成するには、`50.8 x 28.575 cm`のドキュメントが必要になる。
```

#### 確認方法

[libreOfficeの単位](https://help.libreoffice.org/latest/ja/text/shared/00/00000003.html) によると、1インチは以下となる。

```txt
1 インチ -> 2.54 cm
```

また、LibreOfficeがドキュメントをPNGへの変換する際は、`96dpi`で変換しているようだ。

上記の情報と推測から以下のスクリプトで必要なドキュメントのサイズ(単位:cm)を計算できる。

```python
dpi = 96 # 想像の値(≒ 単位: px/inch)

# 欲しい画像サイズ(単位:px)
w_px = 1920
h_px = 1080

# px->cm変換ルール
cm_per_in = 2.54

# ドキュメントのサイズ(単位: cm)
w_inch = w_px / dpi # pxをインチに変換
w_cm = w_inch * cm_per_in # インチをcmに変換

h_inch = h_px / dpi # pxをインチに変換
h_cm = h_inch * cm_per_in # インチをcmに変換

# 結果を出力
print(f"w x h (cm): {w_cm} x {h_cm}")
```

実行結果

```text
w x h (cm): 50.8 x 28.575
```

#### 確認

このサイズで、ドキュメントを作成し、PNG形式でエクスポートしたところ、
`1920 x 1080 px`のPNG画像が出力された。

### 参考

- [libreOfficeの単位](https://help.libreoffice.org/latest/ja/text/shared/00/00000003.html)
- [図のエクスポートオプション](https://help.libreoffice.org/latest/ja/text/shared/00/00000200.html?&DbPAR=SHARED&System=MAC)
