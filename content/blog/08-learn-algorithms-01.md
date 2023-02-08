---
title: "アルゴリズムを学ぶ ch01-03"
date: 2023-02-07T01:11:30+09:00
draft: true
useMathJax: true
tags:
- programming
- algorithm
- 読書
---

[Aizu Online Judge](https://onlinejudge.u-aizu.ac.jp/home)の[アルゴリズムとデータ構造入門](https://onlinejudge.u-aizu.ac.jp/courses/lesson/1/ALDS1/1)の問題を解くために、
アルゴリズムの勉強を始めたいと思います。

<!--more-->

英語の勉強もかねて、Pythonのコードもあり、星の数も多いアルゴリズムの本 [A Common-sense Guide to Data Structures and Algorithms: Level Up Your Core Programming Skills : Wengrow, Jay: Foreign Language Books](https://www.amazon.co.jp/-/en/Jay-Wengrow/dp/1680507222) を買いました。[^1]

英語だし、長いし、難しいので、少しづつメモしながら、時間をかけて読んでいきたいと思います。

### メモ: Chapter 1-3

Ptyhonの文法やライブラリの使い方を覚えると、動作するプログラム(`code to run properly`)を作ることができます。
しかし、アルゴリズムを学ぶと、効率的に動作するプログラム(`code efficiency`)を作ることができるようです。

プログラムが動くだけで喜んでいました。更に向こうへを目指さないとダメなんですね。

この`efficiency`を測り方は、いろいろあるようですが、時間を計測する方法は実行環境に依存するため、
アルゴリズムの計測方法としては採用されないようです。

そこで、プログラムが実行した処理(ステップ)の数を計測する方法が採用されます。

1つの基準として`Big O`があり、`O(N)`は、`Big Oh of N`や`Order of N`と発音するそうです。

`Big O`は、操作対象とするデータサイズが増加した時に、アルゴリズのパフォーマンスへの影響を測るためのものです。
また、`Big O`はアルゴリズムの最悪のケースのステップ数を対象にします。

```quote { source="A Common-sense Guide to Data Structures and Algorithms | The Soul of Big O"}
how will an algorithm’s performance change as the data increases?
```

以下に、 $O(N)$、$O(1)$、$O(\log N)$の例をまとめます。

また、これら3つの`Big O`の`efficiency`の順位はこのようになります。左端が一番効率的になります。

$$O(1) > O(\log N) > O(N)$$

#### 例: $O(N)$

例えば、あるアルゴリズムが、データサイズに応じて、処理ステップ数が以下のように変化した場合、
数式だと $y = 3x$ になります。

|データサイズ|処理ステップ数|
|---|---|
| 10件 | 30 |
| 50件 | 150 |
| 100件 | 300 |

この場合は`Big O`は $O(N)$ となります。 $O(3N)$ ではなく、 $O(N)$ になります。
これは、`Big O`がデータの増減がアルゴリズムに与える影響のみに注目するからのようです。

#### 例: $O(1)$

例えば、あるアルゴリズムが、データサイズにかかわらず、処理ステップ数が以下のように一定の場合、
数式だと $y = 150$ になります。

|データサイズ|処理ステップ数|
|---|---|
| 10件 | 150 |
| 50件 | 150 |
| 100件 | 150 |

この場合は`Big O`は $O(1)$ となります。 $O(150)$ ではなく、 $O(1)$ になります。
これは、$O(N)$と同じで、`Big O`がデータの増減がアルゴリズムに与える影響のみに注目するからのようです。

#### 例: $O(\log N)$

例えば、あるアルゴリズムが、データサイズに応じて、処理ステップ数が以下のように変化した場合、
数式だと $y = 30 * \log_2 x$ になります。 [^3]

|データサイズ|処理ステップ数|
|---|---|
| 16件 | 120 |
| 64件 | 180 |
| 256件 | 240 |

この場合は`Big O`は $O(\log N)$ となります。[^2]

#### $O(N)$, $O(1)$, $O(\log N)$のグラフ

```plotly
<div id="out3"></div>
<script>
window.addEventListener('load', (event) => {
  var data_x = {
    x: [1, 10, 50, 100, 256],
    y: [3, 30, 150, 300, 768],
    name: 'y=3x'
  }
  var data_1 = {
    x: [1, 10, 50, 100, 256],
    y: [150, 150, 150, 150, 150],
    name: 'y=150'
  }
  var data_log = {
    x: [1, 10, 16, 64, 256],
    y: [0, 99.65784284662087, 120, 180, 240],
    name: 'y=30*log2x'
  }
  Plotly.newPlot("out3", [
    data_x, data_1, data_log
  ],
  { xaxis: {title: 'データサイズ'},
    yaxis: {title: '処理ステップ数'}},
  { responsive: true });
})
</script>
```


### 参考

- [Amazon.co.jp: A Common-sense Guide to Data Structures and Algorithms: Level Up Your Core Programming Skills : Wengrow, Jay: Foreign Language Books](https://www.amazon.co.jp/-/en/Jay-Wengrow/dp/1680507222)

[^1]: 出版社のサイトから買うとPDFやePub版もダウンロードできるので、[A Common-Sense Guide to Data Structures and Algorithms, Second Edition: Level Up Your Core Programming Skills by Jay Wengrow](https://pragprog.com/titles/jwdsal2/a-common-sense-guide-to-data-structures-and-algorithms-second-edition/) の方を買いました。
[^2]: 学生時代に $\log$ なんてどこで使うのかと思っていましたが、ここで登場しましたね。 「$\log_2 x$ は、$x$ が1になるまでに何回、二分割できるか」という意味なんですね。
[^3]: 二分探索などのアルゴリズム