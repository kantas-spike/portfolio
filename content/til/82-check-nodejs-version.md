---
title: "Node.jsのバージョンを確認したい"
date: 2023-09-30T01:42:04+09:00
draft: false
tags:
- nodejs
---

vscode拡張機能で利用できるNode.jsのAPIを確認するために、
Electron上で動作しているNode.jsのバージョンを知りたい。

<!--more-->

### 解決策

vscodeのリリースノード(例えば [Visual Studio Code August 2023](https://code.visualstudio.com/updates/v1_82#_engineering))を確認すれば、
ElectronやNode.jsのバージョンが明記されている。

また、実際に動作させてコンソールにバージョンを出力させることもできる。

以下のコードを、vscodeの拡張機能のテストコードなどに埋め込み確認することができる。

~~~js
console.log("nodejs version: ", process.version)
~~~

### 参考

- [Visual Studio Code August 2023](https://code.visualstudio.com/updates/v1_82#_engineering)
- [Process | Node.js v18.18.0 Documentation](https://nodejs.org/docs/latest-v18.x/api/process.html#processversion)