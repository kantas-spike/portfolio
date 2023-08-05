---
title: "Gitの使い方を整理したい"
date: 2023-07-22T11:35:52+09:00
draft: false
tags:
- git
---

`git`は複雑で難しいですね。
さらに、vscodeのソース管理は使いにくいですね。

vscodeには、`GitLens`という拡張機能があるそうです。
評判が良さそうなんで、試しに使ってみたいと思います。

<!--more-->

その前に、私が良く利用する`git`の使い方を洗い出し、
その後にその操作が`GitLens`で簡単に利用できるかを試したいと思います。

### Gitでよく利用する操作

#### コミット

- 複数ファイルをコミット (`git commit`)
- 直前のコミットログを修正 (`git commit --amend`)
- 複数ファイルを直前のコミットに追加コミット (`git commit --amend`)
- ファイル内の一部変更のみコミット(`vscode`の`Git:選択した範囲をステージする`)
- 直前のコミットを破棄(`git reset --soft HEAD^`)
- 直前のコミットを過去のコミットと合体させる
  - (`git rebase --interactive <base>`、
  - エディタで、直前コミットを合体したいコミットの直下に移動後、
  - `pick`を`s`(または`f`)に変更しエディタを保存して終了)

#### ブランチ

- ブランチを作成する (`git branch <branch_name>`)
- ブランチを切り替える (`git checkout <branch_name>`)
- ブランチの一覧を表示する (`git branch`, `git branch -r`, `git branch -a`)
- ブランチを削除する (`git branch -d <branch_name>`)

#### remote

- リモートリポジトリを追加する (`git remote add origin <repositry_url>`)
- ブランチをリモートにプッシュする (`git push origin <branch_name>`)
- リモートブランチを取り込む (`git pull origin <branch_name>`)
- リモートで削除されたブランチの情報を削除する (`git fetch --prune`)

#### その他

- ワーキングとステージングにあるファイルを一時的に退避 (`git stash save`)
- 退避したファイルを戻す (`git stash pop`)

### まずは使う

[gitkraken/vscode-gitlens](https://github.com/gitkraken/vscode-gitlens#repositories-view-)をまずは使っていきたいと思います。

以下のチェックリストの操作がストレス少なく利用できれば、ずっと使っていきたいと思います。

- コミット

  - [x] 複数ファイルをコミット (`ソース管理`からステージングして`コミット`)
  - [x] 直前のコミットログを修正 (`ソース管理`から`ステージング済みをコミット(修正)`)
  - [x] 過去のコミットログを修正
    - (`GitLens`から該当コミットの直前のコミットを右クリック、
    - `Rebase Current Branch Onto Commit..`を選択、
    - `Interactive Rebase`を実行
    - `該当コミット`の`pick`を`reword`に変更
    - `START REBASE`をクリック
    - エディタのコミットメッセージを修正・保存して閉じる)
  - [x] 複数ファイルを直前のコミットに追加コミット (`ソース管理`から`ステージング済みをコミット(修正)`)
  - [x] ファイル内の一部変更のみコミット(`ソース管理`から変更のあったファイルを右クリックし`変更を開く`、`比較画面の右側でコミットしたい行を選択`し、右クリックして`選択した範囲をステージする`を選択)
  - [ ] 直前のコミットを破棄(`git reset --soft HEAD^`)
  - [ ] 直前のコミットを過去のコミットと合体させる
    - (`git rebase --interactive <base>`、
    - エディタで、直前コミットを合体したいコミットの直下に移動後、
    - `pick`を`s`(または`f`)に変更しエディタを保存して終了)

- ブランチ

  - [x] ブランチを作成する (`ソース管理`から`Branches`の`Create Branches...`)
  - [x] ブランチを切り替える (`ソース管理`から`Branches`の`Switch to Branch`)
  - [x] ブランチの一覧を表示する (`ソース管理`から`Branches`)
  - [x] ブランチを削除する (`ソース管理`から`Branches`で該当ブランチを右クリックで`delete`)
  - [x] ブランチをリモートにプッシュする (`ソース管理`から`Branches`で該当ブランチの`Publish Branch`アイコンをクリック)
  - [x] リモートブランチを取り込む (`ソース管理`から`Branches`で該当ブランチの`Pull`アイコンをクリック)

- remote

  - [x] リモートリポジトリを追加する (`ソース管理`から`Remotes`で`Add Remote`を選択し、リモート名(`origin`)とリポジトリのURLを設定)
  - [x] リモートで削除されたブランチの情報を削除する (`Git: Fetch(Prune)`) [^1]

- その他

  - [x] ワーキングとステージングにあるファイルを一時的に退避 (`ソース管理`から`Stashes`で`Stash All Changes`)
  - [x] 退避したファイルを戻す (`ソース管理`から`Stashes`で`Apply Stash`から`Pop Stash`を選択)

### 参考

- [gitkraken/vscode-gitlens: Supercharge Git inside VS Code and unlock untapped knowledge within each repository — Visualize code authorship at a glance via Git blame annotations and CodeLens, seamlessly navigate and explore Git repositories, gain valuable insights via rich visualizations and powerful comparison commands, and so much more](https://github.com/gitkraken/vscode-gitlens#repositories-view-)

[^1]: `GitLens: Git Command Palettg`の`Fetch & Prune`ではダメ
