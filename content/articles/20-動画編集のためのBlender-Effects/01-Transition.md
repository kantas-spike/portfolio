---
title: "Transition"
date: 2024-06-19T08:44:23+09:00
draft: true
type: series
params:
  hidden_in_section: false
  series_title: "動画編集のためのBlender 〜 Effects 編〜"
  prev_article: "./_index.md"
  next_article: "./02-Grouping.md"
tags:
  - Blender
  - Vse
  - Vse非公式文書
---

Transitionとは、あるストリップから別のストリップに場面を切り替えることです。

<!--more-->

たとえば、赤色のColorストリップと、緑色のColorストリップを横に並べた場合、ストリップの繋ぎ目の位置で突然、赤色から緑色に場面が切り替わります。

VSEの Transitionストリップを利用すると、赤色から緑色へ徐々に切り替えることや、赤色から緑色の場面にスライドして切替えることができます。

Transitionストリップには以下があります。

| 名前             | 説明                                                                                                     |
| ---------------- | -------------------------------------------------------------------------------------------------------- |
| Cross Fade       | フェードアウトする入力1と、フェードインする入力2の2つのストリップをオーバーラップさせます。              |
| Gamma Cross Fade | Cross Fadeと同じ。ただし、オーバーラップさせた際にガンマ補正することでより人間の視覚に近い映像にします。 |
| Wipe             | 入力1と入力2の2つストリップをスライドさせて入れ替えます。                                                |
| Sound Crossfade  | 2つの重なり合うサウンドストリップのボリュームをオーバーラップさせます。                                  |

#### Cross Fade / Gamma Cross Fade

#### Wipe

#### Sound Crossfade
