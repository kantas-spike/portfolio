---
title: "ダウンロードしたPDFに目次を追加したい"
date: 2023-01-26T04:14:58+09:00
draft: false
tags:
- pdf
- python
---
プログラミングを学ぶために、数学を学びなおしたいと思っています。

米田優峻さんが公開されている[150 分で学ぶ高校数学の基礎 - Speaker Deck](https://speakerdeck.com/e869120/150-fen-dexue-bugao-xiao-shu-xue-noji-chu)という資料を知りました。[^1] [^2]

大変読み易く、わかりやすいです。PDFをダウンロードできるので、ダウンロードして勉強することにしました。
全10章、259ページあるのですが、このPDFには目次がついていません。少し不便ですね。

目次を追加する方法がないか調べてみました。

<!--more-->

### PDFに目次を追加する方法の調査

私はmacOSを使っています。Google先生に質問したところ、macOSの標準機能ではPDFに目次を追加できないようでした。

Pythonを勉強中の私は、GitHubに目次を追加できるPythonツールがないか探すことにしました。
そこで、見つけたのがこのリポジトリです。

- [yutayamamoto/pdfoutline: A command line tool for adding an outline to pdf files](https://github.com/yutayamamoto/pdfoutline)

これを使って、目次を作成したいと思います。

### `pdfoutline`

`pdfoutline`は、[Ghostscript](https://www.ghostscript.com/)というPDFのインタプリタにもなるソフトウェアのラッパーツールのようです。[^3]

利用しやすい独自の形式の目次ファイルを、PDFの形式に変換してから、`Gohstscript`に引き渡し、対象のPDFファイルと結合させるツールのようです。

#### 事前準備

macOS環境の場合、事前に`Gohstscript`をインストールする必要があります。

```shell
brew install ghostscript
```

#### インストール

適当な作業ディレクトリに、`pdfoutline`をクローンします。

```shell
cd work
git clone https://github.com/yutayamamoto/pdfoutline.git
```

あとは、クローンしたディレクトリに移動し、`-h`オプションを付けて`pdfoutline.py`を実行しましょう。
使い方が表示されます。

```shell
% cd pdfoutline
% python3 ./pdfoutline.py -h
usage: pdfoutline.py [-h] [-g GS_PATH] in.pdf in.toc out.pdf

add table of contents to a pdf

positional arguments:
  in.pdf                the input pdf file
  in.toc                a table of contents file in the specified format
  out.pdf               the output pdf file

options:
  -h, --help            show this help message and exit
  -g GS_PATH, --gs_path GS_PATH
                        Path to the ghostscript executable
```

### PDFに目次を追加する

#### PDFファイルの準備

[150 分で学ぶ高校数学の基礎 - Speaker Deck](https://speakerdeck.com/e869120/150-fen-dexue-bugao-xiao-shu-xue-noji-chu)のスライドの右下にある"ダウンロード"ボタンからPDFをダウンロードしてください。

今回は`kiso.pdf`という名前でダウンロードしたファイルを保存しました。

#### 目次の準備

目次ファイルは、基本的に、
見出しとページを記載した行を、タブや空白でレベル指定するようです。

```txt
# this is a comment
First Chapter 1
    first section 1
        first subsection 1
    second section 4
    third section 5
```

[150 分で学ぶ高校数学の基礎 - Speaker Deck](https://speakerdeck.com/e869120/150-fen-dexue-bugao-xiao-shu-xue-noji-chu)の目次ファイルを作成してみます。

`toc.txt`という名前で作成しました。

```txt
# 150分で学ぶ高校数学 米田優峻
序:自己紹介 2
序:スライドの概要/諸注意 3
序:目次 4
CHAPTER 1 数学の基礎知識 5
    A 基本的な数と計算 7
    B 文字式とは 12
    C 方程式とは 21
    "本章のゴール"を解こう 27
CHAPTER 2 場合の数 31
    公式1: 積の法則 33
    公式2: 並べ変え 38
    公式3: nPr (選択+並べ替え) 44
    公式4: nCr (選択) 49
    "本章のゴール"を解こう 53
CHAPTER 3 確率と期待値 56
    確率とは 57
    期待値とは 65
CHAPTER 4 統計的な解析 69
    統計の目的 70
    統計で使うツール1: ヒストグラム 72
    統計で使うツール2: 平均 76
    統計で使うツール3: 標準偏差 79
    統計で使うツール4: 相関係数 85
    "本章のゴール"を解こう 97
    統計のさらなる活用 102
CHAPTER 5 いろいろな関数 103
    関数とは 104
    関数の書き方 108
    いろいろな関数1: 一次関数 113
    いろいろな関数2: 二次関数 116
    いろいろな関数3: 指数関数 119
    いろいろな関数4: 対数関数 126
    補足: 指数関数の公式 131
    補足: 対数関数の公式 134
    "本章のゴール"を解こう 137
CHAPTER 6 三角比と三角関数 141
    三角比とは 142
    三角比の具体例 146
    三角比の拡張 150
    三角関数とは 153
    補足: ラジアンについて 155
    発展: 加法定理 156
    "本章のゴール"を解こう 157
CHAPTER 7 証明のやり方 160
    証明とは 161
    証明の例 163
    代表的な証明方法1: 背理法 168
    代表的な証明方法2: 数学的帰納法 174
    "本章のゴール"を解こう 182
CHAPTER 8 ベクトル 187
    ベクトルとは 188
    身近なベクトルの例 190
    ベクトルに関する注意点 195
    補足: ベクトルの大きさ 197
    ベクトルの演算 198
    ベクトルの応用 203
CHAPTER 9 微分法と積分法 205
    微分とは 206
    微分の例 209
    微分に関する記号・用語 212
    微分の方法 213
    積分とは 222
    積分に関する記号・用語 225
    積分の例 226
    積分計算の方法 230
    微分と積分の関係 235
    "本章のゴール"を解こう 237
CHAPTER 10 その他のトピックス 240
    トピックA: 数列 241
    トピックB: 集合 245
    トピックC: 整数の性質 249
CHAPTER FINAL スライドのまとめ 254
    終: スライドのまとめ 255
    終: さらなる学びへ 257
    終: 参考文献: 258
```

#### 目次をつける

準備ができました。以下のコマンドを実行して目次を追加しましょう。

```shell
python3 ./pdfoutline.py kiso.pdf toc.txt kiso_with_toc.pdf
```

`kiso_with_toc.pdf`が生成されました。

### まとめ

[yutayamamoto/pdfoutline](https://github.com/yutayamamoto/pdfoutline)で簡単にPDFに目次を追加できました。

[Ghostscript](https://www.ghostscript.com/)を使っても目次を作成できるようですが、PDFの言語で目次を記載する必要があるためハードルが高いです。
[yutayamamoto/pdfoutline](https://github.com/yutayamamoto/pdfoutline)は独自の目次形式導入することで、そのハードルを下げてくれています。ありがたいですね。

また、今回の高校数学の資料の著者である、米田優峻さんは[問題解決のための「アルゴリズム×数学」が基礎からしっかり身につく本 | Gihyo Digital Publishing](https://gihyo.jp/dp/ebook/2021/978-4-297-12522-6)という本も書かれています。アルゴリズムも勉強したいので読んでみようと思います。


[^1]: このTweetで知りました。 [じゅじゅさんはTwitterを使っています: 「年末年始の時間あるタイミングでちょっとした勉強(学び直し)にお勧めなのが、無料で読める「150 分で学ぶ高校数学の基礎」。 わかりやすい説明＆デザインで非常に質が高く広めたかったのでシェア(作者は現役東大2年生とのこと)。 数学嫌いの方、改めて学ぶのに本当お勧めです https://t.co/uBAinuaPq2 https://t.co/I9LbbuAJbZ」 / Twitter](https://twitter.com/jujulife7/status/1609803658392408067)

[^2]: 米田優峻さんは、アルゴリズムの基本についても資料を公開されています。 [E869120 (@e869120) on Speaker Deck](https://speakerdeck.com/e869120)
[^3]: [Ghostscript - Wikipedia](https://ja.wikipedia.org/wiki/Ghostscript)