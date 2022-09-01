---
title: "hugo serverをキャッシュ無しで表示させる"
date: 2022-07-15T09:16:56+09:00
draft: false
tags:
- hugo
---

`hugo server` でサイトを確認してもキャッシュが表示される。
キャッシュなしで表示したい。

<!--more-->

### 解決策

以下によりキャッシュなしで表示できる。

~~~shell
hugo server --disableFastRender --ignoreCache --cleanDestinationDir
~~~~

#### オプションの意味

- `--disableFastRender`: 変更発生時に再描画する(インメモリのキャッシュを無視する?)
- `--ignoreCache`: キャッシュを無視する(キャッシュディレクトリのキャッシュを無視する)
- `--cleanDestinationDir`: 静的ディレクトリに存在しないファイルを出力ディレクトリから削除する(削除したファイルが出力ディレクトリに残るの防ぐ)

#### 参考

- [Options | hugo server](https://gohugo.io/commands/hugo_server/#options)