---
title: "Inkscapeを使ってコマンドラインからSVG画像をPNGに変換する"
date: 2023-02-07T00:04:37+09:00
draft: false
tags:
- inkscape
---

Inkscapeを使ってコマンドラインからSVG画像をPNGに変換したい。

<!--more-->

### 解決策

`-o`のあとに出力先のPNG画像のパスを指定すると変換できる。
出力形式は、パスの拡張子から自動的に判断される。

```shell
/Applications/Inkscape.app/Contents/MacOS/inkscape -o output.png input.svg
```

もし、画像サイズを変更する場合は、`-w`と`-h`で、それぞれ幅と高さをpx値で指定できる。

```shell
/Applications/Inkscape.app/Contents/MacOS/inkscape -o output.png -w 100 -h 100 input.svg
```

#### 例: icon.svgを各種サイズに一括して出力する場合

以下のシェルを実行する

```shell
% for size in 32 180 192 512
do
/Applications/Inkscape.app/Contents/MacOS/inkscape -w ${size} -h ${size} -o icon${size}.png icon.svg
done
```

### 参考

- [MAN PAGE | Inkscape](https://inkscape.org/doc/inkscape-man.html)
