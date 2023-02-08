---
title: "PDFで公開されているMake本をマージする"
date: 2023-02-08T16:02:46+09:00
draft: false
tags:
- python
- make
- pdf
---

[GNU Make 第3版](https://www.oreilly.co.jp/library/4873112699/)がPDFで公開されていることを知りました。 [^1]

ありがたいですね。でも、章ごとにPDFファイルが分割されているので少し読みにくいですね。
章ごとに分割されたPDFを1つにまとめて、さらに目次情報を追加したいですね。

<!--more-->

そもそも、なぜ本書が無料で公開されているかというと、本書が[GNU Free Documentation License](https://www.gnu.org/licenses/fdl-1.2.html)で作成されているため、
著作権者以外の者に対して改変、複製、頒布することを一定の制約条件の下に許諾するものだからだと思います。

[GNU Free Documentation License - Wikipedia](https://ja.wikipedia.org/wiki/GNU_Free_Documentation_License)によると、その制約とは以下です。

- この文書を無断で複製してよい。
- この文書を無断で改変してよい。
- この文書を無断で頒布・販売してよい。ただし、頒布を受けた者や購入した者に対して、上記の許可を与えなければならない。

また、[コピーレフト/Webで著作権法講義](http://copyright.watson.jp/cl.shtml)によると、改変・再配布するものが守るべきこととして、具体的に以下が記載されています。

- GFDL下でライセンスすること
- 改訂履歴をコピーしたうえで、自身の改訂情報を追加した改訂履歴を作成すること
- GFDLの文書をコピーして、これを当該著作物に含めること

以上を踏まえると、公開されているPDFをマージして、目次情報を追加して再配布するには、改訂履歴とGFDLに従うことを記載したページを追加すれば良さそうです。 [^2]

### 方針

1. 改訂履歴とGFDLに従うことを記載したページを作成する(LibreOfficeで作成しPDF化)
2. 公開されているPDFをダウンロード(手動で作成したurlの一覧から、シェルスクリプトでcurl等でダウンロード)
3. 追加したページとダウンロードしたPDFをマージ(GhostScriptでマージ)
4. マージしたPDFのページ番号に応じた目次情報をPDFに付与(pdfoutlineで目次を追加)

### プロジェクト

[kantas-spike/make_book_pdf: 『GNU Make 第3版』 各章マージ版PDF](https://github.com/kantas-spike/make_book_pdf)を作成し、以下にマージ版のPDFを作成しました。

[make_book_pdf/make_merged.pdf at main · kantas-spike/make_book_pdf](https://github.com/kantas-spike/make_book_pdf/blob/main/make_merged.pdf)

今後は、このPDFを読んで、マージに使用したシェルスクリプトをMakefileを置き換えれるようにしたいです。

### 参考

- [QDくん⚡️Python x 機械学習 x 金融工学さんはTwitterを使っています: 「GNU Make第3版(和訳)はオライリー公式が無料公開している https://t.co/oLYFZvk7ha 1 簡単なメイクファイルを書いてみよう 2 ルール 3 変数とマクロ 4 関数 5 コマンド 6 大きなプロジェクトの管理 7 ポータブルなmakefile 8 CとC++ 9 Java 10 makeの性能改善 11 makefileの実例 12 makefileのデバッグ https://t.co/OBd63Aoe2w」 / Twitter](https://twitter.com/developer_quant/status/1622582377209008128)

- [O'Reilly Japan - GNU Make 第3版](https://www.oreilly.co.jp/library/4873112699/)
- [Managing Projects with GNU Make, 3rd Edition [Book]](https://www.oreilly.com/library/view/managing-projects-with/0596006101/)
- [GNU自由文書ライセンス v1.3 - GNUプロジェクト - フリーソフトウェアファウンデーション](https://www.gnu.org/licenses/fdl-1.2.html)
- [GNU Free Documentation License - Wikipedia](https://ja.wikipedia.org/wiki/GNU_Free_Documentation_License)
- [メタプログラミング · the missing semester of your cs education](https://missing-semester-jp.github.io/2020/metaprogramming/)
- [コピーレフト/Webで著作権法講義](http://copyright.watson.jp/cl.shtml)

[^1]: [原著](https://www.oreilly.com/library/view/managing-projects-with/0596006101/) も公開されています。
[^2]: GFDLの文書は元々PDFに含まれているので不要でしょう。