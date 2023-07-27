---
title: "マテリアルデザインのカラーシステムを勉強する"
date: 2023-07-27T01:19:11+09:00
draft: false
url: /notes/color_system_of_material_design
tags:
- design
---

アプリのデザインについて勉強していますが、いまいち色の選び方がわかりません。

そこで、Googleが開発している`Design Language`[^1]である[Material Design](https://m3.material.io/)を学び、
アプリの色選び方法を学びたいと思います。

<!--more-->

### Color System

1. キーカラーを選択しベースラインカラーを決める
2. 各キーカラーの色調パレットを用意する
3. ベースラインカラーのロールを用意する
4. 色調をロールに割り当てる
5. システムトークンが決定する

### ベースラインカラーを決める

[Material Design](https://m3.material.io/)では`Key colors`と`Additional colors`を選ぶそうです。

これら選んだ色がベースラインカラーになります。

#### Key colors

`Key colors`は2種類計5個の色が選ばれます。

自分のアプリに合せて、5つの色を選びましょう。

{{<qcontent
      source="Color system – Material Design 3 | Key colors"
      url="https://m3.material.io/styles/color/the-color-system/key-colors-tones#5fdf196d-1e21-4d03-ae63-e802d61ad5ee"
>}}
![](https://lh3.googleusercontent.com/G_2Z3lRMdADfzbQyJZcZFAv61QpImyb9OhdmEpu_lAaxgPa01iY-QHPhIgCbkqPQTn9C4Jwzr2OufMQSmPcwJnmSdkmpmix_8HSrctOUjVo=s0)
{{</qcontent>}}

各`Key colors`の用途をまとめてみました。

~~~rawhtml
<table>
<thead>
<tr><th>種類<th>カラー名<th>説明
</thead>
<tbody>
<tr><td rowspan="3">Accent colors<br>(アクセントカラー)
<td>Primary Key Color
<td>UI全体で利用される主要なコンポーネントの役割りを引き立てるために使用する
<br>(例: FAB, 重要なボタン、アクティブ状態、一番上のサーフェスの色)
<tr><td>Secondary Key Color
<td>あまり目立たないコンポーネントに使用する
<br>(例: フィルターチップスなど)
<tr><td>Tertiary Key Color
<td>primary色やsecondary色のバランスをとる目的や、特定要素に注目を集める目的のために、対照的なアクセントとして使用する
<br>(バランス用 or アクセント用 チームの裁量で自由に使える)
<tr><td rowspan="2">Neutral colors<br>(ニュートラルカラー)<br><div class="text-xs font-bold mt-4">無彩色 or 彩度の低いくすんだ色</div>
<td>Neutral Key Color
<td>背景用の表面色(surface color)として使用する。
<br>強調するテキストやアイコンの色としても使用する
<tr><td>Neutral Variant Key Color
<td>テキストやアイコンやコンポーネントのアウトラインなどの中程度の強調のために使用する
</tbody>
</table>
~~~

#### Additional colors

必要に応じてベースラインカラーに、`Additional colors`を追加できます。

自分のアプリに合せて、必要な`Additional colors`を選び、その色を決めましょう。`Error colors`は必要になりそうです。

{{<qcontent
      source="Color system – Material Design 3 | Additional colors"
      url="https://m3.material.io/styles/color/the-color-system/key-colors-tones#ed9cff6c-5844-43b2-b8d8-34896bd68282"
>}}
![](https://lh3.googleusercontent.com/Aq1Nj4pUsz9KSCTZfzIy3zZmVc7xsTB4ujc2ufzPUo8aU6iYjiJitr4EpGaXXuJ2tzkOzwc-AXcLdU6l2Q61-5_j4OE0yG9CPQWfon8sivso=s0)
{{</qcontent>}}


~~~rawhtml
<table>
<thead>
<tr><th>種類<th>カラー名<th>説明
</thead>
<tbody>
<tr><td rowspan="3">Additonal Color<br>
<td>Error colors
<td>エラー用の色
<tr>
<td>Product-specific custom colors
<td>UIの表現上必要になる色
</tbody>
</table>
~~~

### 色調パレットを用意する

ベースラインカラーで選んだ色に対して、トーン(色調)を設定します。

#### Neutral colors の色調パレット

`Neutral colors`の場合、0〜100までのトーンからなる色調パレットで表現します。

各トーンの色は、キーカラー名のプレフィックス(例: `N-`, `NV-`)の後に、トーンの値を付与した名前(例: `N-45`, `NV-99`)で表現します。

{{<qcontent
      source="Color system – Material Design 3 | Tonal palettes"
      url="https://m3.material.io/styles/color/the-color-system/key-colors-tones#a828e350-1551-45e5-8430-eb643e6a7713"
>}}
![](https://lh3.googleusercontent.com/X7h-ccmRcbYfSo-E_YnapoUQAHlNqWtrnSwRPJ4Pd020NPa753NbKfTZfFWiHpEkGIcITeTY605XJAw7yX4I1C7yAL0j44_H7KWLFsk_IW8=s0)
{{</qcontent>}}

#### Accent colors の色調パレット

`Accent colors`の場合、0,100を含む13個のトーン(0, 10, 20, 30, 40, 50 60, 70, 80, 90, 95, 99, 100)からなる色調パレットで表現します。

各トーンの色は、キーカラー名のプレフィックス(例: `primary`, `secondary`)の後に、トーンの値を付与した名前(例: `primary40`, `secondary95`)で表現します。

{{<qcontent
      source="Color system – Material Design 3 | One key color becomes thirteen tones"
      url="https://m3.material.io/styles/color/the-color-system/key-colors-tones#6bdb9471-b70d-42c9-8ace-76743c1fff13"
>}}
![](https://lh3.googleusercontent.com/EhattwVxu9U2L0bEcL_GT3Z9a6ToJ_frpwOxlAsa8jJ5-OvzH2UmbuLtpox8wDG33GkNm7g0Uxfds7uPsN0c_tgmfb-DBnMZeYK_nUiiV9kOgQ=s0)
{{</qcontent>}}

### ロールを用意する

ベースラインカラーで選んだ色に対して、それぞれの役割(`role`)を設定します。

各カラーとロールの組合せに対して、トーン付きの色名を割り当てます。

#### Accent colors のロール

4つのロールに、それぞれ異なるトーンの色を設定します。

~~~rawhtml
<table>
<thead>
<tr>
<th>Accent colors
<th colspan="4">roles
</thead>
<tbody>
<tr>
<td>Primary Key Color
<td>Primary
<td>On Primary
<td>Primary Container
<td>On Primary Container
<tr>
<td>Secondary Key Color
<td>Secondary
<td>On Secondary
<td>Secondary Container
<td>On Secondary Container
<tr>
<td>Tertiary Key Color
<td>Tertiary
<td>On Tertiary
<td>Tertiary Container
<td>On Tertiary Container
<tr>
<td>(Error)
<td>Error
<td>On Error
<td>Error Container
<td>On Error Container
</tbody>
</table>
~~~

以下は、`Primary Key Color`のロールの例

{{<qcontent
      source="Color system – Material Design 3 | Roles in a scheme"
      url="https://m3.material.io/styles/color/the-color-system/color-roles#55d2b7d2-0202-4616-887e-f575a7946aac"
>}}
![](https://lh3.googleusercontent.com/_XC5_qQxO-ckW4rd706nzmFVI4n7TZSdyStVcDT7zfjOP3a4lLeSOqedUKKnUV6U00Crq6cVamFuxim9cA-9nlTcguwSv0x-WeLu216fnhlk=s0)
{{</qcontent>}}

#### Neutral colorsのロール

2グループ、計12個のロールに、それぞれ異なるトーンの色を設定します。

~~~rawhtml
<table>
<thead>
<tr>
<th>Accent colors
<th>Group
<th colspan="5">roles
</thead>
<tbody>
<tr>
<td rowspan="3">Neutral Key Color
<td rowspan="4">Surface
<td colspan="2">Surface Dim
<td>Surface
<td colspan="2">Surface Bright
<tr>
<td>Surface Container Lowest
<td>Surface Container Low
<td>Surface Container
<td>Surface Container High
<td>Surface Container Highest
<tr>
<td colspan="5">On Surface
<tr>
<td rowspan="2">Neutral Variant Key Color
<td colspan="5">On Surface Variant
<tr>
<td>Outline
<td colspan="2">Outline
<td colspan="3">Outline Variant
</tbody>
</table>
~~~

### 色調をロールに割り当てる

各ロールにトーン付きの色を割り当てます。

{{<qcontent
      source="Color system – Material Design 3 | By mapping and coding roles through tokens"
      url="https://m3.material.io/styles/color/the-color-system/color-roles#f5ef005c-0aba-4e23-9d46-ffbd386ade94"
>}}
![](https://lh3.googleusercontent.com/SXDcKYOGhQLlTHAwC5mw0Ax008YQIdUvKeevqSy_K9Kl91F_Qi3wDMoDNXAJ8ltD7wKM1Tgfeo5GZyMsf-d6GqrS2wrkWcozoXhIpCYcG2c=s0)
{{</qcontent>}}

### ベースラインカラースキームのトークン

ベースラインカラーの仕組みで作成されたカラーは、[システムトークン](https://m3.material.io/styles/color/the-color-system/tokens#7fd4440e-986d-443f-8b3a-4933bff16646)として定義されます。

37個のシステムトークンが定義されています。

さきほど説明したロール以外に、8つのロール(`Inverse Primary`、`Inverse surface`、`Inverse on surface`、`Background`、`On background`、`Shadow`、`Surface tint`、`Scrim`)が追加されています。

{{< qcontent
      source="Color system – Material Design 3 | Baseline color scheme tokens"
      url="https://m3.material.io/styles/color/the-color-system/tokens#e26e130c-fa67-48e1-81ca-d28f6e4ed398"
>}}
|Role|System token|Light scheme ref token|Dark scheme ref token|Light scheme default value|Dark scheme default value|
|---|---|---|---|---|---|
|Primary|md.sys.color.primary|md.ref.palette.primary40|md.ref.palette.primary80|#6750A4|#D0BCFF|
|Primary container|md.sys.color.primary-container|md.ref.palette.primary90|md.ref.palette.primary30|#EADDFF|#4F378B|
|On primary|md.sys.color.on-primary|md.ref.palette.primary100|md.ref.palette.primary20|#FFFFFF|#371E73|
|On primary container|md.sys.color.on-primary-container|md.ref.palette.primary10|md.ref.palette.primary90|#21005E|#EADDFF|
|Inverse primary|md.sys.color.inverse-primary|md.ref.palette.primary80|md.ref.palette.primary40|#D0BCFF|#6750A4|
|Secondary|md.sys.color.secondary|md.ref.palette.secondary40|md.ref.palette.secondary80|#625B71|#CCC2DC|
|Secondary container|md.sys.color.secondary-container|md.ref.palette.secondary90|md.ref.palette.secondary30|#E8DEF8|#4A4458|
|On secondary|md.sys.color.on-secondary|md.ref.palette.secondary100|md.ref.palette.secondary20|#FFFFFF|#332D41|
|On secondary container|md.sys.color.on-secondary-container|md.ref.palette.secondary10|md.ref.palette.secondary90|#1E192B|#E8DEF8|
|Tertiary|md.sys.color.tertiary|md.ref.palette.tertiary40|md.ref.palette.tertiary80|#7D5260|#EFB8C8|
|Tertiary container|md.sys.color.tertiary-container|md.ref.palette.tertiary90|md.ref.palette.tertiary30|#FFD8E4|#633B48|
|On tertiary|md.sys.color.on-tertiary|md.ref.palette.tertiary100|md.ref.palette.tertiary20|#FFFFFF|#492532|
|On tertiary container|md.sys.color.on-tertiary-container|md.ref.palette.tertiary10|md.ref.palette.tertiary90|#370B1E|#FFD8E4|
|Surface|md.sys.color.surface|md.ref.palette.neutral98|md.ref.palette.neutral6|#FEF7FF|#141218|
|Surface dim|md.sys.color.surface-dim|md.ref.palette.neutral87|md.ref.palette.neutral6|#DED8E1|#141218|
|Surface bright|md.sys.color.surface-bright|md.ref.palette.neutral98|md.ref.palette.neutral24|#FEF7FF|#3B383E|
|Surface container lowest|md.sys.color.surface-container-lowest|md.ref.palette.neutral100|md.ref.palette.neutral4|#FFFFFF|#0F0D13|
|Surface container low|md.sys.color.surface-container-low|md.ref.palette.neutral96|md.ref.palette.neutral10|#F7F2FA|#1D1B20|
|Surface container|md.sys.color.surface-container|md.ref.palette.neutral94|md.ref.palette.neutral12|#F3EDF7|#211F26|
|Surface container high|md.sys.color.surface-container-high|md.ref.palette.neutral92|md.ref.palette.neutral17|#ECE6F0|#2B2930|
|Surface container highest|md.sys.color.surface-container-highest|md.ref.palette.neutral90|md.ref.palette.neutral22|#E6E0E9|#36343B|
|Surface variant|md.sys.color.surface-variant|md.ref.palette.neutral-variant90|md.ref.palette.neutral-variant30|#E7E0EC|#49454F|
|On surface|md.sys.color.on-surface|md.ref.palette.neutral10|md.ref.palette.neutral90|#1C1B1F|#E6E1E5|
|On surface variant|md.sys.color.on-surface-variant|md.ref.palette.neutral-variant30|md.ref.palette.neutral-variant80|#49454E|#CAC4D0|
|Inverse surface|md.sys.color.inverse-surface|md.ref.palette.neutral20|md.ref.palette.neutral90|#313033|#E6E1E5|
|Inverse on surface|md.sys.color.inverse-on-surface|md.ref.palette.neutral95|md.ref.palette.neutral20|#F4EFF4|#313033|
|Background|md.sys.color.background|md.ref.palette.neutral98|md.ref.palette.neutral6|#FEF7FF|#141218|
|On background|md.sys.color.on-background|md.ref.palette.neutral10|md.ref.palette.neutral90|#1C1B1F|#E6E1E5|
|Error|md.sys.color.error|md.ref.palette.error40|md.ref.palette.error80|#B3261E|#F2B8B5|
|Error container|md.sys.color.error-container|md.ref.palette.error90|md.ref.palette.error30|#F9DEDC|#8C1D18|
|On error|md.sys.color.on-error|md.ref.palette.error100|md.ref.palette.error20|#FFFFFF|#601410|
|On error container|md.sys.color.on-error-container|md.ref.palette.error10|md.ref.palette.error90|#410E0B|#F9DEDC|
|Outline|md.sys.color.outline|md.ref.palette.neutral-variant50|md.ref.palette.neutral-variant60|#79747E|#938F99|
|Outline variant|md.sys.color.outline-variant|md.ref.palette.neutral-variant80|md.ref.palette.neutral-variant30|#C4C7C5|#444746|
|Shadow|md.sys.color.shadow|md.ref.palette.neutral0|md.ref.palette.neutral0|#000000|#000000|
|Surface tint|md.sys.color.surface-tint-color|md.sys.color.primary|md.sys.color.primary|#6750A4|#D0BCFF|
|Scrim|md.sys.color.scrim|md.ref.palette.neutral0|md.ref.palette.neutral0|#000000|#000000|
{{< /qcontent >}}

### 参考

- [Material Design - Wikipedia](https://en.wikipedia.org/wiki/Material_Design)

- [Material Design](https://m3.material.io/)
  - [Color system – Material Design 3](https://m3.material.io/styles/color/the-color-system/key-colors-tones)

- [【読み物】それってどんな色のこと？　ニュートラルカラー | 生地・副資材の仕入れ・卸販売専門 | テキスタイルネット](https://contents.textile-net.jp/reading-material/neutral-color/index.html)

[^1]: デザインガイドラインという意味なのかな..
