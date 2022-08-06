---
title: "PDFの特定ページにリンクを貼りたい"
date: 2022-08-06T16:02:01+09:00
draft: false
tags:
- html
- PDF
---

PDFの特定ページにリンクを貼りたい。

<!--more-->

### 解決策

PDFファイルのURLの末尾に **#page=ページ番号** を追加すると指定ページ番号へのリンクになる。

#### リンク例

~~~markdown
[まえがき|プログラミング演習 Python 2021](https://repository.kulib.kyoto-u.ac.jp/dspace/bitstream/2433/265459/1/Version2021_10_08_01.pdf#page=18)
~~~

#### 実際のリンク

[まえがき|プログラミング演習 Python 2021](https://repository.kulib.kyoto-u.ac.jp/dspace/bitstream/2433/265459/1/Version2021_10_08_01.pdf#page=18)

### 参考

- [特定のページで PDF ファイルを開く URL を作成する](https://helpx.adobe.com/jp/acrobat/kb/link-html-pdf-page-acrobat.html)
