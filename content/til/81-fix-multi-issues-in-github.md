---
title: "GitHubのコメントで複数のイシューをfixしたい"
date: 2023-09-29T18:31:06+09:00
draft: false
tags:
- github
---
GitHubのプルリクエストのコメントに`fix #xx`のようにイシュー番号を指定すると該当イシューをクローズできる。

同様の方法で複数のイシューをまとめてクローズしたい。
<!--more-->

ちなみに、以下のように複数のイシュー番号をコンマ区切りで指定しても、まとめてクローズできなかった。

~~~markdown
fix #xxxx, #yyyy, #zzz
~~~

### 解決策

プルリクエストのディスクリプションやコミットメッセージで、複数のイシューをまとめてクローズするには、
以下のように、イシュー番号ごとに、`fix`を指定する必要がある。

~~~markdown
fix #xxxx, fix #yyyy, fix #zzz
~~~

### 参考

- [Linking a pull request to an issue - GitHub Docs](https://docs.github.com/en/issues/tracking-your-work-with-issues/linking-a-pull-request-to-an-issue#linking-a-pull-request-to-an-issue-using-a-keyword)