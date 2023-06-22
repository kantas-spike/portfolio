---
title: "Gitでマージ済みのローカルブランチを削除したい"
date: 2023-06-22T14:57:38+09:00
draft: false
tags:
- git
---

不要なブランチが増えてきたので、Gitでマージ済みのローカルブランチを削除したい。

<!--more-->

### 解決策

以下のコマンドでマージ済みのローカルブランチを削除できる。

~~~shell
git checkout main
git fetch -p && git branch --merged | grep -v '*' | xargs git branch -d
~~~

#### 解説

1. `git checkout main`

    `main`ブランチ以外のローカルブランチを削除するために、まずは`main`ブランチに切り替える。

2. `git fetch -p`

    `-p`は`--prune`のショート版で、*prune(取り除く)*してくれる。`git fetch -p`しないと、ローカルリポジトリに取り込んだリモートブランチが残りつづけてしまう。

3. `git branch --merged`

    マージ済みのブランチを一覧表示する。

4. `grep -v '*'`

    ブランチ一覧から`*`を含む行を除外する。ブランチ一覧では、現在のブランチ名(今回は`main`ブランチ)の先頭に`*`が付く。
    `main`ブランチが削除対象にならないように除外する。

5. `xargs git branch -d`

    ブランチ一覧(`main`は除外)の各行を`git branch -d `の引数に指定して実行する。
    これにより、各行に記載されたブランチが削除される。

### 参考

- [【Git】リモートに存在しないローカルブランチを一括削除する方法 | ぺんぎんや](https://e-penguiner.com/remove-local-branches-not-on-remote/)
- [リモートで消されたブランチが手元で残ってしまう件を解消する - Qiita](https://qiita.com/yuichielectric/items/84cd61915a1236f19221)
- [2. ブランチを切り替える｜サル先生のGit入門【プロジェクト管理ツールBacklog】](https://backlog.com/ja/git-tutorial/stepup/08/)
- [4. ブランチを削除する｜サル先生のGit入門【プロジェクト管理ツールBacklog】](https://backlog.com/ja/git-tutorial/stepup/10/)