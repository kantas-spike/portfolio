---
title: "カラーパレットについて学びたい"
date: 2023-11-17T10:27:20+09:00
draft: false
tags:
  - デザイン
  - color
---

デジタル庁が公開している[デザインシステム](https://www.digital.go.jp/policies/servicedesign/designsystem/)は、
ウェブデザインのポリシーや部品が記載されていて、大変勉強になります。

<!--more-->

その中のカラーシステム2.0の説明を読んでいると、カラーパレットが登場します。
カラーパレットには、名前(例: Blue)と、番号(例: 50,100,...,1200)、16進数のRGB色(例: #E8F1FE) が登場します。

```column
[[新規スタイル] カラー2.0を追加しました # [バージョン1.4.0]スタイルやコンポーネントの追加・修正・更新を行いました｜デジタル庁](https://www.digital.go.jp/policies/servicedesign/designsystem/20231018#sec-01)
```

このようなカラーパレットを自分でも作ってみたくなりました。

### やること

基準となる色を選び、その色のカラーパレットを作成します。

今回は例として、最近見たアニメからこの色を選びました。
この色をもとにカラーパレットを作成したいと思います。

```colorSample
{"css":"#405743","no":"L29.6","hex":"#405743","name":"マントの色", "description": "16進数RGBの色" , "isLight":false}
```

### 試行錯誤1

最初は、RGBをHSLに変換して輝度(HSLの**L**)だけ変化させれば良いと考えました。

デジ庁のカラーシステムでは、パレットに13段階(50,100,200,300,400,500,600,700,800,900,1000,1100,1200)の番号がついています。

13段階のルールがわからないので、今回は簡単にするため、輝度(L)をそのまま **色の番号** (プレフィックスに**L**、あとは輝度から%の除いた値)にしたいと思います。

```colorSample
{"css":"hsl(128 15.2% 29.6%)","no":"L29.6","hex":"#405743","name":"マントの色(HSL)", "description": "HSLの色" , "isLight":false}
```

80〜20までの輝度を10区切りで、100〜80、20〜0は5区切りで並べてみました。

なかなか良さそうです。

```colorPalette
{"name":"マントの色(HSL)","palette":[{"css":"hsl(128 15.2% 100%)","no":"L100","hex":"#FFFFFF"},{"css":"hsl(128 15.2% 95%)","no":"L95","hex":"#F0F4F1"},{"css":"hsl(128 15.2% 90%)","no":"L90","hex":"#E2E9E3"},{"css":"hsl(128 15.2% 85%)","no":"L85","hex":"#D3DFD4"},{"css":"hsl(128 15.2% 80%)","no":"L80","hex":"#C4D4C6"},{"css":"hsl(128 15.2% 70%)","no":"L70","hex":"#A7BEAA"},{"css":"hsl(128 15.2% 60%)","no":"L60","hex":"#89A98E"},{"css":"hsl(128 15.2% 50%)","no":"L50","hex":"#6C9371"},{"css":"hsl(128 15.2% 40%)","no":"L40","hex":"#56765B"},{"css":"hsl(128 15.2% 30%)","no":"L30","hex":"#415844"},{"css":"hsl(128 15.2% 20%)","no":"L20","hex":"#2B3B2D"},{"css":"hsl(128 15.2% 15%)","no":"L15","hex":"#202C22"},{"css":"hsl(128 15.2% 10%)","no":"L10","hex":"#161D17"},{"css":"hsl(128 15.2% 5%)","no":"L5","hex":"#0B0F0B"},{"css":"hsl(128 15.2% 0%)","no":"L0","hex":"#000000"}]}
```

しかし、以下の記事で知ったのですが、HSLによる色の表現は人間の感覚とは少し違うそうです。
同じ輝度を持つ色同士(例えば、青と黄)を並べた時に、それらの色を人間の目で見ると、同じ明さと感じれないそうです。

```column
[HSL / HSV より人間に寄り添った色表現 CIE L\*C\*h を使いたい #JavaScript - Qiita](https://qiita.com/luncheon/items/937f8a7503421993b258)
```

比較用に黄色のパレットも作ってみました。

```colorSample
{"css":"hsl(55 97.2% 57.8%)","no":"L57.8","hex":"#FCEA2B","name":"黄色(HSL)","description":"HSLの色","isLight":true}
```

```colorPalette
{"name":"黄色(HSL)","palette":[{"css":"hsl(55 97.2% 100%)","no":"L100","hex":"#FFFFFF","isLight":true},{"css":"hsl(55 97.2% 95%)","no":"L95","hex":"#FFFDE6","isLight":true},{"css":"hsl(55 97.2% 90%)","no":"L90","hex":"#FEFACD","isLight":true},{"css":"hsl(55 97.2% 85%)","no":"L85","hex":"#FEF8B4","isLight":true},{"css":"hsl(55 97.2% 80%)","no":"L80","hex":"#FEF59A","isLight":true},{"css":"hsl(55 97.2% 70%)","no":"L70","hex":"#FDF068","isLight":true},{"css":"hsl(55 97.2% 60%)","no":"L60","hex":"#FCEB36","isLight":true},{"css":"hsl(55 97.2% 50%)","no":"L50","hex":"#FBE604","isLight":true},{"css":"hsl(55 97.2% 40%)","no":"L40","hex":"#C9B803","isLight":true},{"css":"hsl(55 97.2% 30%)","no":"L30","hex":"#978A02","isLight":true},{"css":"hsl(55 97.2% 20%)","no":"L20","hex":"#655C01","isLight":false},{"css":"hsl(55 97.2% 15%)","no":"L15","hex":"#4B4501","isLight":false},{"css":"hsl(55 97.2% 10%)","no":"L10","hex":"#322E01","isLight":false},{"css":"hsl(55 97.2% 5%)","no":"L5","hex":"#191700","isLight":false},{"css":"hsl(55 97.2% 0%)","no":"L0","hex":"#000000","isLight":false}]}
```

マントの緑と黄色を輝度(L)の順に並べてみましょう。

```comparePalette
{"title":"HSL色の比較","paletteList":[{"name":"マントの色","palette":[{"css":"hsl(128 15.2% 70%)","no":"L70","hex":"#A7BEAA","isLight":true},{"css":"hsl(128 15.2% 60%)","no":"L60","hex":"#89A98E","isLight":true},{"css":"hsl(128 15.2% 50%)","no":"L50","hex":"#6C9371","isLight":true},{"css":"hsl(128 15.2% 40%)","no":"L40","hex":"#56765B","isLight":false},{"css":"hsl(128 15.2% 30%)","no":"L30","hex":"#415844","isLight":false},{"css":"hsl(128 15.2% 20%)","no":"L20","hex":"#2B3B2D","isLight":false}]},{"name":"黄色","palette":[{"css":"hsl(55 97.2% 70%)","no":"L70","hex":"#FDF068","isLight":true},{"css":"hsl(55 97.2% 60%)","no":"L60","hex":"#FCEB36","isLight":true},{"css":"hsl(55 97.2% 50%)","no":"L50","hex":"#FBE604","isLight":true},{"css":"hsl(55 97.2% 40%)","no":"L40","hex":"#C9B803","isLight":true},{"css":"hsl(55 97.2% 30%)","no":"L30","hex":"#978A02","isLight":true},{"css":"hsl(55 97.2% 20%)","no":"L20","hex":"#655C01","isLight":false}]}]}
```

例えばL50番など同じ輝度の緑と黄色を比べても、同じ輝度とは感じられませんね。
また、個人の感想ですが黄色のL60番とL50番の色の差がわかりにくいですね。

### 試行錯誤2

先ほどの記事(リンクを再掲)では、**CIE L\*C\*h カラーモデル**という色の表現方法を紹介してくれています。

```column
[HSL / HSV より人間に寄り添った色表現 CIE L\*C\*h を使いたい #JavaScript - Qiita](https://qiita.com/luncheon/items/937f8a7503421993b258)
```

このカラーモデルは、人間の知覚に合せて設計されているそうです。**L**が明度で、**C**が彩度、**H**色相になります。

さきほどの緑と黄色を**CIE L\*C\*h カラーモデル**で表現してみましょう。

```colorSample
[{"css":"lch(34.6% 16 146.5)","no":"L34.6","hex":"#405743","name":"マントの色(LCH)","description":"LCHの色","isLight":false},{"css":"lch(91.6% 85.4 98.1)","no":"L91.6","hex":"#FCEA2B","name":"黄色(LCH)","description":"LCHの色","isLight":true}]
```

LCHの明度(L)の部分だけ変化させてカラーパレットを作ります。
80〜20までの輝度を10区切りで、100〜80、20〜0は5区切りで並べてみました。

```colorPalette
[{"name":"マントの色(LCH)","palette":[{"css":"lch(100% 16 146.5)","no":"L100","hex":"#EBFFED","isLight":true},{"css":"lch(95% 16 146.5)","no":"L95","hex":"#DCF8DF","isLight":true},{"css":"lch(90% 16 146.5)","no":"L90","hex":"#CEE9D1","isLight":true},{"css":"lch(85% 16 146.5)","no":"L85","hex":"#C1DBC3","isLight":true},{"css":"lch(80% 16 146.5)","no":"L80","hex":"#B3CDB5","isLight":true},{"css":"lch(70% 16 146.5)","no":"L70","hex":"#98B29B","isLight":true},{"css":"lch(60% 16 146.5)","no":"L60","hex":"#7E9781","isLight":true},{"css":"lch(50% 16 146.5)","no":"L50","hex":"#657D68","isLight":false},{"css":"lch(40% 16 146.5)","no":"L40","hex":"#4D644F","isLight":false},{"css":"lch(30% 16 146.5)","no":"L30","hex":"#354C39","isLight":false},{"css":"lch(20% 16 146.5)","no":"L20","hex":"#203523","isLight":false},{"css":"lch(15% 16 146.5)","no":"L15","hex":"#152A19","isLight":false},{"css":"lch(10% 16 146.5)","no":"L10","hex":"#0B200E","isLight":false},{"css":"lch(5% 16 146.5)","no":"L5","hex":"#001700","isLight":false},{"css":"lch(0% 16 146.5)","no":"L0","hex":"#000A00","isLight":false}]},{"name":"黄色(LCH)","palette":[{"css":"lch(100% 85.4 98.1)","no":"L100","hex":"#FFFF49","isLight":true},{"css":"lch(95% 85.4 98.1)","no":"L95","hex":"#FFF438","isLight":true},{"css":"lch(90% 85.4 98.1)","no":"L90","hex":"#F7E624","isLight":true},{"css":"lch(85% 85.4 98.1)","no":"L85","hex":"#E8D803","isLight":true},{"css":"lch(80% 85.4 98.1)","no":"L80","hex":"#D8CA00","isLight":true},{"css":"lch(70% 85.4 98.1)","no":"L70","hex":"#BAAF00","isLight":true},{"css":"lch(60% 85.4 98.1)","no":"L60","hex":"#9D9400","isLight":true},{"css":"lch(50% 85.4 98.1)","no":"L50","hex":"#807B00","isLight":false},{"css":"lch(40% 85.4 98.1)","no":"L40","hex":"#656200","isLight":false},{"css":"lch(30% 85.4 98.1)","no":"L30","hex":"#4D4A00","isLight":false},{"css":"lch(20% 85.4 98.1)","no":"L20","hex":"#3B3300","isLight":false},{"css":"lch(15% 85.4 98.1)","no":"L15","hex":"#352800","isLight":false},{"css":"lch(10% 85.4 98.1)","no":"L10","hex":"#311C00","isLight":false},{"css":"lch(5% 85.4 98.1)","no":"L5","hex":"#2C1200","isLight":false},{"css":"lch(0% 85.4 98.1)","no":"L0","hex":"#270100","isLight":false}]}]
```

緑と黄色を並べてみましょう。

HSLと比べると、LCHの同一輝度の色を比較すると、輝度に統一感がありますね。
個人の感想ですが、同じ番号のマントの色と黄色は、だいたい同じ明るさに思えますね。

```comparePalette
{"title":"LCH色の比較","paletteList":[{"name":"マントの色","palette":[{"css":"lch(90% 16 146.5)","no":"L90","hex":"#CEE9D1","isLight":true},{"css":"lch(85% 16 146.5)","no":"L85","hex":"#C1DBC3","isLight":true},{"css":"lch(80% 16 146.5)","no":"L80","hex":"#B3CDB5","isLight":true},{"css":"lch(70% 16 146.5)","no":"L70","hex":"#98B29B","isLight":true},{"css":"lch(60% 16 146.5)","no":"L60","hex":"#7E9781","isLight":true},{"css":"lch(50% 16 146.5)","no":"L50","hex":"#657D68","isLight":false}]},{"name":"黄色","palette":[{"css":"lch(90% 85.4 98.1)","no":"L90","hex":"#F7E624","isLight":true},{"css":"lch(85% 85.4 98.1)","no":"L85","hex":"#E8D803","isLight":true},{"css":"lch(80% 85.4 98.1)","no":"L80","hex":"#D8CA00","isLight":true},{"css":"lch(70% 85.4 98.1)","no":"L70","hex":"#BAAF00","isLight":true},{"css":"lch(60% 85.4 98.1)","no":"L60","hex":"#9D9400","isLight":true},{"css":"lch(50% 85.4 98.1)","no":"L50","hex":"#807B00","isLight":false}]}]}
```

一応、HSL版を再掲しておきます。

```comparePalette
{"title":"HSL色の比較","paletteList":[{"name":"マントの色","palette":[{"css":"hsl(128 15.2% 70%)","no":"L70","hex":"#A7BEAA","isLight":true},{"css":"hsl(128 15.2% 60%)","no":"L60","hex":"#89A98E","isLight":true},{"css":"hsl(128 15.2% 50%)","no":"L50","hex":"#6C9371","isLight":true},{"css":"hsl(128 15.2% 40%)","no":"L40","hex":"#56765B","isLight":false},{"css":"hsl(128 15.2% 30%)","no":"L30","hex":"#415844","isLight":false},{"css":"hsl(128 15.2% 20%)","no":"L20","hex":"#2B3B2D","isLight":false}]},{"name":"黄色","palette":[{"css":"hsl(55 97.2% 70%)","no":"L70","hex":"#FDF068","isLight":true},{"css":"hsl(55 97.2% 60%)","no":"L60","hex":"#FCEB36","isLight":true},{"css":"hsl(55 97.2% 50%)","no":"L50","hex":"#FBE604","isLight":true},{"css":"hsl(55 97.2% 40%)","no":"L40","hex":"#C9B803","isLight":true},{"css":"hsl(55 97.2% 30%)","no":"L30","hex":"#978A02","isLight":true},{"css":"hsl(55 97.2% 20%)","no":"L20","hex":"#655C01","isLight":false}]}]}
```

### 試行錯誤3

このカラーパレットですが、LCH色の端の色が怪しいですね。L100は、もっと白くなって欲しい。

```colorPalette
[{"name":"マントの色(LCH)","palette":[{"css":"lch(100% 16 146.5)","no":"L100","hex":"#EBFFED","isLight":true},{"css":"lch(95% 16 146.5)","no":"L95","hex":"#DCF8DF","isLight":true},{"css":"lch(90% 16 146.5)","no":"L90","hex":"#CEE9D1","isLight":true},{"css":"lch(85% 16 146.5)","no":"L85","hex":"#C1DBC3","isLight":true},{"css":"lch(80% 16 146.5)","no":"L80","hex":"#B3CDB5","isLight":true},{"css":"lch(70% 16 146.5)","no":"L70","hex":"#98B29B","isLight":true},{"css":"lch(60% 16 146.5)","no":"L60","hex":"#7E9781","isLight":true},{"css":"lch(50% 16 146.5)","no":"L50","hex":"#657D68","isLight":false},{"css":"lch(40% 16 146.5)","no":"L40","hex":"#4D644F","isLight":false},{"css":"lch(30% 16 146.5)","no":"L30","hex":"#354C39","isLight":false},{"css":"lch(20% 16 146.5)","no":"L20","hex":"#203523","isLight":false},{"css":"lch(15% 16 146.5)","no":"L15","hex":"#152A19","isLight":false},{"css":"lch(10% 16 146.5)","no":"L10","hex":"#0B200E","isLight":false},{"css":"lch(5% 16 146.5)","no":"L5","hex":"#001700","isLight":false},{"css":"lch(0% 16 146.5)","no":"L0","hex":"#000A00","isLight":false}]},{"name":"黄色(LCH)","palette":[{"css":"lch(100% 85.4 98.1)","no":"L100","hex":"#FFFF49","isLight":true},{"css":"lch(95% 85.4 98.1)","no":"L95","hex":"#FFF438","isLight":true},{"css":"lch(90% 85.4 98.1)","no":"L90","hex":"#F7E624","isLight":true},{"css":"lch(85% 85.4 98.1)","no":"L85","hex":"#E8D803","isLight":true},{"css":"lch(80% 85.4 98.1)","no":"L80","hex":"#D8CA00","isLight":true},{"css":"lch(70% 85.4 98.1)","no":"L70","hex":"#BAAF00","isLight":true},{"css":"lch(60% 85.4 98.1)","no":"L60","hex":"#9D9400","isLight":true},{"css":"lch(50% 85.4 98.1)","no":"L50","hex":"#807B00","isLight":false},{"css":"lch(40% 85.4 98.1)","no":"L40","hex":"#656200","isLight":false},{"css":"lch(30% 85.4 98.1)","no":"L30","hex":"#4D4A00","isLight":false},{"css":"lch(20% 85.4 98.1)","no":"L20","hex":"#3B3300","isLight":false},{"css":"lch(15% 85.4 98.1)","no":"L15","hex":"#352800","isLight":false},{"css":"lch(10% 85.4 98.1)","no":"L10","hex":"#311C00","isLight":false},{"css":"lch(5% 85.4 98.1)","no":"L5","hex":"#2C1200","isLight":false},{"css":"lch(0% 85.4 98.1)","no":"L0","hex":"#270100","isLight":false}]}]
```

このカラーパレットは、LCH色をRGB色に変換し、そのRGB色をHTML上に表示しています。

しかし、LCH色は、RGB色よりも広い範囲の色を表現できるそうです。
LCH色がRGB色の範囲を超えた場合どうなるのでしょうか?

色の怪しかった**マントの色**の左端(**L100**)は、以下のように変換されています。

| 変換前LCH色        | →   | 変換後16進RGB |
| ------------------ | --- | ------------- |
| lch(100% 16 146.5) |     | #EBFFED       |

しかし、LCH色をRGB色に変換した**生のRGB値**(丸める前の値)は以下のようになります。

| 変換前LCH色        | →   | 変換後の'生'RGB      | →   | 16進RGBに強制変換 |
| ------------------ | --- | -------------------- | --- | ----------------- |
| lch(100% 16 146.5) |     | rgb(235 **262** 237) |     | #EB**FF**0ED      |

RGB値の各色は0〜255までなので、緑成分(G)が262となり範囲を超えています。

その場合、16進RGBに変換時に、範囲を超えた値を強制的に上限or下限の値に置き換えられます。
今回は緑成分の**262**が**255**に置き換えられてしまいます。

そのため、怪しい色になったのだと考えられます。

では、どうすれば良いのでしょうか?

[luncheon/lch-color-wheel](https://github.com/luncheon/lch-color-wheel)では、丸める前の**生のRGB値**を取得し[^1]、0〜255を超える成分がある場合は、
もう一度LCH色に戻り、LCH色の **彩度(C)** の値を調整してRGB値が0〜255に収まるように補正しています。[^2]

これにより、RGBの各成分が均等に丸められます。(RGBの特定成分だけが255や0に丸められるのを避けることができます。)

この方法を採用してカラーパレットを表示してみましょう(赤字部分は補正のあった色になります。)。[^3]
より自然なカラーパレットになった気がします。

```colorPalette {debug=true}
[{"name":"マントの色(LCH)","palette":[{"name":"","description":"","no":"L100","css":"lch(100% 16 146.5)","hex":"#fefffe","rawRGB":[235,262,237],"isValidRGB":false},{"name":"","description":"","no":"L95","css":"lch(95% 16 146.5)","hex":"#ddf8df","rawRGB":[221,248,223],"isValidRGB":true},{"name":"","description":"","no":"L90","css":"lch(90% 16 146.5)","hex":"#cee9d1","rawRGB":[206,233,209],"isValidRGB":true},{"name":"","description":"","no":"L85","css":"lch(85% 16 146.5)","hex":"#c1dbc3","rawRGB":[193,219,195],"isValidRGB":true},{"name":"","description":"","no":"L80","css":"lch(80% 16 146.5)","hex":"#b3cdb6","rawRGB":[179,205,182],"isValidRGB":true},{"name":"","description":"","no":"L70","css":"lch(70% 16 146.5)","hex":"#98b29b","rawRGB":[152,178,155],"isValidRGB":true},{"name":"","description":"","no":"L60","css":"lch(60% 16 146.5)","hex":"#7e9781","rawRGB":[126,151,129],"isValidRGB":true},{"name":"","description":"","no":"L50","css":"lch(50% 16 146.5)","hex":"#657d68","rawRGB":[101,125,104],"isValidRGB":true},{"name":"","description":"","no":"L40","css":"lch(40% 16 146.5)","hex":"#4d644f","rawRGB":[77,100,79],"isValidRGB":true},{"name":"","description":"","no":"L30","css":"lch(30% 16 146.5)","hex":"#354c39","rawRGB":[53,76,57],"isValidRGB":true},{"name":"","description":"","no":"L20","css":"lch(20% 16 146.5)","hex":"#203523","rawRGB":[32,53,35],"isValidRGB":true},{"name":"","description":"","no":"L15","css":"lch(15% 16 146.5)","hex":"#152a19","rawRGB":[21,42,25],"isValidRGB":true},{"name":"","description":"","no":"L10","css":"lch(10% 16 146.5)","hex":"#0b200f","rawRGB":[11,32,15],"isValidRGB":true},{"name":"","description":"","no":"L5","css":"lch(5% 16 146.5)","hex":"#051407","rawRGB":[5,20,7],"isValidRGB":true},{"name":"","description":"","no":"L0","css":"lch(0% 16 146.5)","hex":"#13000a","rawRGB":[12,-4,3],"isValidRGB":false}]},{"name":"黄色(LCH)","palette":[{"name":"","description":"","no":"L100","css":"lch(100% 85.4 98.1)","hex":"#fffffd","rawRGB":[278,258,73],"isValidRGB":false},{"name":"","description":"","no":"L95","css":"lch(95% 85.4 98.1)","hex":"#fff1b0","rawRGB":[263,244,56],"isValidRGB":false},{"name":"","description":"","no":"L90","css":"lch(90% 85.4 98.1)","hex":"#f7e624","rawRGB":[247,230,36],"isValidRGB":true},{"name":"","description":"","no":"L85","css":"lch(85% 85.4 98.1)","hex":"#e8d803","rawRGB":[232,216,3],"isValidRGB":true},{"name":"","description":"","no":"L80","css":"lch(80% 85.4 98.1)","hex":"#d9c900","rawRGB":[217,202,-39],"isValidRGB":false},{"name":"","description":"","no":"L70","css":"lch(70% 85.4 98.1)","hex":"#bbae00","rawRGB":[186,174,-87],"isValidRGB":false},{"name":"","description":"","no":"L60","css":"lch(60% 85.4 98.1)","hex":"#9e9300","rawRGB":[157,148,-98],"isValidRGB":false},{"name":"","description":"","no":"L50","css":"lch(50% 85.4 98.1)","hex":"#827900","rawRGB":[127,123,-84],"isValidRGB":false},{"name":"","description":"","no":"L40","css":"lch(40% 85.4 98.1)","hex":"#686000","rawRGB":[99,98,-58],"isValidRGB":false},{"name":"","description":"","no":"L30","css":"lch(30% 85.4 98.1)","hex":"#4e4800","rawRGB":[71,74,-33],"isValidRGB":false},{"name":"","description":"","no":"L20","css":"lch(20% 85.4 98.1)","hex":"#363100","rawRGB":[46,52,-21],"isValidRGB":false},{"name":"","description":"","no":"L15","css":"lch(15% 85.4 98.1)","hex":"#2a2600","rawRGB":[35,41,-25],"isValidRGB":false},{"name":"","description":"","no":"L10","css":"lch(10% 85.4 98.1)","hex":"#1f1c00","rawRGB":[28,31,-36],"isValidRGB":false},{"name":"","description":"","no":"L5","css":"lch(5% 85.4 98.1)","hex":"#161100","rawRGB":[27,18,-57],"isValidRGB":false},{"name":"","description":"","no":"L0","css":"lch(0% 85.4 98.1)","hex":"#13000a","rawRGB":[35,-8,-87],"isValidRGB":false}]}]
```

マントの色と黄色のパレットを突き合わせて確認しましょう。

個人の感想ですが、対応する各色は同じ明るさに見えますね。(L90は少し怪しいですが...)

```comparePalette
{"title":"LCHのパレットの比較(1/3)","paletteList":[{"name":"マントの色(LCH)","palette":[{"name":"","description":"","no":"L100","css":"lch(100% 16 146.5)","hex":"#fefffe","rawRGB":[235,262,237],"isValidRGB":false},{"name":"","description":"","no":"L95","css":"lch(95% 16 146.5)","hex":"#ddf8df","rawRGB":[221,248,223],"isValidRGB":true},{"name":"","description":"","no":"L90","css":"lch(90% 16 146.5)","hex":"#cee9d1","rawRGB":[206,233,209],"isValidRGB":true},{"name":"","description":"","no":"L85","css":"lch(85% 16 146.5)","hex":"#c1dbc3","rawRGB":[193,219,195],"isValidRGB":true},{"name":"","description":"","no":"L80","css":"lch(80% 16 146.5)","hex":"#b3cdb6","rawRGB":[179,205,182],"isValidRGB":true},{"name":"","description":"","no":"L70","css":"lch(70% 16 146.5)","hex":"#98b29b","rawRGB":[152,178,155],"isValidRGB":true}]},{"name":"黄色(LCH)","palette":[{"name":"","description":"","no":"L100","css":"lch(100% 85.4 98.1)","hex":"#fffffd","rawRGB":[278,258,73],"isValidRGB":false},{"name":"","description":"","no":"L95","css":"lch(95% 85.4 98.1)","hex":"#fff1b0","rawRGB":[263,244,56],"isValidRGB":false},{"name":"","description":"","no":"L90","css":"lch(90% 85.4 98.1)","hex":"#f7e624","rawRGB":[247,230,36],"isValidRGB":true},{"name":"","description":"","no":"L85","css":"lch(85% 85.4 98.1)","hex":"#e8d803","rawRGB":[232,216,3],"isValidRGB":true},{"name":"","description":"","no":"L80","css":"lch(80% 85.4 98.1)","hex":"#d9c900","rawRGB":[217,202,-39],"isValidRGB":false},{"name":"","description":"","no":"L70","css":"lch(70% 85.4 98.1)","hex":"#bbae00","rawRGB":[186,174,-87],"isValidRGB":false}]}]}
```

```comparePalette
{"title":"LCHのパレットの比較(2/3)","paletteList":[{"name":"マントの色(LCH)","palette":[{"name":"","description":"","no":"L60","css":"lch(60% 16 146.5)","hex":"#7e9781","rawRGB":[126,151,129],"isValidRGB":true},{"name":"","description":"","no":"L50","css":"lch(50% 16 146.5)","hex":"#657d68","rawRGB":[101,125,104],"isValidRGB":true},{"name":"","description":"","no":"L40","css":"lch(40% 16 146.5)","hex":"#4d644f","rawRGB":[77,100,79],"isValidRGB":true},{"name":"","description":"","no":"L30","css":"lch(30% 16 146.5)","hex":"#354c39","rawRGB":[53,76,57],"isValidRGB":true},{"name":"","description":"","no":"L20","css":"lch(20% 16 146.5)","hex":"#203523","rawRGB":[32,53,35],"isValidRGB":true}]},{"name":"黄色(LCH)","palette":[{"name":"","description":"","no":"L60","css":"lch(60% 85.4 98.1)","hex":"#9e9300","rawRGB":[157,148,-98],"isValidRGB":false},{"name":"","description":"","no":"L50","css":"lch(50% 85.4 98.1)","hex":"#827900","rawRGB":[127,123,-84],"isValidRGB":false},{"name":"","description":"","no":"L40","css":"lch(40% 85.4 98.1)","hex":"#686000","rawRGB":[99,98,-58],"isValidRGB":false},{"name":"","description":"","no":"L30","css":"lch(30% 85.4 98.1)","hex":"#4e4800","rawRGB":[71,74,-33],"isValidRGB":false},{"name":"","description":"","no":"L20","css":"lch(20% 85.4 98.1)","hex":"#363100","rawRGB":[46,52,-21],"isValidRGB":false}]}]}
```

```comparePalette
{"title":"LCHのパレットの比較(3/3)","paletteList":[{"name":"マントの色(LCH)","palette":[{"name":"","description":"","no":"L15","css":"lch(15% 16 146.5)","hex":"#152a19","rawRGB":[21,42,25],"isValidRGB":true},{"name":"","description":"","no":"L10","css":"lch(10% 16 146.5)","hex":"#0b200f","rawRGB":[11,32,15],"isValidRGB":true},{"name":"","description":"","no":"L5","css":"lch(5% 16 146.5)","hex":"#051407","rawRGB":[5,20,7],"isValidRGB":true},{"name":"","description":"","no":"L0","css":"lch(0% 16 146.5)","hex":"#13000a","rawRGB":[12,-4,3],"isValidRGB":false}]},{"name":"黄色(LCH)","palette":[{"name":"","description":"","no":"L15","css":"lch(15% 85.4 98.1)","hex":"#2a2600","rawRGB":[35,41,-25],"isValidRGB":false},{"name":"","description":"","no":"L10","css":"lch(10% 85.4 98.1)","hex":"#1f1c00","rawRGB":[28,31,-36],"isValidRGB":false},{"name":"","description":"","no":"L5","css":"lch(5% 85.4 98.1)","hex":"#161100","rawRGB":[27,18,-57],"isValidRGB":false},{"name":"","description":"","no":"L0","css":"lch(0% 85.4 98.1)","hex":"#13000a","rawRGB":[35,-8,-87],"isValidRGB":false}]}]}
```

### まとめ

最終的なマントの色のカラーパレットは以下になります。(L100とL0は、ほぼ白と黒になるので削っています。)

カラーパレットを作成するには、HSLではなく、**CIE L\*C\*h カラーモデル**を利用したほうが良さそうですね。

```colorPalette
[{"name":"マントの色 カラーパレット","palette":[{"name":"","description":"","no":"L95","css":"lch(95% 16 146.5)","hex":"#ddf8df","rawRGB":[221,248,223],"isValidRGB":true},{"name":"","description":"","no":"L90","css":"lch(90% 16 146.5)","hex":"#cee9d1","rawRGB":[206,233,209],"isValidRGB":true},{"name":"","description":"","no":"L85","css":"lch(85% 16 146.5)","hex":"#c1dbc3","rawRGB":[193,219,195],"isValidRGB":true},{"name":"","description":"","no":"L80","css":"lch(80% 16 146.5)","hex":"#b3cdb6","rawRGB":[179,205,182],"isValidRGB":true},{"name":"","description":"","no":"L70","css":"lch(70% 16 146.5)","hex":"#98b29b","rawRGB":[152,178,155],"isValidRGB":true},{"name":"","description":"","no":"L60","css":"lch(60% 16 146.5)","hex":"#7e9781","rawRGB":[126,151,129],"isValidRGB":true},{"name":"","description":"","no":"L50","css":"lch(50% 16 146.5)","hex":"#657d68","rawRGB":[101,125,104],"isValidRGB":true},{"name":"","description":"","no":"L40","css":"lch(40% 16 146.5)","hex":"#4d644f","rawRGB":[77,100,79],"isValidRGB":true},{"name":"","description":"","no":"L30","css":"lch(30% 16 146.5)","hex":"#354c39","rawRGB":[53,76,57],"isValidRGB":true},{"name":"","description":"","no":"L20","css":"lch(20% 16 146.5)","hex":"#203523","rawRGB":[32,53,35],"isValidRGB":true},{"name":"","description":"","no":"L15","css":"lch(15% 16 146.5)","hex":"#152a19","rawRGB":[21,42,25],"isValidRGB":true},{"name":"","description":"","no":"L10","css":"lch(10% 16 146.5)","hex":"#0b200f","rawRGB":[11,32,15],"isValidRGB":true},{"name":"","description":"","no":"L5","css":"lch(5% 16 146.5)","hex":"#051407","rawRGB":[5,20,7],"isValidRGB":true}]}]
```

ただ、以下の記事に紹介されているように、実際のカラーパレットは、単純に輝度を変化させるだけではなく、目的に応じて個別に彩度と色相に調整を入れるようです。(L95は調整が必要かも...)

```column
[UIデザインにおけるカラーパレットの作り方｜小池 政幸 / TSUMIKI INC.](https://note.tsumikiinc.com/n/ndc607e80ec50)
```

また、デジ庁のカラーパレットは色番号に50〜1200までを採番しています。
でも、この採番ルールがわからないので、自分専用のカラーパレットであれば、今回のように色番号に輝度(L)をそのまま使えば良いと思いました。

文字や背景色とした場合のコントラストについての考慮など、いろいろ勉強も必要そうです。

引き続き勉強したいと思います。

### 参考

- [WickyNilliams/pure-color: Pure functions for color conversion and parsing in JavaScript](https://github.com/WickyNilliams/pure-color)
- [luncheon/lch-color-wheel: A wheel-style color picker based on CIE L\*C\*h color space.](https://github.com/luncheon/lch-color-wheel/tree/main)
  - [LCh Color Wheel](https://luncheon.github.io/lch-color-wheel/)
- [HSL / HSV より人間に寄り添った色表現 CIE L\*C\*h を使いたい #JavaScript - Qiita](https://qiita.com/luncheon/items/937f8a7503421993b258)
- [UIデザインにおけるカラーパレットの作り方｜小池 政幸 / TSUMIKI INC.](https://note.tsumikiinc.com/n/ndc607e80ec50)
- [色の数値化には、表色系を使用します。1-楽しく学べる知恵袋 | コニカミノルタ](https://www.konicaminolta.jp/instruments/knowledge/color/section2/02.html)
- [\<color\> - CSS: カスケーディングスタイルシート | MDN](https://developer.mozilla.org/ja/docs/Web/CSS/color_value)
  - [hsl() - CSS: カスケーディングスタイルシート | MDN](https://developer.mozilla.org/ja/docs/Web/CSS/color_value/hsl)
  - [lch() - CSS: カスケーディングスタイルシート | MDN](https://developer.mozilla.org/ja/docs/Web/CSS/color_value/lch)

[^1]: [WickyNilliams/pure-color](https://github.com/WickyNilliams/pure-color/tree/master)の[pure-color/convert/xyz2rgb.js](https://github.com/WickyNilliams/pure-color/blob/master/convert/xyz2rgb.js#L21)を使うと、RGB値が0〜255の範囲に丸められるため、[luncheon/lch-color-wheel](https://github.com/luncheon/lch-color-wheel)さんは、**生のRGB値**を返せるように、[xyz2rgb関数を修正](https://github.com/luncheon/lch-color-wheel/blob/main/src/index.ts#L11)されています。
[^2]: [lch-color-wheel/src/index.ts at main · luncheon/lch-color-wheel](https://github.com/luncheon/lch-color-wheel/blob/main/src/index.ts#L27)
[^3]: **生のRGB(rawRGB)**の値が**0〜255**を超える場合は、パレットの下に赤字で表示し、16進RGB値は補正したものを表示しています。
