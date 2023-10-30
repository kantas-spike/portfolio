---
title: "MacOSで拡張属性を削除したい"
date: 2023-10-31T04:56:13+09:00
draft: false
tags:
  - macos
---

ダウンロードしたファイルなどを`ls -l`すると`@`が付く。

これは、`Extended Attributes(拡張属性)`と呼ぶそうだ。
この`拡張属性`を削除したい。

<!--more-->

```shell
% ls -l xxx.png
-rw-------@ 1 xxx  staff  3208  9 24 18:20 xxx.png
```

### 解決策

`xattr`コマンドで削除できる。

ファイルに付与された拡張属性を確認するには以下のコマンドを実行する。

```shell
% xattr xxx.png
com.apple.metadata:kMDItemWhereFroms
```

そして、ファイルの拡張属性を全て削除するには以下を実行する。

```shell
xattr -c xxx.png
```

`ls -l`すると`@`が表示されないことを確認できる。

```shell
% ls -l xxx.png
-rw------- 1 xxx  staff  3208  9 24 18:20 xxx.png
```

### 参考

- [macos - How do I remove the "extended attributes" on a file in Mac OS X? - Stack Overflow](https://stackoverflow.com/questions/4833052/how-do-i-remove-the-extended-attributes-on-a-file-in-mac-os-x/4833168#4833168)
- [拡張ファイル属性 - Wikipedia](https://ja.wikipedia.org/wiki/%E6%8B%A1%E5%BC%B5%E3%83%95%E3%82%A1%E3%82%A4%E3%83%AB%E5%B1%9E%E6%80%A7)
