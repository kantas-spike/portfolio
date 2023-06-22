---
title: "Blenderで3Dカーソルを移動させたい"
date: 2023-06-22T10:08:30+09:00
draft: false
tags:
- blender
---

`Shift-RMB(マウスの右ボタン)`で、Blenderで3Dカーソルの位置を移動できるが、
簡単に3Dカーソルをグローバル座標系の原点やオブジェクトの中心に移動させる方法を知りたい。

<!--more-->

### 解決策

3Dビューポートでスナップメニューを表示し、3Dカーソルを移動させる。

3Dビューポート内で`Shift-S`をタイプすると、スナップメニューが表示される。
そのメニューに3Dカーソルを移動するための項目がいくつかある。

|3Dカーソルを移動するための項目|説明|
|---|---|
|Cursor to Selected|3Dカーソルを現在選択中のオブジェクトの中心に移動する|
|Cursor to World Origin|3Dカーソルをグローバル座標系の原点に移動する|
|Cursor to Grid|3Dカーソルを直近のグリッド交点に移動する|
|Cursor to Active|3Dカーソルをアクティブオブジェクト(最後に選択されたオブジェクト)の中心に移動する|

上記の項目を選択することで、3Dカーソルを目的の位置に移動できる。

### 参照

- [Snap — Blender Manual](https://docs.blender.org/manual/en/latest/scene_layout/object/editing/snap.html)