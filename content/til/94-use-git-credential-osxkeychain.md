---
title: "GitでGithubの認証情報を何度も入力したくない"
date: 2023-11-22T22:41:26+09:00
draft: false
tags:
  - git
  - GitHub
  - macOS
---

GitHubのリポジトリにPushする度に、毎回ユーザー名とパスワードをgitに入力したくない。(使用環境はmacOS)

<!--more-->

### 解決策

いろいろ解決策はあるようだが、今回は`git credential-osxkeychain`を利用して、予めGitHubのユーザー名とパスワード(Personal Access Token)を登録しておく。

登録が済めば、GitHubのリポジトリにPushする場合にも、gitコマンドが自動で認証情報を送信するため、ユーザー名とパスワードの入力が不要になる。

#### 認証情報の登録手順

1. gitの`credential.helper`設定が`osxkeychain`であることを確認

   ```shell
   $ git config credential.helper
   osxkeychain
   ```

2. `git credential-osxkeychain store`で認証情報を登録

   事前に**Personal Access Token**を取得しておく。(取得方法は、[個人用アクセス トークンを管理する - GitHub Docs](https://docs.github.com/ja/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens)を参照)

   以下のように、コマンド実行後、`host`,`protocol`,`username`,`password`を入力し、最後に空行を入力する。

   ```shell
   $ git credential-osxkeychain store
   host=github.com
   protocol=https
   username=ユーザー名
   password=Personal Access Token
   # 空行(実際は、Enterキーを押すだけ)

   ```

3. `git credential-osxkeychain get`で認証情報の登録状況を確認

   以下のように、コマンド実行後、`host`,`protocol`を入力し、最後に空行を入力する。
   すると、登録した`username`, `password`が表示される。

   ```shell
   $ git credential-osxkeychain get
   host=github.com
   protocol=https
   # 空行(実際は、Enterキーを押すだけ)

   username=ユーザー名
   password=Personal Access Token
   ```

#### 認証情報の更新方法

以下のように`git credential-osxkeychain erase`を実行し認証情報を削除してから、
再度、新しい情報を登録することで認証情報を更新できる。

```shell
   $ git credential-osxkeychain erase
   host=github.com
   protocol=https
   # 空行(実際は、Enterキーを押すだけ)

```

また、`git credential-osxkeychain`で登録した認証情報は、macOS キーチェーンと連動しているため、
キーチェーンを操作して認証情報を更新できる。

キーチェーンから認証情報を更新する方法は以下を参照のこと。

```column
[macOS キーチェーンからの認証情報を更新する - GitHub Docs](https://docs.github.com/ja/get-started/getting-started-with-git/updating-credentials-from-the-macos-keychain)
```

### 参考

- [Git - 認証情報の保存](https://git-scm.com/book/ja/v2/Git-%E3%81%AE%E3%81%95%E3%81%BE%E3%81%96%E3%81%BE%E3%81%AA%E3%83%84%E3%83%BC%E3%83%AB-%E8%AA%8D%E8%A8%BC%E6%83%85%E5%A0%B1%E3%81%AE%E4%BF%9D%E5%AD%98)
- [git-credential-osxkeychainの使い方メモ | garsue.dev](https://garsue.dev/posts/git-credential-osxkeychain/)
- [macOS キーチェーンからの認証情報を更新する - GitHub Docs](https://docs.github.com/ja/get-started/getting-started-with-git/updating-credentials-from-the-macos-keychain)
  - [コマンドラインで認証情報を削除する # macOS キーチェーンからの認証情報を更新する - GitHub Docs](https://docs.github.com/ja/get-started/getting-started-with-git/updating-credentials-from-the-macos-keychain#deleting-your-credentials-via-the-command-line)
- [コマンドラインで認証する # GitHub への認証方法について - GitHub Docs](https://docs.github.com/ja/authentication/keeping-your-account-and-data-secure/about-authentication-to-github#authenticating-with-the-command-line)
