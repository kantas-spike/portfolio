---
title: "メインブランチの保護方針を決める"
date: 2023-05-31T22:17:46+09:00
draft: false
tags:
- GitHub
---

GitHubでメインブランチへの直接のプッシュを禁止し、プルリクエストが作成されたもののみマージしたい。

<!--more-->

GitHubのプロジェクトに以下のメッセージが表示されていることに気づいた。
何となくGitHubを使用してきたが、この機会にメインブランチの保護方針を決めたい。

~~~text
Your main branch isn't protected
~~~

<!--more-->

### 解決策

GitHubプロジェクトの`Settings`-`Code and automation`-`Branches`にある`Branch protection rules`の**Add rule ボタン**をクリックし、以下の手順でルールを追加する。

1. `Branch name pattern`で以下の名前を設定する

    ~~~text
    main
    ~~~

2. `Protect matching branches`で以下の項目のみをチェックする

   - [x] Require a pull request before merging [^1]
   - [x] Do not allow bypassing the above settings

### 参考

- [保護されたブランチについて - GitHub Docs](https://docs.github.com/ja/repositories/configuring-branches-and-merges-in-your-repository/managing-protected-branches/about-protected-branches)
- [保護ブランチへの直 push を禁止する](https://zenn.dev/snowcait/articles/42bb6b56c806da)

[^1]: 一人で開発している場合は`Require approvals`をチェックしないこと。プッシュした人は承認(approve)できないためマージできなくなる。
