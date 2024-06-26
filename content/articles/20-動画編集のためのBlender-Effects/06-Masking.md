---
title: "Masking"
date: 2024-06-19T08:44:23+09:00
draft: true
type: series
params:
  hidden_in_section: true
  series_title: "動画編集のためのBlender 〜 Effects 編〜"
tags:
  - Blender
  - Vse
  - Vse非公式文書
---

マスキングは、映像の一部を切り出して、その部分になんらかの効果を適用する編集手法だそうです。

<!--more-->

マスキングには、以下の2つのデータが必要です。

- 処理対象のストリップ
- マスク

#### 操作方法

- Strip masks
- Data-block masks

#### マスクの計算方法

処理対象のストリップにマスクを適用することで、マスクの色(RGB値とアルファ値)に応じて、処理対象のストリップからマスクと重なる部分を切り出します。

処理対象のストリップのアルファ値 => マスク(RGB値とアルファ値) => マスク適用後のアルファ値

#### 実際の例
