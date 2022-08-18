---
title: "Webサイトの配色とカラーホイール"
date: 2022-08-19T00:25:51+09:00
draft: false
tags:
- python
- 自由研究
---

プログラミング学習には、HTMLを書くと良い[^1]そうです。
なので、Webサイトを作りたいと思っています。

Webサイトは見た目よりも内容が重要なのですが、配色ぐらいは自分で選びたいです。

今回、夏休みの自由研究として、配色について学び、
自分のWebサイトの配色を選びたいと思います。

<!--more-->

#### 配色とは

Wikipedia [^3] で調べてみると、「配色はカラーホイール上の色の論理的な組み合わせ」のことだそうです。

そして、「カラーホイール」とは、以下のような、色を配置した円のことです。

![色相環](https://raw.githubusercontent.com/kantas-spike/create-color-wheel.py/main/images/wheel_0.50.png)

#### 色の論理的な組み合わせとは

カラーホイール上の色の組み合わせにはいくつか種類[^2]があるそうです。

|配色パターン|説明|
|:--|:--|
|単色(Monochromatic)|同一の色相(hue)だけで配色します。同一色相で、シェード(黒の量)やトーン(黒+白の量)、ティント(白の量)の異なる色の組み合せです。|
|補色(Complementary)|ベースカラーと、その色の反対側にある色(互いの色相を打ち消し合う色)の、2色の組み合わせです。|
|分割補色(Split-complementary)|ベースカラーと、ベースカラーから150度と210度離れた2色からなる、3色の組み合せです。|
|無彩色(Achromatic)|彩度の低い色の組み合せです。ホイールの中心に近いほど彩度が低くなります。色相や明度は任意に指定できます。|
|類似色(Analogous)|ベースカラーと、隣接する色の組合せです。|
|トライアド(Triadic)|ベースカラーと、ベースカラーから120度と240度離れた2色からなる、3色の組み合わせです。|
|テトラディック(Tetradic) 長方形|ベースカラーから60度、180度、240度離れた4色の組み合せです。|
|テトラディック(Tetradic) 正方形|ベースカラーから90度、180度、270度離れた4色の組み合せです。|

#### これからやること

カラーホイールを使って配色を選択できるツールを用意し、色の論理的な組み合わせを試し、サイトの配色を決めたいと思います。

### 研究方法

#### 1. ツールの選定

GitHubで公開されているツールをカスタマイズして、配色を検討したいと思います。
まずは、インクリメンタルハッキングサイクル[^15]に従って、ツールを探してみましょう。

GitHub[^4]で キーワード **Color Wheel**、使用言語 **Python**、サイズ **5KB以下** でプロジェクトを検索します。

先頭に表示された、[israel-dryer/Color-Wheel](https://github.com/israel-dryer/Color-Wheel)[^7]プロジェクトをもとに配色を学んでいきます。

#### 2. ツールの拡張

次に、[israel-dryer/Color-Wheel](https://github.com/israel-dryer/Color-Wheel)の使い方と機能を確認しましょう。

[israel-dryer/Color-Wheel](https://github.com/israel-dryer/Color-Wheel)は、GUIツールキットである **Tkinter** を利用したGUIツールです。機能は以下になります。

- カラーホイール(輝度が固定)とカーソルを表示
- カーソルをドラッグで移動可能
- カーソルが指し示す色情報を表示

これだけでは、学習に必要な機能が足りないので、以下を追加します。

- 輝度の異なるカラーホイールを表示
- ベースカラー用のカーソルと組合せ用のカーソルを表示
- **配色パターン** を切り替えて、カーソルの構成を変更可能に
- カーソルが指し示す色情報を表示をコピー可能に
- カーソルが指し示す色情報を保存可能に
- カーソルをダブルクリックで移動可能に
- 指定したRGB16進文字列(例: #FFFFFF)に対応する場所にカーソルを移動可能に

インクリメンタルハッキングサイクル[^15]に従い、段階的に機能を追加していきましょう。

#### 3. ツールの使い方

全ての機能を追加したツールは以下になります。

~~~rawhtml
<img class="w-4/6" src="/images/til/04-screenshot.png">

<div class="w-4/6 border-primary-dark border rounded p-4 mt-4">
<div class="font-bold border-b border-primary-dark mb-2">使い方</div>
カラーホイール上に表示されるカーソル(図中1,2)を移動させると、選択色(図中5)が表示されます。<br>
選択色が気に入れば、"+"ボタンを押すと、保存済みカラー(図中6)として保存されます。<br>
<br>
また、輝度選択スライダー(図中4)を変更すると、カラーホイールの輝度が変わります。<br>
配色パターン選択ラジオボタン(図中3)を変更するとパターンに応じたカーソルが表示されます。
</div>
~~~

#### 4. 配色パターンを使って配色の検討

カラーホイールツールの準備ができました。実際に配色パターンを使って配色を検討しましょう。

まずは、好きな色を選びます。キーとなる色なので、純色(輝度(L):50)から色を選択します。

今回はカラーホイールツールで好きな青系の色を選択し、この色をベースカラー(Primary)としてスタートしたいと思います。

~~~rawhtml
<div class="w-24 h-24 bg-[#3e6cc1] text-white text-center flex flex-col justify-around rounded-3xl mr-4"><div>Primary</div><div>#3e6cc1</div></div>
~~~

そして、**Material Design 3** のカラーシステム[^17]を参考に、キーとなる色とそのバリエーションを選んでいきます。

##### キーカラー

今回は配色パターンの色をそのままキーカラーとします。

|キーカラー名|読み方|説明|
|:--:|:--:|:--|
|Primary|プライマリ|おもに使用する色。ベースカラー|
|Secondary|セカンダリ|2番目に使用する色|
|Tertiary|ターシャリ|3番目に使用する色|
|Quaternary|クォータナリ|4番目に使用する色|

##### カラーバリエーション

キーカラーのトーン(黒+白の量)を変えてカラーバリエーションを作成します。

今回は輝度(L)の値を変えてバリエーションを作成します。
カラーバリエーション名は以下になります。名称は今回独自に命名しています。

|カラーバリエーション名|輝度(L)|説明|
|:--:|:--:|:--|
|main|40|おもに利用する通常色|
|light|90|通常色より明るい色|
|on main|100|通常色が背景の時に利用する色|
|on light|10|明るい色が背景の時に利用する色|


##### 単色パターン

  同一の色相の色(ホイールの同一角度上にある色)をプライマリ、セカンダリに選択します。

  ~~~rawhtml
  <div class="flex items-center my-4">
  <div class="w-24 h-24 bg-[#3e6cc1] text-white text-center flex flex-col justify-around rounded-3xl mr-4"><div>Primary</div><div>#3e6cc1</div></div>
  <div class="w-28 h-24 bg-[#32569a] text-white text-center flex flex-col justify-around"><div>main</div><div>L:40</div></div>
  <div class="w-28 h-24 bg-[#d8e2f3] text-[#0c1627] text-center flex flex-col justify-around"><div>light</div><div>L:90</div></div>
  <div class="w-28 h-24 bg-[#ffffff] text-[#32569a] text-center flex flex-col justify-around"><div>on main</div><div>L:100</div></div>
  <div class="w-28 h-24 bg-[#0c1627] text-[#d8e2f3] text-center flex flex-col justify-around"><div>on light</div><div>L:10</div></div>
  </div>
  <div class="flex items-center my-4">
  <div class="w-24 h-24 bg-[#61779e] text-white text-center flex flex-col justify-around rounded-3xl mr-4"><div>Secondary</div><div>#61779e</div></div>
  <div class="w-28 h-24 bg-[#4d5f7f] text-white text-center flex flex-col justify-around"><div>main</div><div>L:40</div></div>
  <div class="w-28 h-24 bg-[#dfe4ec] text-[#131820] text-center flex flex-col justify-around"><div>light</div><div>L:90</div></div>
  <div class="w-28 h-24 bg-[#ffffff] text-[#4d5f7f] text-center flex flex-col justify-around"><div>on main</div><div>L:100</div></div>
  <div class="w-28 h-24 bg-[#131820] text-[#dfe4ec] text-center flex flex-col justify-around"><div>on light</div><div>L:10</div></div>
  </div>
  ~~~

##### 補色パターン

  プライマリカラーの反対側にある色をセカンダリに選択します。

  ~~~rawhtml
  <div class="flex items-center my-4">
  <div class="w-24 h-24 bg-[#3e6cc1] text-white text-center flex flex-col justify-around rounded-3xl mr-4"><div>Primary</div><div>#3e6cc1</div></div>
  <div class="w-28 h-24 bg-[#32569a] text-white text-center flex flex-col justify-around"><div>main</div><div>L:40</div></div>
  <div class="w-28 h-24 bg-[#d8e2f3] text-[#0c1627] text-center flex flex-col justify-around"><div>light</div><div>L:90</div></div>
  <div class="w-28 h-24 bg-[#ffffff] text-[#32569a] text-center flex flex-col justify-around"><div>on main</div><div>L:100</div></div>
  <div class="w-28 h-24 bg-[#0c1627] text-[#d8e2f3] text-center flex flex-col justify-around"><div>on light</div><div>L:10</div></div>
  </div>
  <div class="flex items-center my-4">
  <div class="w-24 h-24 bg-[#c1933e] text-white text-center flex flex-col justify-around rounded-3xl mr-4"><div>Secondary</div><div>#c1933e</div></div>
  <div class="w-28 h-24 bg-[#9a7632] text-white text-center flex flex-col  justify-around"><div>main</div><div>L:40</div></div>
  <div class="w-28 h-24 bg-[#f3e9d8] text-[#271d0c] text-center flex flex-col justify-around"><div>light</div><div>L:90</div></div>
  <div class="w-28 h-24 bg-[#ffffff] text-[#9a7632] text-center flex flex-col justify-around"><div>on main</div><div>L:100</div></div>
  <div class="w-28 h-24 bg-[#271d0c] text-[#f3e9d8] text-center flex flex-col justify-around"><div>on light</div><div>L:10</div></div>
  </div>
  ~~~

##### 分割補色

  プライマリカラーから150度と210度離れた2色をそれぞれ、セカンダリ、ターシャリに選択します。

  ~~~rawhtml
  <div class="flex items-center my-4">
  <div class="w-24 h-24 bg-[#3e6cc1] text-white text-center flex flex-col justify-around rounded-3xl mr-4"><div>Primary</div><div>#3e6cc1</div></div>
  <div class="w-28 h-24 bg-[#32569a] text-white text-center flex flex-col justify-around"><div>main</div><div>L:40</div></div>
  <div class="w-28 h-24 bg-[#d8e2f3] text-[#0c1627] text-center flex flex-col justify-around"><div>light</div><div>L:90</div></div>
  <div class="w-28 h-24 bg-[#ffffff] text-[#32569a] text-center flex flex-col justify-around"><div>on main</div><div>L:100</div></div>
  <div class="w-28 h-24 bg-[#0c1627] text-[#d8e2f3] text-center flex flex-col justify-around"><div>on light</div><div>L:10</div></div>
  </div>
  <div class="flex items-center my-4">
  <div class="w-24 h-24 bg-[#adc13e] text-white text-center flex flex-col justify-around rounded-3xl mr-4"><div>Secondary</div><div>#adc13e</div></div>
  <div class="w-28 h-24 bg-[#8b9a32] text-white text-center flex flex-col  justify-around"><div>main</div><div>L:40</div></div>
  <div class="w-28 h-24 bg-[#f3e9d8] text-[#271d0c] text-center flex flex-col justify-around"><div>light</div><div>L:90</div></div>
  <div class="w-28 h-24 bg-[#ffffff] text-[#8b9a32] text-center flex flex-col justify-around"><div>on main</div><div>L:100</div></div>
  <div class="w-28 h-24 bg-[#23270c] text-[#f3e9d8] text-center flex flex-col justify-around"><div>on light</div><div>L:10</div></div>
  </div>
  <div class="flex items-center my-4">
  <div class="w-24 h-24 bg-[#c1523e] text-white text-center flex flex-col justify-around rounded-3xl mr-4"><div>Tertiary</div><div>#c1523e</div></div>
  <div class="w-28 h-24 bg-[#9a4132] text-white text-center flex flex-col  justify-around"><div>main</div><div>main</div><div>L:40</div></div>
  <div class="w-28 h-24 bg-[#f3dcd8] text-[#271d0c] text-center flex flex-col justify-around"><div>light</div><div>L:90</div></div>
  <div class="w-28 h-24 bg-[#ffffff] text-[#9a4132] text-center flex flex-col justify-around"><div>on main</div><div>L:100</div></div>
  <div class="w-28 h-24 bg-[#27100c] text-[#f3dcd8] text-center flex flex-col justify-around"><div>on light</div><div>L:10</div></div>
  </div>
  ~~~

##### 無彩色

  ホイールの円の中心に近い、彩度の低い色の組合せ(本例では補色)を、それぞれプライマリ、セカンダリに選択します。

  ~~~rawhtml
  <div class="flex items-center my-4">
  <div class="w-24 h-24 bg-[#768489] text-white text-center flex flex-col justify-around rounded-3xl mr-4"><div>Primary</div><div>#768489</div></div>
  <div class="w-28 h-24 bg-[#5e696e] text-white text-center flex flex-col justify-around"><div>main</div><div>L:40</div></div>
  <div class="w-28 h-24 bg-[#e4e6e7] text-[#181a1b] text-center flex flex-col justify-around"><div>light</div><div>L:90</div></div>
  <div class="w-28 h-24 bg-[#ffffff] text-[#5e696e] text-center flex flex-col justify-around"><div>on main</div><div>L:100</div></div>
  <div class="w-28 h-24 bg-[#181a1b] text-[#e4e6e7] text-center flex flex-col justify-around"><div>on light</div><div>L:10</div></div>
  </div>
  <div class="flex items-center my-4">
  <div class="w-24 h-24 bg-[#897b76] text-white text-center flex flex-col justify-around rounded-3xl mr-4"><div>Secondary</div><div>#897b76</div></div>
  <div class="w-28 h-24 bg-[#6e635e] text-white text-center flex flex-col  justify-around"><div>main</div><div>main</div><div>L:40</div></div>
  <div class="w-28 h-24 bg-[#e7e5e4] text-[#1b1918] text-center flex flex-col justify-around"><div>light</div><div>L:90</div></div>
  <div class="w-28 h-24 bg-[#ffffff] text-[#6e635e] text-center flex flex-col justify-around"><div>on main</div><div>L:100</div></div>
  <div class="w-28 h-24 bg-[#1b1918] text-[#e7e5e4] text-center flex flex-col justify-around"><div>on light</div><div>L:10</div></div>
  </div>
  ~~~

##### 類似色

  プライマリカラーに隣接する2色をそれぞれ、セカンダリ、ターシャリに選択します。

  ~~~rawhtml
  <div class="flex items-center my-4">
  <div class="w-24 h-24 bg-[#3e6cc1] text-white text-center flex flex-col justify-around rounded-3xl mr-4"><div>Primary</div><div>#3e6cc1</div></div>
  <div class="w-28 h-24 bg-[#32569a] text-white text-center flex flex-col justify-around"><div>main</div><div>L:40</div></div>
  <div class="w-28 h-24 bg-[#d8e2f3] text-[#0c1627] text-center flex flex-col justify-around"><div>light</div><div>L:90</div></div>
  <div class="w-28 h-24 bg-[#ffffff] text-[#32569a] text-center flex flex-col justify-around"><div>on main</div><div>L:100</div></div>
  <div class="w-28 h-24 bg-[#0c1627] text-[#d8e2f3] text-center flex flex-col justify-around"><div>on light</div><div>L:10</div></div>
  </div>
  <div class="flex items-center my-4">
  <div class="w-24 h-24 bg-[#523ec1] text-white text-center flex flex-col justify-around rounded-3xl mr-4"><div>Secondary</div><div>#523ec1</div></div>
  <div class="w-28 h-24 bg-[#42329a] text-white text-center flex flex-col  justify-around"><div>main</div><div>L:40</div></div>
  <div class="w-28 h-24 bg-[#dcd8f3] text-[#271d0c] text-center flex flex-col justify-around"><div>light</div><div>L:90</div></div>
  <div class="w-28 h-24 bg-[#ffffff] text-[#42329a] text-center flex flex-col justify-around"><div>on main</div><div>L:100</div></div>
  <div class="w-28 h-24 bg-[#100c27] text-[#dcd8f3] text-center flex flex-col justify-around"><div>on light</div><div>L:10</div></div>
  </div>
  <div class="flex items-center my-4">
  <div class="w-24 h-24 bg-[#3eadc1] text-white text-center flex flex-col justify-around rounded-3xl mr-4"><div>Tertiary</div><div>#3eadc1</div></div>
  <div class="w-28 h-24 bg-[#328a9a] text-white text-center flex flex-col  justify-around"><div>main</div><div>L:40</div></div>
  <div class="w-28 h-24 bg-[#d8eff3] text-[#271d0c] text-center flex flex-col justify-around"><div>light</div><div>L:90</div></div>
  <div class="w-28 h-24 bg-[#ffffff] text-[#328a9a] text-center flex flex-col justify-around"><div>on main</div><div>L:100</div></div>
  <div class="w-28 h-24 bg-[#0c2327] text-[#d8eff3] text-center flex flex-col justify-around"><div>on light</div><div>L:10</div></div>
  </div>
  ~~~

##### トライアド

  プライマリカラーから120度と240度離れた2色をそれぞれ、セカンダリ、ターシャリに選択します。

  ~~~rawhtml
  <div class="flex items-center my-4">
  <div class="w-24 h-24 bg-[#3e6cc1] text-white text-center flex flex-col justify-around rounded-3xl mr-4"><div>Primary</div><div>#3e6cc1</div></div>
  <div class="w-28 h-24 bg-[#32569a] text-white text-center flex flex-col justify-around"><div>main</div><div>L:40</div></div>
  <div class="w-28 h-24 bg-[#d8e2f3] text-[#0c1627] text-center flex flex-col justify-around"><div>light</div><div>L:90</div></div>
  <div class="w-28 h-24 bg-[#ffffff] text-[#32569a] text-center flex flex-col justify-around"><div>on main</div><div>L:100</div></div>
  <div class="w-28 h-24 bg-[#0c1627] text-[#d8e2f3] text-center flex flex-col justify-around"><div>on light</div><div>L:10</div></div>
  </div>
  <div class="flex items-center my-4">
  <div class="w-24 h-24 bg-[#6cc13e] text-white text-center flex flex-col justify-around rounded-3xl mr-4"><div>Secondary</div><div>#523ec1</div></div>
  <div class="w-28 h-24 bg-[#569a32] text-white text-center flex flex-col  justify-around"><div>main</div><div>L:40</div></div>
  <div class="w-28 h-24 bg-[#e2f3d8] text-[#16270c] text-center flex flex-col justify-around"><div>light</div><div>L:90</div></div>
  <div class="w-28 h-24 bg-[#ffffff] text-[#569a32] text-center flex flex-col justify-around"><div>on main</div><div>L:100</div></div>
  <div class="w-28 h-24 bg-[#16270c] text-[#e2f3d8] text-center flex flex-col justify-around"><div>on light</div><div>L:10</div></div>
  </div>
  <div class="flex items-center my-4">
  <div class="w-24 h-24 bg-[#c13e6c] text-white text-center flex flex-col justify-around rounded-3xl mr-4"><div>Tertiary</div><div>#3eadc1</div></div>
  <div class="w-28 h-24 bg-[#9a3256] text-white text-center flex flex-col  justify-around"><div>main</div><div>L:40</div></div>
  <div class="w-28 h-24 bg-[#f3d8e2] text-[#270c16] text-center flex flex-col justify-around"><div>light</div><div>L:90</div></div>
  <div class="w-28 h-24 bg-[#ffffff] text-[#9a3256] text-center flex flex-col justify-around"><div>on main</div><div>L:100</div></div>
  <div class="w-28 h-24 bg-[#270c16] text-[#f3d8e2] text-center flex flex-col justify-around"><div>on light</div><div>L:10</div></div>
  </div>
  ~~~

##### テトラディック(長方形)

  プライマリカラーから60度、180度、240度離れた2色をそれぞれ、セカンダリ、ターシャリ、クォータナリに選択します。

  ~~~rawhtml
  <div class="flex items-center my-4">
  <div class="w-24 h-24 bg-[#3e6cc1] text-white text-center flex flex-col justify-around rounded-3xl mr-4"><div>Primary</div><div>#3e6cc1</div></div>
  <div class="w-28 h-24 bg-[#32569a] text-white text-center flex flex-col justify-around"><div>main</div><div>L:40</div></div>
  <div class="w-28 h-24 bg-[#d8e2f3] text-[#0c1627] text-center flex flex-col justify-around"><div>light</div><div>L:90</div></div>
  <div class="w-28 h-24 bg-[#ffffff] text-[#32569a] text-center flex flex-col justify-around"><div>on main</div><div>L:100</div></div>
  <div class="w-28 h-24 bg-[#0c1627] text-[#d8e2f3] text-center flex flex-col justify-around"><div>on light</div><div>L:10</div></div>
  </div>
  <div class="flex items-center my-4">
  <div class="w-24 h-24 bg-[#6cc13e] text-white text-center flex flex-col justify-around rounded-3xl mr-4"><div>Secondary</div><div>#523ec1</div></div>
  <div class="w-28 h-24 bg-[#569a32] text-white text-center flex flex-col  justify-around"><div>main</div><div>L:40</div></div>
  <div class="w-28 h-24 bg-[#e2f3d8] text-[#16270c] text-center flex flex-col justify-around"><div>light</div><div>L:90</div></div>
  <div class="w-28 h-24 bg-[#ffffff] text-[#569a32] text-center flex flex-col justify-around"><div>on main</div><div>L:100</div></div>
  <div class="w-28 h-24 bg-[#16270c] text-[#e2f3d8] text-center flex flex-col justify-around"><div>on light</div><div>L:10</div></div>
  </div>
  <div class="flex items-center my-4">
  <div class="w-24 h-24 bg-[#c1933e] text-white text-center flex flex-col justify-around rounded-3xl mr-4"><div>Tertiary</div><div>#3eadc1</div></div>
  <div class="w-28 h-24 bg-[#9a7632] text-white text-center flex flex-col  justify-around"><div>main</div><div>L:40</div></div>
  <div class="w-28 h-24 bg-[#f3e9d8] text-[#270c16] text-center flex flex-col justify-around"><div>light</div><div>L:90</div></div>
  <div class="w-28 h-24 bg-[#ffffff] text-[#9a7632] text-center flex flex-col justify-around"><div>on main</div><div>L:100</div></div>
  <div class="w-28 h-24 bg-[#270c16] text-[#f3e9d8] text-center flex flex-col justify-around"><div>on light</div><div>L:10</div></div>
  </div>
  <div class="flex items-center my-4">
  <div class="w-24 h-24 bg-[#943ec1] text-white text-center flex flex-col justify-around rounded-3xl mr-4"><div>Quaternary</div><div>#3eadc1</div></div>
  <div class="w-28 h-24 bg-[#76329a] text-white text-center flex flex-col  justify-around"><div>main</div><div>L:40</div></div>
  <div class="w-28 h-24 bg-[#ead8f3] text-[#270c16] text-center flex flex-col justify-around"><div>light</div><div>L:90</div></div>
  <div class="w-28 h-24 bg-[#ffffff] text-[#76329a] text-center flex flex-col justify-around"><div>on main</div><div>L:100</div></div>
  <div class="w-28 h-24 bg-[#270c16] text-[#ead8f3] text-center flex flex-col justify-around"><div>on light</div><div>L:10</div></div>
  </div>
  ~~~

##### テトラディック(正方形)

  プライマリカラーから90度、180度、270度離れた2色をそれぞれ、セカンダリ、ターシャリ、クォータナリに選択します。

  ~~~rawhtml
  <div class="flex items-center my-4">
  <div class="w-24 h-24 bg-[#3e6cc1] text-white text-center flex flex-col justify-around rounded-3xl mr-4"><div>Primary</div><div>#3e6cc1</div></div>
  <div class="w-28 h-24 bg-[#32569a] text-white text-center flex flex-col justify-around"><div>main</div><div>L:40</div></div>
  <div class="w-28 h-24 bg-[#d8e2f3] text-[#0c1627] text-center flex flex-col justify-around"><div>light</div><div>L:90</div></div>
  <div class="w-28 h-24 bg-[#ffffff] text-[#32569a] text-center flex flex-col justify-around"><div>on main</div><div>L:100</div></div>
  <div class="w-28 h-24 bg-[#0c1627] text-[#d8e2f3] text-center flex flex-col justify-around"><div>on light</div><div>L:10</div></div>
  </div>
  <div class="flex items-center my-4">
  <div class="w-24 h-24 bg-[#3ec152] text-white text-center flex flex-col justify-around rounded-3xl mr-4"><div>Secondary</div><div>#523ec1</div></div>
  <div class="w-28 h-24 bg-[#329a42] text-white text-center flex flex-col  justify-around"><div>main</div><div>L:40</div></div>
  <div class="w-28 h-24 bg-[#d8f3dc] text-[#0c2710] text-center flex flex-col justify-around"><div>light</div><div>L:90</div></div>
  <div class="w-28 h-24 bg-[#ffffff] text-[#329a42] text-center flex flex-col justify-around"><div>on main</div><div>L:100</div></div>
  <div class="w-28 h-24 bg-[#0c2710] text-[#d8f3dc] text-center flex flex-col justify-around"><div>on light</div><div>L:10</div></div>
  </div>
  <div class="flex items-center my-4">
  <div class="w-24 h-24 bg-[#c1933e] text-white text-center flex flex-col justify-around rounded-3xl mr-4"><div>Tertiary</div><div>#3eadc1</div></div>
  <div class="w-28 h-24 bg-[#9a7632] text-white text-center flex flex-col  justify-around"><div>main</div><div>L:40</div></div>
  <div class="w-28 h-24 bg-[#f3e9d8] text-[#271d0c] text-center flex flex-col justify-around"><div>light</div><div>L:90</div></div>
  <div class="w-28 h-24 bg-[#ffffff] text-[#9a7632] text-center flex flex-col justify-around"><div>on main</div><div>L:100</div></div>
  <div class="w-28 h-24 bg-[#271d0c] text-[#f3e9d8] text-center flex flex-col justify-around"><div>on light</div><div>L:10</div></div>
  </div>
  <div class="flex items-center my-4">
  <div class="w-24 h-24 bg-[#c13ead] text-white text-center flex flex-col justify-around rounded-3xl mr-4"><div>Quaternary</div><div>#3eadc1</div></div>
  <div class="w-28 h-24 bg-[#9a328a] text-white text-center flex flex-col  justify-around"><div>main</div><div>L:40</div></div>
  <div class="w-28 h-24 bg-[#f3d8ef] text-[#270c23] text-center flex flex-col justify-around"><div>light</div><div>L:90</div></div>
  <div class="w-28 h-24 bg-[#ffffff] text-[#9a328a] text-center flex flex-col justify-around"><div>on main</div><div>L:100</div></div>
  <div class="w-28 h-24 bg-[#270c23] text-[#f3d8ef] text-center flex flex-col justify-around"><div>on light</div><div>L:10</div></div>
  </div>
  ~~~

#### 5. 配色パターンをカスタマイズ

個人的な好みなのですが、**補色パターン** か **分割補色パターン** の組み合わせが一番使いやすそうに思いました。

また、以前利用したことのある、配色選択ツール **Color Tool - Material Design**[^18] では、カラーバリエーションに、**main**, **light** と **dark** の3つのバリエーションがありました。
このバリエーションも使いやすそうでした。

そこで、今回は、 **分割補色パターン** から1色選び、セカンダリカラーとし、カラーバリエーションに **dark** を追加したいと思います。

|カラー名|輝度(L)|説明|
|:--:|:--:|:--|
|main|40|おもに利用する通常色|
|light|90|通常色より明るい色|
|dark|20|通常色より暗い色|
|on main|100|通常色が背景の時に利用する色|
|on light|10|明るい色が背景の時に利用する色|
|on dark|100|暗い色が背景の時に利用する色|

以上の結果、私が選んだ色は以下になります。

  ~~~rawhtml
  <div class="flex items-center my-4">
  <div class="w-24 h-24 bg-[#3e6cc1] text-white text-center flex flex-col justify-around rounded-3xl mr-4"><div>Primary</div><div>#3e6cc1</div></div>
  <div class="w-28 h-24 bg-[#32569a] text-white text-center flex flex-col justify-around"><div>main</div><div>L:40</div></div>
  <div class="w-28 h-24 bg-[#d8e2f3] text-[#0c1627] text-center flex flex-col justify-around"><div>light</div><div>L:90</div></div>
  <div class="w-28 h-24 bg-[#192b4d] text-[#ffffff] text-center flex flex-col justify-around"><div>dark</div><div>L:20</div></div>
  <div class="w-28 h-24 bg-[#ffffff] text-[#32569a] text-center flex flex-col justify-around"><div>on main</div><div>L:100</div></div>
  <div class="w-28 h-24 bg-[#0c1627] text-[#d8e2f3] text-center flex flex-col justify-around"><div>on light</div><div>L:10</div></div>
  <div class="w-28 h-24 bg-[#ffffff] text-[#192b4d] text-center flex flex-col justify-around"><div>on dark</div><div>L:100</div></div>
  </div>
  <div class="flex items-center my-4">
  <div class="w-24 h-24 bg-[#adc13e] text-white text-center flex flex-col justify-around rounded-3xl mr-4"><div>Secondary</div><div>#adc13e</div></div>
  <div class="w-28 h-24 bg-[#8b9a32] text-white text-center flex flex-col  justify-around"><div>main</div><div>L:40</div></div>
  <div class="w-28 h-24 bg-[#f3e9d8] text-[#271d0c] text-center flex flex-col justify-around"><div>light</div><div>L:90</div></div>
  <div class="w-28 h-24 bg-[#454d19] text-white text-center flex flex-col justify-around"><div>dark</div><div>L:20</div></div>
  <div class="w-28 h-24 bg-[#ffffff] text-[#8b9a32] text-center flex flex-col justify-around"><div>on main</div><div>L:100</div></div>
  <div class="w-28 h-24 bg-[#23270c] text-[#f3e9d8] text-center flex flex-col justify-around"><div>on light</div><div>L:10</div></div>
  <div class="w-28 h-24 bg-[#ffffff] text-[#454d19] text-center flex flex-col justify-around"><div>on dark</div><div>L:100</div></div>
  </div>
  ~~~

### 結果

各種機能を追加し、HLS形式の色相環をもつカラーホイールツール([kantas-spike/Color-Wheel](https://github.com/kantas-spike/Color-Wheel))を完成させました。

本ツールでは、以下の色を選択できます。

- 配色パターンを使いキーカラーを選択
- 輝度(Lightness)の変更によりカラーバリエーション(**main**, **light**, **dark**)を選択

本ツールを使い、サイトの配色を検討、決定することができました。

#### 私が決めたサイトの配色(再掲)

  ~~~rawhtml
  <div class="flex items-center my-4">
  <div class="w-24 h-24 bg-[#3e6cc1] text-white text-center flex flex-col justify-around rounded-3xl mr-4"><div>Primary</div><div>#3e6cc1</div></div>
  <div class="w-28 h-24 bg-[#32569a] text-white text-center flex flex-col justify-around"><div>main</div><div>L:40</div></div>
  <div class="w-28 h-24 bg-[#d8e2f3] text-[#0c1627] text-center flex flex-col justify-around"><div>light</div><div>L:90</div></div>
  <div class="w-28 h-24 bg-[#192b4d] text-[#ffffff] text-center flex flex-col justify-around"><div>dark</div><div>L:20</div></div>
  <div class="w-28 h-24 bg-[#ffffff] text-[#32569a] text-center flex flex-col justify-around"><div>on main</div><div>L:100</div></div>
  <div class="w-28 h-24 bg-[#0c1627] text-[#d8e2f3] text-center flex flex-col justify-around"><div>on light</div><div>L:10</div></div>
  <div class="w-28 h-24 bg-[#ffffff] text-[#192b4d] text-center flex flex-col justify-around"><div>on dark</div><div>L:100</div></div>
  </div>
  <div class="flex items-center my-4">
  <div class="w-24 h-24 bg-[#adc13e] text-white text-center flex flex-col justify-around rounded-3xl mr-4"><div>Secondary</div><div>#adc13e</div></div>
  <div class="w-28 h-24 bg-[#8b9a32] text-white text-center flex flex-col  justify-around"><div>main</div><div>L:40</div></div>
  <div class="w-28 h-24 bg-[#f3e9d8] text-[#271d0c] text-center flex flex-col justify-around"><div>light</div><div>L:90</div></div>
  <div class="w-28 h-24 bg-[#454d19] text-white text-center flex flex-col justify-around"><div>dark</div><div>L:20</div></div>
  <div class="w-28 h-24 bg-[#ffffff] text-[#8b9a32] text-center flex flex-col justify-around"><div>on main</div><div>L:100</div></div>
  <div class="w-28 h-24 bg-[#23270c] text-[#f3e9d8] text-center flex flex-col justify-around"><div>on light</div><div>L:10</div></div>
  <div class="w-28 h-24 bg-[#ffffff] text-[#454d19] text-center flex flex-col justify-around"><div>on dark</div><div>L:100</div></div>
  </div>
  ~~~

### 感想と課題

#### ツール開発について

インクリメンタルハッキングサイクル(IHC)[^15]が良いことを実感しました。
わたしの実力では **0** を **1** にはできませんが、IHCのおかげで、**1** を **1.3** ぐらいにはできたと思います。

#### ツールのデザインについて

カラーホイールツール自体のデザインが格好悪いです。
少しずつデザインを改善したいですね。

#### 数学の基礎知識について

ツールで画像を操作する時に、座標変換や三角関数など数学の基礎知識が必要になりました。

人生のどこで三角関数を使うのかと思っていましたが、ここでしたね。
今回のツールのように画像を扱うスキルを身につけるため数学の基礎を学び直さないといけません。

#### 配色について

今回参考にした [Material Designのカラーシステム](https://m3.material.io/styles/color/the-color-system/key-colors-tones)では、
キーカラーをアクセントカラーとニュートラルカラーに分けています。

アクセントカラーは、カラーホイールツールで選択したキーカラーと同じです。
ニュートラルカラーは、サイトの背景やサーフェス、コンポーネントのアウトラインの色になります。

背景は灰色、サーフェスは白色のように、決めている場合は問題ありませんが、ニュートラルカラーの採用も今後検討する必要があります。

#### 配色をCSSフレームワークで利用する

世にあるCSSフレームワークでは、スタイルで使用する色をカスタマイズできるようです。

例えば、`primary-dark`、`on-primary-dark` などの名前で色を登録し、サイトデザイン時に登録した色で配色すれば、
あとは、登録した色の値だけ変えればサイト全体の配色を変更できるようになります。

CSSフレームワークの**tailwindcss**[^19]の場合、以下のように設定ファイルに色を登録すれば、
`bg-primary-dark`, `text-on-primary-dark`のように登録した色名で各種配色を行えます。

設定変更だけで配色を簡単に変更できるので、CSSフレームワークを積極的に採用するべきです。

~~~js
# tailwind.config
#   .. 略 ..
module.exports = {
  #   .. 略 ..
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#32569a',
          light: '#d8e2f3',
          dark: '#192b4d',
        },
#   .. 略 ..
        on: {
          primary: {
            DEFAULT: '#ffffff',
            light: '#0c1627',
            dark: '#ffffff',
          },
#   .. 略 ..
~~~

#### ダークモード

Material Designのカラーシステム[^20]では、ダークモード時にカラーバリエーションについても説明があります。
ダークモードの採用も今後検討する必要があります。

### 付録1. 調査 輝度の異なるカラーホイールの作成

[israel-dryer/Color-Wheel](https://github.com/israel-dryer/Color-Wheel)には1種類の輝度のカラーホイールしか用意されていません。カラーホイールを作る必要があります。

カラーホイールはどうやって作るのでしょうか？ ググりましょう。

HSV色[^9]のカラーホイールを作成する方法[^8]が見つかりました。

ただし、HSV色の場合、輝度100%を純色とするため、純色より明い色を指定できないようです。
そこでHLS色[^16]のカラーホイールを作成することにします。HLS色では、輝度50%が純色になります。

カラーホイールにはHLS色が向いてそうですね。

#### HLS算出方法のまとめ

カラーホイールを作成する方法[^8]を確認すると、カラーホイールの色相(**HLS**の**Hue**)は、逆三角関数の **arctan** を使って作成するようです。

三角関数は角度から値を求めますが、逆三角関数は値から角度を求めます。
三角関数の**tan**は**角度**から**余弦分の正弦**を求めますが、 逆三角関数の**arctan**は**余弦分の正弦**から**角度**を求めます。

カラーホイールでは、色相(**HLS**の**Hue**)は、角度に対応しているので、**arctan**が利用できそうです。

また、Pythonの`math`モジュールには、座標の点(x,y)から角度を求める、**atan2**[^10]が用意されています。
これによりホイール内の座標から角度(Hue)を算出できそうです。

そして、彩度(**HLS**の**Saturation**)は、ホイール内の座標から円の中心までの距離を求めれば算出できそうです。

ただし、輝度(**HLS**の**Lightness**)は、2次元では表現できないので、ツールにラジオボタンなどを追加し、輝度を選択できるようにします。

まとめると、以下になります。

|HLS|算出方法|
|:--:|:--|
|H(Hue)|`math.atan2(y, x)`で算出|
|L(Lightness)|固定値。スライダーなどで値を選択し、外部から指定|
|S(Saturation)|座標から円の中心までの距離から算出|

#### atan2の使い方の理解

atan2が難しそうなので、使い方をイメージするためにグラフにしてみました。
座標のx, yとatan2の値の3次元グラフ(円内のみ色付けしています。)になります。

  ![atan2グラフ](/images/til/04-atan2.png)

atan2(y, x)そのままグラフにすると、Y軸のマイナス側を北とした場合、
西側から時計周りに色相が変化します。

カラーホイールは北側から時計周りに色相が変化するようなので変更したいと思います。

atan2(-x, y)をグラフにすると北から時計回りに色相が変化しました。この呼び出し方を採用します。

  ![atan2グラフ](/images/til/04-atan2-xy.png)

これまでの調査結果をふまえ、任意の輝度、任意の半径のカラーホイールを生成するツール [kantas-spike/create-color-wheel.py](https://github.com/kantas-spike/create-color-wheel.py) [^11]を作成しました。

### 付録2 **色の論理的な組み合わせ名** で表示するカーソルの構成を変更可能に

配色のパターンに合せて、ベースカラー用のカーソルと、その他の組み合わせカラー用のカーソルを表示する必要があります。

ツールにおける配色パターンの組み合わせカラーの数と、カーソル表示位置を以下に整理しました。

  |配色パターン|組み合わせカラー数|カーソル表示位置|
  |:--|:--:|:--:|
  |単色(Monochromatic)| 1 | - |
  |補色(Complementary)| 2 | ベースカラーを180度回転 |
  |分割補色(Split-complementary)| 3 | ベースカラーを150, 210度回転|
  |無彩色(Achromatic)| 1 | - |
  |類似色(Analogous)| 3 | ベースカラーを30, 330度回転|
  |トライアド(Triadic)| 3 | ベースカラーを120, 240度回転|
  |テトラディック(Tetradic) 長方形| 4 | ベースカラーを60, 180, 240度回転|
  |テトラディック(Tetradic) 正方形| 4 | ベースカラーを90, 180, 270度回転|

それでは、実現方法を考えましょう。

**Tkinter**[^6] では、座標を指定して画像を配置できます[^12]。(デフォルトでは、画像の中心が指定座標に配置されます。)

~~~python
canvas.create_image(x, y, image=cursor_image)
~~~

ベースカラーのカーソル座標を、さきほど整理したカーソル表示位置の角度に回転させれば、組合せカラー用のカーソルを配置できます。

では、任意の角度に座標を回転できるのでしょうか？

三角関数を使えば実現できるそうです[^13]。

~~~mathjax
<div class="m-4 p-4 border border-gray-500 rounded">
<ul>
<li>回転の中心となる原点: \((0,0)\)
<li>回転角: \(\theta\)
<li>回転前の点: \((a, b)\)
<li>回転後の点: \((a', b')\)
</ul>

この時、回転後の点は以下になる。
<p class="m-2">
\(
(a', b') = (a \cos\theta - b \sin\theta,  a \sin\theta + b \cos\theta)
\)
</p>
</div>
~~~

以下のような関数を用意すれば、ベースカラーのカーソル座標を任意の角度で回転させることができます。

~~~python
def rotate(x, y, deg, center_x, center_y):
    rad = math.radians(deg)
    rx, ry = (x - center_x), (y - center_y)
    nx = rx * math.cos(rad) - ry * math.sin(rad) + center_x
    ny = rx * math.sin(rad) + ry * math.cos(rad) + center_y
    return int(nx), int(ny)
~~~

これまでの調査結果をふまえ、配色パターンに合せたカーソルを表示する機能を追加しました。

---

[^1]: [World Wide Web を使う方法を学び、HTML を書くこと | How To Become A Hacker](https://cruel.org/freeware/hacker.html#skills3)

[^2]: [Color scheme](https://en.wikipedia.org/wiki/Color_scheme)

[^3]: [Color wheel](https://en.wikipedia.org/wiki/Color_wheel#Color_schemes)

[^4]: [GitHub Advanced search](https://github.com/search/advanced)

[^6]: [tkinter](https://docs.python.org/ja/3/library/tkinter.html)

[^7]: [israel-dryer/Color-Wheel](https://github.com/israel-dryer/Color-Wheel)

[^8]: [Color wheel | Rosetta Code](https://rosettacode.org/wiki/Color_wheel#Python)

[^9]: [HSV色空間](https://ja.wikipedia.org/wiki/HSV%E8%89%B2%E7%A9%BA%E9%96%93)

[^10]: [atan2](https://ja.wikipedia.org/wiki/Atan2)

[^11]: [kantas-spike/create-color-wheel.py](https://github.com/kantas-spike/create-color-wheel.py)

[^12]: https://tkdocs.com/shipman/create_image.html

[^13]: [数学ガールの秘密ノート／丸い三角関数](https://www.amazon.co.jp/%E6%95%B0%E5%AD%A6%E3%82%AC%E3%83%BC%E3%83%AB%E3%81%AE%E7%A7%98%E5%AF%86%E3%83%8E%E3%83%BC%E3%83%88%EF%BC%8F%E4%B8%B8%E3%81%84%E4%B8%89%E8%A7%92%E9%96%A2%E6%95%B0-%E7%B5%90%E5%9F%8E-%E6%B5%A9-ebook/dp/B00W6NCLJM/ref=tmm_kin_swatch_0?_encoding=UTF8&qid=&sr=) p.155

[^14]: [kantas-spike/Color-Wheel](https://github.com/kantas-spike/Color-Wheel)

[^15]: [インクリメンタル ハッキングサイクル | ハッキングの学び方](https://github.com/kantas-spike/how-to-learn-hacking-japanese/blob/main/how-to-learn-hacking.md#%E3%82%A4%E3%83%B3%E3%82%AF%E3%83%AA%E3%83%A1%E3%83%B3%E3%82%BF%E3%83%AB-%E3%83%8F%E3%83%83%E3%82%AD%E3%83%B3%E3%82%B0%E3%82%B5%E3%82%A4%E3%82%AF%E3%83%AB)

[^16]: [HLS色空間](https://ja.wikipedia.org/wiki/HLS%E8%89%B2%E7%A9%BA%E9%96%93)

[^17]: [Color system | Material Design 3](https://m3.material.io/styles/color/the-color-system/key-colors-tones)

[^18]: [COLOR TOOL | Material Design 2](https://material.io/resources/color/#!/?view.left=0&view.right=0)

[^19]: [Customizing Colors | tailwindcss](https://tailwindcss.com/docs/customizing-colors#using-custom-colors)

[^20]: [Roles in a scheme |  Material Design 3](https://m3.material.io/styles/color/the-color-system/color-roles#55d2b7d2-0202-4616-887e-f575a7946aac)