---
title: "Inkscapeを使ってカスタムフォントを作成したい"
date: 2023-06-23T11:56:09+09:00
draft: false
tags:
- fonts
---

ブログで使用するアイコンをWebフォントとして自作したい。

InkscapeとFontForgeを使ってできるようだ。調べたり、やってみた結果をメモ

<!--more-->

本ブログでは[Solid + Brands Styles Icons | Font Awesome](https://fontawesome.com/start)の無料版のアイコンフォントを使用している。
無料版だとアイコンの種類が少いのでイメージと合わないことがある。

現状、以下の17個のフォントを作成している。

1. fa-magnifying-glass: 検索用虫めがね
1. fa-file-lines: ブログ
1. fa-circle-info: TIL
1. fa-note-sticky: メモ
1. fa-comments: 問答
1. fa-square-pen: 最近の学習記録
1. fa-comment-dots: 最近の問答
1. fa-square-parking: 最近のプロジェクト
1. fa-arrow-rotate-right: 最近のIHC
1. fa-tags: タグ
1. fa-screwdriver-wrench: プロジェクト
1. fa-arrows-spin: IHC
1. fa-code-merge: 最近のイテレーション
1. fa-twitter-square: twitter
1. fa-youtube-square: youtube
1. fa-github-square: github
1. fa-square-arrow-up-right: web

最終的には全部のフォントを置き換えたいが、今回は以下の4つぐらいから作成したい。

1. fa-file-lines: ブログ
1. fa-circle-info: TIL
1. fa-note-sticky: メモ
1. fa-comments: 問答

### 検討: アイコン

#### コンセプト

- 目的・表現したいこと
  - ブログは長めの文章であること
  - メモは短い文章であること
  - TILは短い文章であること
  - 他の文章との対比してわかりやすいこと
    - 学習記録(ノートに複数行)
      - Blog(ノートに複数行)
      - TIL(メモ紙にTILのロゴ)
    - メモ(メモ紙に複数行)
    - 問答(QA吹き出し)
  - サイトには文章の一覧と、個別の文章があること
    - 最近の学習記録(複数のノート)
    - 最近のメモ(複数のメモ紙)
    - 最近の問答(QA吹き出し複数)
  - 技術メモ
    - アイコンなどの独自のグリフはUNICODEの私用領域(E00000–FFFFFF)を使うようだ
    - InkscapeのTypography Extensionを使えばInkscapeでFontForgeで読み込めるグリフを作成できるようだ
    - 通常アイコンフォントは1文字が1アイコンになるが、ligatureという仕組みで、`icon`のような単語を1つのアイコンに変換するようだ
    - FontForgeを使って手動でligature用のテーブルを設定すれば良さそう

### 実際にやってみた

- 問題発生
  - Inkscapeで作成したSVGをFontForgeで読み込みフォントを生成できた
  - ただし、Ligatureの設定が良くわからなかった
    - どうやら、`abc`という文字をアイコンに変換するためには、`a`,`b`,`c`のグリフが登録されている必要があるようだ
  - まずは、GoogleのMaterial SymbolのttfファイルをFontForgeで開き、その設定内容を参考にしたい

- 調査結果
  - GoogleのMaterial Symbolにならって、`0-9a-zA-Z._`のグリフを作る必要あり
    - Ligature用なので、簡易的な捨てグリフとして作成(1つのsvg)
  - アイコンのグリフをUNICODEの私用領域(E00000–FFFFFF)に作成する必要あり(icon毎に独立したsvg)
  - GoogleのMaterial Symbolにならって、Ligature用の変換テーブルを作成する必要あり
    - フォント情報の`Lookups`>`GSUB`の`Add Lookup`で `rlig | DFLT{dflt} latn{dflt}`を追加
      - 追加した`rligのLookup`に`Add Subtable`でサブテーブルを追加
        - 追加したサブテーブルを`Edit Data`でデータを追加
          - 項目の左側にアイコングリフ名(例: blog)
          - 項目の右側に変換したい単語の各文字を空白で分割したもの(例: b l o g)

- お試し版
  - ブログ用アイコンのみ作成したフォントを作成(`kantasicon_v00.woff2`)し、ブログに配置
  - この記事内に以下を記載し、実際に表示してみる(本来は`<head/>`や`cssファイル`に記載)

    ~~~html
    <link rel="preload" href="{{ .Site.BaseURL }}/fonts/kantasicon_v00.woff2" as="font" type="font/woff2" crossorigin="anonymous">
    <style>
    @font-face {
        font-display: swap;
        font-family: kantasicon;
        font-style: normal;
        src: url(../../../../fonts/kantasicon_v00.woff2) format("woff2")
    }

    .kantas-icons {
      font-family: 'kantasicon';
      font-weight: normal;
      font-style: normal;
      display: inline-block;
      line-height: 1;
      text-transform: none;
      letter-spacing: normal;
      word-wrap: normal;
      white-space: nowrap;
      direction: ltr;
    }
    </style>

    <div>
      <span class="kantas-icons text-2xl">blog</span>ブログ用アイコン
    </div>
    ~~~

  - 表示結果。アイコンの線が細いですね。もっと太くしないと。あともう少しアイコンの高さが欲しいかも。

    ~~~rawhtml
    <link rel="preload" href="../../../../fonts/kantasicon_v00.woff2" as="font" type="font/woff2" crossorigin="anonymous">
    <style>
    @font-face {
        font-display: swap;
        font-family: kantasicon;
        font-style: normal;
        src: url(../../../../fonts/kantasicon_v00.woff2) format("woff2")
    }

    .kantas-icons {
      font-family: 'kantasicon';
      font-weight: normal;
      font-style: normal;
      display: inline-block;
      line-height: 1;
      text-transform: none;
      letter-spacing: normal;
      word-wrap: normal;
      white-space: nowrap;
      direction: ltr;
    }
    </style>

    <div>
      <span class="kantas-icons text-2xl">blog</span>ブログ用アイコン
    </div>
    ~~~

### 参照

- [私用面 - Wikipedia](https://ja.wikipedia.org/wiki/%E7%A7%81%E7%94%A8%E9%9D%A2)
- [Creating Custom Fonts — Inkscape Beginners' Guide 1.0 documentation](https://inkscape-manuals.readthedocs.io/en/latest/creating-custom-fonts.html)
- [6. Accented glyphs, ligatures, lookups and features — FontForge 20230101 documentation](https://fontforge.org/docs/tutorial/editexample4.html)
- [マテリアル シンボル ガイド  |  Google Fonts  |  Google for Developers](https://developers.google.com/fonts/docs/material_symbols?hl=ja#use_in_web)
