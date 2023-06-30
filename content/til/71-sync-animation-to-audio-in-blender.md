---
title: "Blenderでアニメーションと音を同期させたい"
date: 2023-06-30T11:42:43+09:00
draft: false
tags:
- blender
---

Blenderでアニメーションの動きをバックグラウンドミュージックと同期させたい。

<!--more-->

### 解決策

`Video sequencer`を使ってオーディオストリップを追加し音の波を表示する。

波形や音を確認しながら、ポイントとなる音の位置に、`Video sequencer`でマーカーを設定すれば、アニメーションのタイムラインにもそのマーカーが共有される。

このマーカーを利用して、アニメーションのキーフレームのポイントを調整すれば、音に合せて動きを同期できる。

#### 手順

1. アニメーションを設定したシーン内で、`エリア`を水平分割し、`Video sequencer`を表示
2. `Video sequencer`にオーディオストリップを追加し、バックグラウンドミュージックを選択
3. オーディオストリップの設定で、`display waveform`を有効にし、音の波を表示
4. `Timeline`の`Playback`をクリックし、表示されるポップアップ画面の`sync`項目で`Sync to Audio`を選択。これにより、タイムラインを再生時に音声の再生を優先し音ずれをなくす
5. オプションとして、`Playback`ポップアップ画面の`Audio Scrubbing`を有効にしても良い。これにより、タイムラインのプレイヘッドを左右に動かした時に該当箇所の音が再生される
6. `Video sequencer`内で、波の形や音に合せて、必要な場所にマーカーを配置。`Video sequencer`で追加したマーカーは、同一シーンの`Timeline`にも共有される
7. `Timeline`や`Dope Sheet`を使って、マーカーの位置にあわせて、アニメーションを調整
8. `Outputプロパティー`の`Output > Audio > Audio Codec`に適切なコーデックを設定。これにより、レンダリング結果に音声を含めることができる
9. アニメーションをレンダー

### 参考

- [[2.92] Blender Tutorial: How to Add Sound to Your Renders, Quick Beginner Tutorial - YouTube](https://www.youtube.com/watch?v=SD62YJ6u9KM)
- [Playback Popover - Sync | Timeline — Blender Manual](https://docs.blender.org/manual/en/3.6/editors/timeline.html#bpy-types-scene-sync-mode)
