---
title: "プログラミングの学び方"
date: 2022-07-22T19:33:48+09:00
draft: false
tags:
- programming
- hacking
---

[How To Became A Hacker](http://www.catb.org/~esr/faqs/hacker-howto.html)([翻訳:ハッカーになろう](https://cruel.org/freeware/hacker.html#believe3))と、
[How To Learn Hacking](http://www.catb.org/~esr/faqs/hacking-howto.html)([翻訳:ハッキングの学び方](https://github.com/kantas-spike/how-to-learn-hacking-japanese/blob/main/how-to-learn-hacking.md))を読んで、自分にあったプログラミング学習方法がわかった気がします。

これらの文書で学んだことをまとめたいと思います。

<!--more-->

### プログラミングは音楽の学習段階と似ている

音楽もプログラミングも、どちらも3つの学習段階があるそうです。

音楽は勉強したことないのでわかりませんが、どちらも **lvl.2** が難しそうです。
また、**lvl.1**だけだとモチベーションが維持できません。

しかし、プログラミングの場合、**インクリメンタルハッキングサイクル** があります。
この学習方法は画期的です。

#### 音楽の場合

~~~mermaid
flowchart LR
subgraph a["lvl.1 運指・音階の弾き方の学習"]
  direction LR
  a1["運指"]<--->a2["音階を弾く"]
end

subgraph b["lvl.2 耳の訓練"]
   b1["音楽を聞く??"]
end

subgraph c["lvl.3 オリジナルの作曲"]
   b2["習得した音楽の<br>パターンを使って作曲"]
end

a--->b--->c
~~~

#### プログラミングの場合

~~~mermaid
flowchart LR
subgraph a["lvl.1 言語・ツールの学習、小さなプログラムの作成"]
  direction LR
  a1["言語・ツール<br>の学習"]<--->a2["小さなプログラム<br>の作成"]
end

subgraph b["lvl.2 デザインセンスを磨く"]
   b1["インクリメンタルハッキングサイクルで<br>多くのプログラムを理解する"]
end

subgraph c["lvl.3 オリジナルの開発"]
   b2["習得した開発の<br>パターンを使って<br>プロジェクト開発"]
end

a--->b--->c
~~~

### インクリメンタルハッキングサイクル

私は「インクリメンタルハッキングサイクル」(IHC)を[How To Learn Hacking](http://www.catb.org/~esr/faqs/hacking-howto.html)([翻訳:ハッキングの学び方](https://github.com/kantas-spike/how-to-learn-hacking-japanese/blob/main/how-to-learn-hacking.md))で初めて知りました。

~~~text
インクリメンタルハッキングサイクルの目的の一つは、コードを読むモチベーションを維持できる環境下で、複雑さの規模を拡大しながら、多くのコードに没頭することです。

-- Eric Steven Raymond "How To Learn Hacking" (ハッキングの学び方) --
~~~

この学習方法は大変素晴しいと思います。簡単に手順を説明します。

IHCは、デザインセンスを磨くためのプログラミングの学習方法です。
以下の7つのステップを繰り返す。

~~~mermaid
flowchart TD
s1["Step.1 興味のあるプログラムを選ぶ"]--->s2
s2["Step.2 そのプログラムの使い方を学ぶ"]--->s3
s3["Step.3 変更・追加する小さな機能を選ぶ"]--->s4
s4["Step.4 コードを探して変更箇所を見つける"]--->s5
s5["Step.5 コードを変更、テスト・デバッグし、変更箇所を文書化する"]--->s6
s6["Step.6 変更をパッチとしてメンテナに送付する"]--->s7
s7["Step.7 プログラム全体を理解できていますか？"]-- "YES" -->e["IHCを終了する"]
s7-- "NO" -->s3
~~~

また、IHCで選択するプロジェクトは、小さなプロジェクトから始めます。
IHCを実施・完了し、同規模のプロジェクトを2,3個完了できたら、次の規模のプロジェクトに進みます。
Mサイズを完了できるころには、デザインセンスが身についています。

~~~mermaid
flowchart LR
s1["XS\n10行〜\n50行"]--->s2
s1-- "2,3個完了" -->s1
s2["S\n100行〜\n500行"]--->s3
s2-- "2,3個完了" -->s2
s3["M\n1000行〜\n5000行"]
s3-- "2,3個完了" -->s3
~~~

興味のあるプロジェクトから始めて、モチベーションを維持しながら、段階的にレベルを上げることができます。飽きっぽい私に合った大変良い学習方法だと思います。

### 私の学習方針

インクリメンタルハッキングサイクルをGitHubを活用しながら

~~~rawhtml
<table class="mx-2">
<thead>
<tr>
<th>lvl.</th>
<th>学習段階</th>
<th>説明</th>
<th>方針</th>
</tr>
</thead>
<tbody>
<tr>
<td class="text-center">1</td>
<td class="text-left">言語・ツールの学習<br/>小さなプログラムの作成</td>
<td class="text-left">プログラム言語・ツール(エディタ、デバッガ、コンパイラ等)の学習し、小さなプログラムを自分で作成します。</td>
<td class="text-left">
<ul>
<li><a href="https://cruel.org/freeware/hacker.html#skills1">最初のプログラミング言語</a>はPythonにする
<li>言語の学習は<a href="https://docs.python.org/ja/3/">公式</a>・非公式の公開文書や書籍で学ぶ
<li>学習度合いの確認に<a href="https://onlinejudge.u-aizu.ac.jp/home">AOJ</a>を活用する
<li>作成したプログラムはGitHubで公開する(英語の勉強のため、なるべくREADMEは英語で書く)
<li>学習中に学んだ事をHTMLで文書化し公開する
</ul>
</td>
</tr>
<tr>
<td class="text-center">2</td>
<td class="text-left">デザインセンスを磨く</td>
<td class="text-left">インクリメンタルハッキングサイクル(IHC)で多くのプログラムを理解する</td>
<td class="text-left">
<ul>
<li>"IHC Step.1"は<a href="https://github.com/search/advanced">GitHub Advanced search</a>を使って選択
<li>選択したプロジェクトをGitHubでフォークし、IHCを実施
<li>"IHC Step.3"はGitHubのIssuesで管理
<li>"IHC Step.5"で作成した変更は、自プロジェクトへプルリクエストしてマージする(今、何周目のサイクルかわかりやすくするため。1周が1PRになる。)
<li>"IHC Step.6"はフォーク元のプロジェクトにプルリクエストする
<li>IHC中,IHC済みのプロジェクトをHTMLで公開する
<li>学習中に学んだ事をHTMLで文書化し公開する
</ul>
</td>
</tr>
<tr>
<td class="text-center">3</td>
<td class="text-left">オリジナルプロジェクトの開発</td>
<td class="text-left">これまでの学習で身に付けた開発のパターンを使い、プロジェクトのリーダーとしてオリジナルのプログラムを開発する</td>
<td class="text-left">
<ul>
<li>なにか人に使ってもらえるプログラムを世に出したい
</ul>
</td>
</tr>
</tbody>
</table>
~~~

### 参考

現在、動画作成も勉強中です。学んだことをHTMLだけでなく動画にもしています。

今回の記事も動画にしています。

~~~rawhtml
<div class="w-[560px]">
{{< youtube ignCTeEMaLk>}}
</div>
~~~


#### Pythonの学習

三谷純 先生の書籍[「Python ゼロからはじめるプログラミング」(ISBN：9784798169460)]("https://www.shoeisha.co.jp/book/detail/9784798169460") の[スライド教材](https://mitani.cs.tsukuba.ac.jp/book_support/python/)にナレーションを付けたものです。

{{<youtube_pl PLYhWljFaYHSIgh9EBuibRFJc3sAAaOOxH>}}

#### AIZU ONLINE JUDGE (AOJ)

AOJの簡単な説明です。

~~~rawhtml
<div class="w-[560px]">
{{< youtube 8OHTxudiPF0 >}}
</div>
~~~

#### インクリメンタルハッキングサイクル

実際に小さなPongゲームのプロジェクトを選んで、IHCをやっています。
([元のプロジェクト](https://github.com/anilatasoyy/Pong-Game-with-Pygame)、[フォークしたプロジェクト](https://github.com/kantas-spike/Pong-Game-with-Pygame/blob/main/README.ja.md))

~~~rawhtml
<div class="w-[560px]">
{{< youtube ejBvtatsCyA >}}
</div>
~~~