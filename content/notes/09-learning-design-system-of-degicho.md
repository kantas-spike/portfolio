---
title: "デジ庁のデザインシステムを勉強する"
date: 2023-07-26T11:02:38+09:00
draft: false
url: /notes/design-system
tags:
- design
---

日本国の[デジタル庁](https://www.digital.go.jp/)が、[デザインシステム｜デジタル庁](https://www.digital.go.jp/policies/servicedesign/designsystem/)を公開しています。

このデザインシステムを学んで、自分のサイトやアプリに利用したいと思います。
<!--more-->

[デザインシステム](https://www.digital.go.jp/policies/servicedesign/designsystem/)は、[デジタル庁](https://www.digital.go.jp/)が日本の行政機関向けに、より良い行政サービスを提供するためのデザインの指針を示したものようです。
デザインツールである[Figma: コラボレーションインターフェースデザインツール](https://www.figma.com/ja/)を使って公開されています。[^1]

今回は、[100gで割るアプリ](/notes/pern-app)のデザインに向けて、デジ庁デザインシステムを学びたいと思います。

### デジ庁デザインシステムの構成

デジ庁デザインシステムでは、デザイン用の共通用語を用いUIガイドライン定義しています。

これにより、開発チームの円滑なコミュニケーションを実現するそうです。

その構成は以下になります。

~~~rawhtml
<table class="text_block">
<thead>
<tr>
<th>分類
<th>内容
</thead>
<tbody>
<tr>
<td>デジタル庁デザインシステム利用の手引き
<td>デザインシステムの説明と目的と導入方法などを12枚のスライド資料で紹介
<tr>
<td>スタイル
<td>
以下の7個のフレーム(アートボード)に、実例とガイドライン、仕様を記載
<ul>
<li>カラー
<li>タイポグラフィ
<li>レイアウトコラム
<li>余白
<li>画像
<li>角丸
<li>リンクテキスト
</ul>
</td>
<tr>
<td>コンポーネント
<td>以下の14個のフレーム(アートボード)に、実例とガイドライン、仕様を記載
<ul>
<li>ボタン
<li>ボトムナビゲーション
<li>テキスト入力
<li>テキストエリア
<li>セレクター
<li>ラジオボタン
<li>チェックボックス
<li>モーダルダイアログ
<li>テーブル
<li>ページネーション
<li>パンくずリスト
<li>ユーティリティリンク
<li>アコーディオン
<li>ランゲージセレクター
</ul>
<tr>
<td>テンプレート
<td>以下の6個のフレーム(アートボード)に、実例とガイドライン、仕様を記載
<ul>
<li>読み取り
<li>認証
<li>入力
<li>入力フォーム 基本情報
<li>入力フォーム 期間・種類など
<li>入力フォーム 添付
</ul>
<tr>
<td>イラストレーション・アイコン素材利用規約
<td>利用規約
<tr>
<td>イラストレーション・アイコン素材
<td>以下の2個のフレーム(アートボード)に、実例とガイドライン、仕様を記載(他に4個の説明とサンプルイメージのフレームあり)
<ul>
<li>アイコン
<li>イラストレーション
</ul>
</tbody>
</table>
~~~

### 自分のアプリへの採用方法

デジ庁デザインシステムの構成には、

- 一般的に共通なモノと、
- 自分アプリで利用するモノや独自なモノ

があります。

[100gで割るアプリ](/notes/pern-app)のデザインシステムを資料化する場合、以下の構成になりそうです。

~~~rawhtml
<table class="text_block">
<thead>
<tr>
<th>分類</th>
<th>参考にするデザインシステムのフレーム</th>
</tr>
</thead>
<tbody>
<tr>
<td>スタイル</td>
<td>
<ul>
  <li>カラー
  <li>タイポグラフィ
  <li>レイアウトコラム
  <li>余白
  <li>画像
  <li>角丸
  <li>リンクテキスト
</ul>
</td>
</tr>
<tr>
<td>
利用するコンポーネント
</td>
<td>
<ul>
  <li>ボタン
  <li>テキスト入力
  <li>テキストエリア
  <li>ラジオボタン
  <li>モーダルダイアログ
  <li>ユーティリティリンク
</ul>
</td>
</tr>
<tr>
<td>
利用するテンプレート
</td>
<td>
<p>なし</p>
<div class="mt-6">※独自テンプレート(`一覧`、`入力`)を用意する</div>
</td>
</tr>
</tbody>
</table>
~~~

### 用語の整理

- **デザイントークン**

  デザイナーとエンジニアに対して具体的なデザインについての共通用語を提供する
  表現するレイヤーによって、利用するトークン(`プリミティブトークン`、`セマンティックトークン`など)を分ける

  - **プリミティブトークン**

    もっとも低レイヤーの具体性のある値を表す(例: `色: #0017C1`はそのまま表現せず、`sea-800`と表現する)

    アプリで利用するプリミティブなカラーをカラーパレットとしてあらかじめ決めておく。

  - **セマンティックトークン**

    特定のコンテキストに関連した値を表す(例: `button-light-body`にプリミティブカラー`sea-800`を採用する)

    代表的なコンテキストには以下のものがある。
    これらのコンテキストを組合せて、部品のコンテキストに応じたデザインを表現する。

    以下に、私が勝手に分類してみたコンテキストの名前を例示します。[^2]

    |コンテキストの種類| 例 |
    |---|---|
    |ダーク/ライトモード|dark, light|
    |部品|button, text, icon, chart|
    |役割|border, outline, background, surface, container|
    |種類|body, description, placeholder, label|
    |状態|normal, hover, active, visited, focused, disabled|
    |意味|alert, success, warning|

### 方針

[100gで割るアプリ](/notes/pern-app)は、`Next.js` + `tailwindcss`を利用して開発予定です。

そして、部品は、`storybook`を使ってデザイン予定です。

方針は以下になります。

- `tailwindcss`のユーティリティクラスをプリミティブトークンとする
  - 必要に応じて`tailwindcss`のテーマを拡張して新たなプリミティブトークンを作成する

- `storybook`では、部品の説明はセマンティックトークンで表現する
- キーとなる色は、[Color system – Material Design 3](https://m3.material.io/styles/color/the-color-system/key-colors-tones)を参考に決める [^3]
  - 各ロールのキーカラーを`tailwindcss`のテーマを拡張して作成する
- 基本的にはプリミティブトークンを使って部品を実装する

### 参考

- [デザインシステム｜デジタル庁](https://www.digital.go.jp/policies/servicedesign/designsystem/)
- [Figma: コラボレーションインターフェースデザインツール](https://www.figma.com/ja/)
  - [FigJamでの移動とズーム – Figma ヘルプセンター](https://help.figma.com/hc/ja/articles/1500004414582-FigJam%E3%81%A7%E3%81%AE%E7%A7%BB%E5%8B%95%E3%81%A8%E3%82%BA%E3%83%BC%E3%83%A0)

- [デザイントークン | プロダクト | SmartHR Design System](https://smarthr.design/products/design-tokens/#h3-1)
- [Design tokens - Spectrum](https://spectrum.adobe.com/page/design-tokens/)

- [Color system – Material Design 3](https://m3.material.io/styles/color/the-color-system/key-colors-tones)

[^1]: Figmaは大きなホワイトボードのようです。macOSの場合、`Command(or Control)+マウスホイール`でズーム、`マウスホイール`で上下にスクロール、`Shit+マウスホイール`で左右にスクロール、`中ボタンドラッグ`で移動
[^2]: 上手くない分類です...
[^3]: デジ庁デザインシステムでは、行政機関で共通のキーとなるカラーがあらかじめ決っている。自アプリでは自分でキーカラーを決める必要がある
