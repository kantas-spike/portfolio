---
title: "Blenderでメッシュを曲げたい 〜「|」を「)」にしたい〜"
date: 2023-06-22T10:39:45+09:00
draft: false
tags:
- blender
---

Blendrで*平面のメッシュ*を曲げたい。
`|`を`)`のように曲げたい。

<!--more-->

### 解決策

`Simple Deform Modifier`の`Bend`を使うと曲げれる。

柔軟に曲がるようにするためには、事前に*平面のメッシュ*を細かく[Subdivide](https://docs.blender.org/manual/en/3.5/modeling/meshes/editing/edge/subdivide.html)しておく必要がある。
また、`Simple Deform Modifier`の原点として、`Empty > Arrows`などのオブジェクトを指定すると、より複雑な変形操作を行える。

### 参考

- [Bending a plane in blender SimpleDeform modifier / Blender tutorial - YouTube](https://www.youtube.com/watch?v=KHVtvI7M9mQ)
- [Simple Deform Modifier — Blender Manual](https://docs.blender.org/manual/en/latest/modeling/modifiers/deform/simple_deform.html#index-0)
- [Subdivide — Blender Manual](https://docs.blender.org/manual/en/3.5/modeling/meshes/editing/edge/subdivide.html)