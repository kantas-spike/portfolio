---
title: "hugoで出力ディレクトリを削除してから実行したい"
date: 2022-07-15T09:31:02+09:00
year: "2022"
month: "2022/07"
draft: false
tags:
- hugo
---

削除済みのファイルが出力ディレクトリに残るのを防ぐため、
`hugo`で、最初に出力ディレクトリを削除してから実行したい。

<!--more-->

### 解決方法

以下により出力ディレクトリを毎回クリアしてから実行できる。

~~~shell
hugo --cleanDestinationDir
~~~

#### オプションの意味

- `--cleanDestinationDir`: 静的ディレクトリに存在しないファイルを出力ディレクトリから削除する(削除したファイルが出力ディレクトリに残るの防ぐ)

#### 参考

- [Options | hugo](https://gohugo.io/commands/hugo/#options)