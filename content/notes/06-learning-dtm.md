---
title: "DTMを学びたい(DTM用語の学習)"
date: 2023-07-05T21:23:11+09:00
draft: false
tags:
- music
---

動画のジングルやBGMなど簡単な音楽を作成したいです。

そこで、[Mac Fan Special Mac Fan DTM[DeskTop Music] | - |本 | 通販 | Amazon](https://www.amazon.co.jp/Mac-Fan-Special-DeskTop-Music/dp/4839976333/ref=sr_1_2?__mk_ja_JP=%E3%82%AB%E3%82%BF%E3%82%AB%E3%83%8A&crid=1D22URHNDMG42&keywords=mac+fan+dtm&qid=1688129653&s=books&sprefix=mac+fan+dtm+%2Cstripbooks%2C182&sr=1-2)を読んで、GarageBandを使った曲の作成方法を学びたいと思います。

<!--more-->

基本的な用語もわかっていないので、まずは本書をざっと読んで気になるところをメモしていきます。

### DTMの用語と意味

- DTM

  [デスクトップミュージック(Desktop Music)](https://ja.wikipedia.org/wiki/%E3%83%87%E3%82%B9%E3%82%AF%E3%83%88%E3%83%83%E3%83%97%E3%83%9F%E3%83%A5%E3%83%BC%E3%82%B8%E3%83%83%E3%82%AF)のこと。パソコンを使って楽曲制作を行うこと。ただし、これは和製英語らしい。

- DAW

  [デジタル・オーディオ・ワークステーション(Digital Audio Workstation)](https://ja.wikipedia.org/wiki/%E3%83%87%E3%82%B8%E3%82%BF%E3%83%AB%E3%83%BB%E3%82%AA%E3%83%BC%E3%83%87%E3%82%A3%E3%82%AA%E3%83%BB%E3%83%AF%E3%83%BC%E3%82%AF%E3%82%B9%E3%83%86%E3%83%BC%E3%82%B7%E3%83%A7%E3%83%B3)のこと。デジタルでの音声の録音、編集、ミキシング、編曲などの一連の作業が出来るように構成された一体型のシステムのこと。

- GarageBand

  [GarageBand](https://ja.wikipedia.org/wiki/GarageBand)は、Appleが開発したmacOS/iOS向けの初心者向けのDAWです。
  MacbookやiPhone、iPadなどApple製品に同梱されている。

  iOS版とmacOS版で機能が違う。iOS版にはビートシーケンサーやLiveLoopなどの演奏しやすい便利な機能がある。

- Logic Pro

  [Logic Pro](https://ja.wikipedia.org/wiki/Logic_Pro)は、Appleが開発した上級者向けのDAWです。有料。GarageBandの上位版。

  - 価格: 30000円

- Logic Remote

  [Logic Remote](https://apps.apple.com/jp/app/logic-remote/id638394624?platform=ipad)は、iPadやiPhoneからmacOSのLogic ProやGarageBandの操作するためのソフトウェアです。
  iPadやiPhoneはマルチタッチデバイスなので疑似楽器(or 入力装置)として操作することができます。そのためmacOS版より演奏しやすくなります。

  無料です。

- MainSage

  [MainStage](https://en.wikipedia.org/wiki/MainStage_(software))は、演奏専用のソフトウェアです。録音や編集はできません。しかし、Logic Proに付属する膨大なプラグインとサウンドコレクションを利用できます。

  GrageBandの貧弱なプラグインとサウンドコレクションを改善するために利用すこともできます。

  - 価格: 4500円

- シンセサイザー

   [シンセサイザー](https://ja.wikipedia.org/wiki/%E3%82%B7%E3%83%B3%E3%82%BB%E3%82%B5%E3%82%A4%E3%82%B6%E3%83%BC)は、電子工学的手法により音を合成する楽器の総称です。電子楽器、音源とも呼ばれます。

- ループ

    いくつかの小節などを単位にリズムやフレーズ、リフなどを切り出して、繰り返し再生できるようにしたオーディオやMIDIトラックのことです。
    GarageBandでは、`Apple Loops`という名前で、あらかじめ用意されたループが用意されています。自作のループを登録することもできます。

- MIDI

  [MIDI](https://ja.wikipedia.org/wiki/MIDI)は、電子楽器や音声データを機器間で転送・共有するための共通規格です。
  MIDI規格に則って作成されたデータはDAWで再生・編集できます。

### macOS版 GarageBandの特徴

- 良い点
  - 最大255トラックを使った多重録音編集などのDAWの編集基本機能
  - ピアノロールによるMIDIシーケンスの打ち込み
  - ループのテンポを合せる
  - プラグインのAU音源とエフェクターを追加
  - リモート操作用の **Logic Remote** の活用

- 悪い点
  - 標準の音源とエフェクター、ループの数が少ない
  - シンセサイザーの音色編集に制限がある。すべてのパラメータを操作できない
  - サンプラーでの音色制作が不便
  - ミックス用のミキサー画面がない
  - **macOS版** ではリズム用のビートシーケンサーがない [^2]
  - **macOS版** ではLive Loopsがない [^3]

### iOS版 GarageBandの特徴

- 良い点
  - タッチ操作を活かした演奏しやすい機能がある
    - 楽器操作
    - ビートシーケンサ
    - Live loops

- 悪い点
  - 曲を全体的に構成していく編集作業は **macOS版** が圧倒的にやりやすい

### macOS版、iOS版 GarageBandと Logic Remoteの使い分け

使い方としては、日常のインスピレーションをiPadやiPhoneを使って打ち込み、
それを**macOS版**に転送して曲を仕上げるというふうになります。

転送して、**macOS版**でデータを読み直す必要がありので手間がかかりますね。

**macOS版**に転送する場合は、iCloudのフォルダにプロジェクトを保存します。[^4]

また、**Logic Remote** を使えば、**macOS版**の入力楽器としてiPhoneやiOSを利用できます。[^5]

### まとめ

私はiPadとmacbookをもっているので、macbookに**macOS版 GarageBand**を、iPadに**iOS版 GarageBand**と**Logic Remote**をインストールし、
以下の方法で曲を作っていきたいです。

- 曲作りのメインは**macOS版 GarageBand**で行う
  - ピアノロールでの打ち込みはミュージックタイピング [^1]ではなく、**Logic Remote**経由でiPadで鍵盤を叩いて打ち込む
- **iOS版 GarageBand**で素材を作る
  - **macOS版 GarageBand**では演奏しにくい曲は **iOS版 GarageBand**で演奏し録音する
    - **iOS版 GarageBand** にはビートシーケンサーやLiveLoopなど演奏しやすい方法がある
  - **iOS版 GarageBand**で録音したデータはmacbookに転送する
  - 転送したデータは**macOS版 GarageBand**で扱いやすい単位でループに登録する

もし、曲作りが気に入ったら、**macOS版 Logic Pro**を買うと以下の機能を利用できます。

- ステップシーケンサー(ビートシーケンサーと同じ機能)
- LiveLoop

そのため、**Logic Remote**経由で利用時も上記の機能を利用できます。
これにより、操作用の入力装置としてiPadを利用し、録音、編集、ループの管理はmacbookで完結できるようになります。

少し魅力的ですね。でも3万円...

### 今後の方針

実際に**Chapter03 まずは"GarageBand"で1曲作ってみよう**に従って曲を作りたいと思います。

しかし、以下のような音楽の基本用語がわかっていないので、次は音楽の基本用語について学びたいと思います。

- リズム
- コード
- 小節
- テンポ
- キー
- 拍子

音楽の基本用語については、以下を参考にして学んでいきたいと思います。

- [Pythonではじめる音のプログラミング －コンピュータミュージックの信号処理－ eBook : 青木直史: Kindle Store](https://www.amazon.co.jp/Python%E3%81%A7%E3%81%AF%E3%81%98%E3%82%81%E3%82%8B%E9%9F%B3%E3%81%AE%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%9F%E3%83%B3%E3%82%B0-%EF%BC%8D%E3%82%B3%E3%83%B3%E3%83%94%E3%83%A5%E3%83%BC%E3%82%BF%E3%83%9F%E3%83%A5%E3%83%BC%E3%82%B8%E3%83%83%E3%82%AF%E3%81%AE%E4%BF%A1%E5%8F%B7%E5%87%A6%E7%90%86%EF%BC%8D-%E9%9D%92%E6%9C%A8%E7%9B%B4%E5%8F%B2-ebook/dp/B0BFZNHS2R/ref=tmm_kin_swatch_0?_encoding=UTF8&qid=&sr=)
- [キー・スケール・ダイアトニックコードとは｜Junya Watanabe Official Site](https://watanabejunya.com/key-scale/)
- [コード進行の基本：コードの役割から自由に進行を作る！｜Junya Watanabe Official Site](https://watanabejunya.com/chord-progression-basic/)
- [コードの音の重ね方：ボイシング・ボイスリーディング｜Junya Watanabe Official Site](https://watanabejunya.com/voicing/)
- [コード進行にメロディーをつける！丁寧解説！｜Junya Watanabe Official Site](https://watanabejunya.com/melody-to-chord/)
- [はじめに | Learning Music](https://learningmusic.ableton.com/ja/index.html)

### 参考URL

- [GarageBand - Apple サポート 公式サイト](https://support.apple.com/ja-jp/garageband)

[^1]: PCのキーボードでキーをタイプして使って音を演奏する方法
[^2]: iOS版にはビートシーケンサがある。また**Logic Pro**には同様の機能だるステップシーケンサがある。
[^3]: **Logic Pro**と**iOS版 GrageBand**には**Live Loops**機能がある
[^4]: AirDropで転送も可能です
[^5]: 接続先が**macOS版 GarageBand**のため、ビートシーケンサやLive Loopsは利用できません
