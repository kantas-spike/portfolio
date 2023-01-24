---
title: "Blenderアドオン開発時の命名規則"
date: 2023-01-24T22:56:25+09:00
draft: false
tags:
- blender
- blender-addon
---

Blenderを起動すると、アドオンの登録時に、以下の警告が表示される。

~~~shell
% /Applications/Blender.app/Contents/MacOS/Blender
register_class(...):
Warning: 'SRTLOADER_SrtList' does not contain '_PT_' with prefix and suffix
~~~

<!--more-->

### 解決策

クラス名に命名規則に従った、以下のセパレータをつける。

#### 命名規則

Blenderのアドオンには、クラス名の衝突を避けるための命名規則がある。

`bl_idname`の命名規則は`UPPER_CASE_{SEPARATOR}_mixed_case`となる。

`{SEPARATOR}`は、クラス別に以下の対応となる。

- Header -> _HT_
- Menu -> _MT_
- Operator -> _OT_
- Panel -> _PT_
- UIList -> _UL_

また、ヘッダー、メニュー、パネルについては、`bl_idname`はそのクラス名と一致することが期待される。
`bl_idname`が未指定の場合は、自動的にクラス名となる。

### 参考

- [Reference/Release Notes/2.80/Python API/Addons - Blender Developer Wiki](https://wiki.blender.org/wiki/Reference/Release_Notes/2.80/Python_API/Addons)