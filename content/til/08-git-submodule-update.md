---
title: "gitでsubmoduleの更新を取り込みたい"
date: 2022-07-22T17:22:37+09:00
draft: false
tags:
- git
---

gitでsubmoduleの上流での更新を取り込みたい。

### 解決策

以下を実行する。

~~~shell
git submodule update --remote
~~~

### 参考

- [上流の変更の取り込み](https://git-scm.com/book/ja/v2/Git-%E3%81%AE%E3%81%95%E3%81%BE%E3%81%96%E3%81%BE%E3%81%AA%E3%83%84%E3%83%BC%E3%83%AB-%E3%82%B5%E3%83%96%E3%83%A2%E3%82%B8%E3%83%A5%E3%83%BC%E3%83%AB#_%E4%B8%8A%E6%B5%81%E3%81%AE%E5%A4%89%E6%9B%B4%E3%81%AE%E5%8F%96%E3%82%8A%E8%BE%BC%E3%81%BF)