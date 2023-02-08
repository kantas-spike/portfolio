---
title: "複数のPDFファイルをマージしたい"
date: 2023-02-08T19:54:23+09:00
draft: false
tags:
- pdf
- ghostscript
---

複数あるPDFファイルをマージして1つのファイルにまとめたい。

<!--more-->

### 解決方法

[Ghostscript](https://www.ghostscript.com/)の`gs`コマンドでマージする。

```shell
gs -dNOPAUSE -sDEVICE=pdfwrite -sOUTPUTFILE=combine.pdf -dBATCH 1.pdf 2.pdf
```

### 参考

- [Merge multiple PDFs using Ghostscript](https://gist.github.com/brenopolanski/2ae13095ed7e865b60f5)
- [Ghostscript](https://www.ghostscript.com/)
