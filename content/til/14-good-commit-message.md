---
title: "良いコミットメッセージを書きたい"
date: 2022-07-27T17:58:10+09:00
draft: false
tags:
- git
---

良いコミットメッセージを書きたい。

<!--more-->

### 解決策

[How to Write a Git Commit Message](https://cbea.ms/git-commit/)([日本語版](https://postd.cc/how-to-write-a-git-commit-message/))にある、タイトル+詳細形式を採用する。

また、[Semantic Commit Message](https://gist.github.com/joshbuchea/6f47e86d2510bce28f8e7f42ae84c716)のように、メッセージのプレフィックスとして`<type>`を付与する。

~~~text
Format: <type>(<scope>): <subject> ※<scope> is optional
~~~

- Semantic Commit Messageの例

    ~~~text
    feat: add hat wobble
    ~~~


### 参考

- [How to Write a Git Commit Message](https://cbea.ms/git-commit/)
  - [日本語版](https://postd.cc/how-to-write-a-git-commit-message/)
- [Semantic Commit Message](https://gist.github.com/joshbuchea/6f47e86d2510bce28f8e7f42ae84c716)
