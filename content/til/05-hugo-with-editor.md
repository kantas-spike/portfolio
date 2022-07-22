---
title: "hugoにコンテンツ追加時にvscodeですぐに編集したい"
date: 2022-07-22T14:13:39+09:00
draft: fasle
tags:
- hugo
- vscode
---

`hugo`でコンテンツを追加したときに、すぐに`vscode`で編集したい。

<!--more-->

~~~shell
hugo new til/hogehoge.md
~~~

### 解決策

`hugo`には `--editor`オプションがあるため、エディタを指定して実行すれば良い。

~~~shell
hugo new --editor code til/hogehoge.md
~~~

ただし、デフォルト設定では、以下のように許可`code`(vscodeのexe名)は許可exeに設定されていないため、エラーになる。

~~~toml
[security.exec]
  allow = ['^dart-sass-embedded$', '^go$', '^npx$', '^postcss$']
~~~

そのため、`config.toml`に以下を追記する必要がある。

~~~toml
# ..略..

[security.exec]
  allow = ['^dart-sass-embedded$', '^go$', '^npx$', '^postcss$', 'code']
~~~

### 参考

- [hugo new Options](https://gohugo.io/commands/hugo_new/#options)
- [Security Policy](https://gohugo.io/about/security-model/#security-policy)