---
title: "ツールの学習 Git"
date: 2022-07-25T11:32:58+09:00
draft: false
tags:
- tool
- programming
- git
---

プログラミングの学習ではGitHubをよく使います。
GitHubを使うためには`git`を使えないといけません。

そこで、[Version Control (Git) · the missing semester of your cs education](https://missing.csail.mit.edu/2020/version-control/)([翻訳](https://missing-semester-jp.github.io/2020/version-control/))で`git`について学びたいと思います。

<!--more-->

### バージョン管理 (Git) の まとめ

まとめると以下になります。

- Gitのデータモデルは美しい。でも、Gitのインターフェイスは醜い
- コマンドの使い方を覚えるのではなく、データモデルを理解することが重要
  - Gitはスナップショット(**コミット**)を **有向非巡回グラフ(DAG)** で管理
  - Gitのデータは、**オブジェクト** と **リファレンス**
  - `git`は **オブジェクト** の追加と **リファレンス** の追加・更新によって、**コミット** の **DAG** を操作するツール
- **コミット** を作成するには **ステージングエリア** を使う
- コマンドの使い方は[Pro Git](https://git-scm.com/book/ja/v2)の1〜5章を読めば、ほとんどわかるはず

先生がGitのインターフェイスが醜いと言うぐらいですから、私が`git`のコマンドを覚えられないのも無理はありません。安心しました。

コマンドの使い方を覚えるより、まず、**データモデル**を理解することが大事です。
一度、データモデルを理解すれば、「データモデルをこのように変更するにはどうすれば良いのか?」という観点でコマンドを探し・その使い方を理解することができます。
また、個人的には、**データモデル** に加えて、**3種類のファイルグループ** の関係も意識する必要があると感じました。

結論としては、この講義で **データモデルの概要**、**3種類のファイルグループ** を理解してから、[Pro Git](https://git-scm.com/book/ja/v2)にすすみましょう。

以降では、データモデルなどについて整理します。

### データモデル

#### スナップショット(コミット)

バージョン管理システムは、日々の各時点でのファイルやフォルダの状態を保存します。
ある時点のファイルやフォルダの状態を保存したものを **スナップショット** と呼びます。
そして、Gitではこのスナップショットを **コミット** と呼びます。

#### スナップショットの管理方法

バージョン管理システムは、スナップショットを関連付けて履歴を管理します。
Gitでは、スナップショット(コミット)を **有向非巡回グラフ(DAG)** として管理します。

丸印(○)がコミット(スナップショット)です。
左から右に時系列でコミットが作成されます。

コミットは左方向にペアレントを持ちます。(注意: コミットはチャイルドは持ちません。親を知るのみです。)
下図では`C3`の親は`C2`になり、`C4`の親も`C2`になります。
`C2`以降で2つの **ブランチ** に枝分れしています。

~~~mermaid
flowchart LR
  c0((C0))
  c1((C1))
  c2((C2))
  c3((C3))
  c4((C4))
  c5((C5))

  c0---c1---c2---c3
  c2---c4---c5
~~~

また、コミットは複数のペアレントを持つこともあります。
下図では`C6`の親は`C3`と`C5`になります。
別々の **ブランチ** が`C6`で1つに **マージ** されています。

~~~mermaid
flowchart LR
  c0((C0))
  c1((C1))
  c2((C2))
  c3((C3))
  c4((C4))
  c5((C5))
  c6((C6))
  c0---c1---c2---c3---c6
  c2---c4---c5---c6
~~~

このように、Gitではスナップショットを一直線ではなく、分岐したり、融合したりします。
これが **有向非巡回グラフ(DAG)** です。

#### データモデル

Gitでは、ファイルはブロブ、フォルダはツリーとして管理されます。
疑似コードで書くと以下になります。
Gitはブロブとツリーとコミットで管理されるシンプルなデータモデルです。

~~~python
// ファイルは大量のバイト
type blob = array<type>

// フォルダは名前付きでファイルとフォルダを含む
type tree = map<string, tree | blob>

// コミットはペアレント、メタデータ、トップレベルのツリーを保持
type commit = struct {
    parent: array<commit>
    author: string
    message: string
    snapshot: tree
}
~~~

#### オブジェクトとアドレス管理

オブジェクトとは、ブロブ、ツリー、コミットのことです。

疑似コードで書くと以下になります。

~~~python
type object = blob | tree | commit
~~~

Gitではオブジェクトを、その[SHA-1 hash](https://ja.wikipedia.org/wiki/SHA-1)をキーにして管理します。

~~~python
objects = map<string, object>

def store(object):
    id = sha1(object)
    objects[id] = object

def load(id):
    return objects[id]
~~~

SHA-1ハッシュは以下のような40文字の16進数文字列になります。

~~~text
64d18464f08c1c870882ec79c86560cb367ea18e
~~~

#### リファレンス

SHA-1ハッシュは人間向きではないので、人間用にリファレンスというコミットへのポインタを用意しています。

`git`では、メインの開発ブランチの最新コミットを指す **master** や 常に「現在の作業場所」を指す **HEAD** などのリファレンスがあらかじめ用意されています。

~~~python
references = map<string, string>

def update_reference(name, id):
    references[name] = id

def read_reference(name):
    return refrences[name]

def load_reference(name_or_id):
    if name_or_id in references:
        return load(references[name_or_id])
    else:
        return load(name_or_id)
~~~

#### リポジトリ

Gitのリポジトリはオブジェクトとリファレンスのことです。

`git`コマンドは、オブジェクトの追加とリファレンスの追加・更新によって、コミットの有向非巡回グラフ(DAG)を操作します。

コマンドを使うときは、DAGにコマンドがどのような操作を行なっているかを意識しましょう。
逆に、DAGに対して特定の操作をするには、どのコマンドが必要なのかという観点でコマンドを選びましょう。


### ステージングエリアと3種類のファイルグループ

**ステージングエリア** はデータモデルとは別の概念です。
ステージングエリア は、**最新のコミット** を作成するためのインターフェイスになります。

Gitでは、**作業フォルダ** の状態がそのままスナップショットとしてコミットになりません。
コミットを作成するには、スナップショットに含めたいファイルやフォルダを、作業フォルダで選んでステージングエリアに追加します。
つまり、コミットはステージングエリアに追加されたものを対象にします。

`git`で作業する時には、この3種類のファイルグループを意識する必要があります。

- **作業フォルダ**
- **ステージングエリア**
- **最新のコミット**

3種類のファイルグループの関係は以下になります。

~~~mermaid
sequenceDiagram
    participant w as 作業フォルダ
    participant s as ステージングエリア
    participant c as 最新のコミット
    c->>w : チェックアウト<br>(checkout ブランチ)
    w->>s : 変更したファイルをステージングエリアに追加<br>(git add files)
    s->>c : ステージングエリアの内容からコミットを作成<br>(git commit)
~~~

例えば、ファイルの変更を取り消したい場合、**3種類** のどの(または、複数、全部)変更を取り消すのか明確にする必要があります。(参照: [リセットの役割 | Git - リセットコマンド詳説](https://git-scm.com/book/ja/v2/Git-%E3%81%AE%E3%81%95%E3%81%BE%E3%81%96%E3%81%BE%E3%81%AA%E3%83%84%E3%83%BC%E3%83%AB-%E3%83%AA%E3%82%BB%E3%83%83%E3%83%88%E3%82%B3%E3%83%9E%E3%83%B3%E3%83%89%E8%A9%B3%E8%AA%AC#_%E3%83%AA%E3%82%BB%E3%83%83%E3%83%88%E3%81%AE%E5%BD%B9%E5%89%B2))

`git`を使う時は、データモデルに対してだけではなく、3種類のファイルグループのどれに操作したいのかを常に意識しましょう。

### Gitのコマンドラインインターフェイス

本講義で紹介されているGitのコマンドラインインターフェイスと[Pro Git](https://git-scm.com/book/ja/v2)の説明を関連づけました。

コマンドの使い方の詳細は[Pro Git](https://git-scm.com/book/ja/v2)を確認ください。

~~~rawhtml
<table>
<tbody>
<tr><th colspan="2" align="left">基本的なもの<th>Pro Git<br>への参照
<tr><td><code>git help &lt;command&gt;</code><td>Gitコマンドについての情報を得る<td><a href="https://git-scm.com/book/ja/v2/%E4%BB%98%E9%8C%B2-C%3A-Git%E3%81%AE%E3%82%B3%E3%83%9E%E3%83%B3%E3%83%89-%E3%82%BB%E3%83%83%E3%83%88%E3%82%A2%E3%83%83%E3%83%97%E3%81%A8%E8%A8%AD%E5%AE%9A#_git_help">git help</a>
<tr><td><code>git init</code><td><code>.git</code>ディレクトリ内に保存されたデータとともに、新しいGitリポジトリを作成する<td><a href="https://git-scm.com/book/ja/v2/%E4%BB%98%E9%8C%B2-C%3A-Git%E3%81%AE%E3%82%B3%E3%83%9E%E3%83%B3%E3%83%89-%E3%83%97%E3%83%AD%E3%82%B8%E3%82%A7%E3%82%AF%E3%83%88%E3%81%AE%E5%8F%96%E5%BE%97%E3%81%A8%E4%BD%9C%E6%88%90#_git_init">git init</a>
<tr><td><code>git status</code><td>何が起っているのかを教えてくれる<td><a href="https://git-scm.com/book/ja/v2/%E4%BB%98%E9%8C%B2-C%3A-Git%E3%81%AE%E3%82%B3%E3%83%9E%E3%83%B3%E3%83%89-%E5%9F%BA%E6%9C%AC%E7%9A%84%E3%81%AA%E3%82%B9%E3%83%8A%E3%83%83%E3%83%97%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88#_git_status">git status</a>
<tr><td><code>git add &lt;filename&gt;</code><td>ステージングエリアにファイルを追加する<td><a href="https://git-scm.com/book/ja/v2/%E4%BB%98%E9%8C%B2-C%3A-Git%E3%81%AE%E3%82%B3%E3%83%9E%E3%83%B3%E3%83%89-%E5%9F%BA%E6%9C%AC%E7%9A%84%E3%81%AA%E3%82%B9%E3%83%8A%E3%83%83%E3%83%97%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88#_git_add">git add</a>
<tr><td><code>git commmit</code><td>新しいコミットを作成する<ul><li><a href="https://tbaggery.com/2008/04/19/a-note-about-git-commit-messages.html">良いコミットメッセージ</a>を書きましょう!<li><a href="https://cbea.ms/git-commit/">良いコミットメッセージ</a>を書かなければいけないさらに多くの理由</ul><td><a href="https://git-scm.com/book/ja/v2/%E4%BB%98%E9%8C%B2-C%3A-Git%E3%81%AE%E3%82%B3%E3%83%9E%E3%83%B3%E3%83%89-%E5%9F%BA%E6%9C%AC%E7%9A%84%E3%81%AA%E3%82%B9%E3%83%8A%E3%83%83%E3%83%97%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88#_git_commit">git commit</a>
<tr><td><code>git log</code><td>平らな履歴のログを示す<td><a href="https://git-scm.com/book/ja/v2/%E4%BB%98%E9%8C%B2-C%3A-Git%E3%81%AE%E3%82%B3%E3%83%9E%E3%83%B3%E3%83%89-%E3%83%96%E3%83%A9%E3%83%B3%E3%83%81%E3%81%A8%E3%83%9E%E3%83%BC%E3%82%B8#_git_log">git log</a>
<tr><td><code>git log --all --graph --decorate</code><td>有向非巡回グラフ(DAG)として履歴を可視化する<td><a href="https://git-scm.com/book/ja/v2/%E4%BB%98%E9%8C%B2-C%3A-Git%E3%81%AE%E3%82%B3%E3%83%9E%E3%83%B3%E3%83%89-%E3%83%96%E3%83%A9%E3%83%B3%E3%83%81%E3%81%A8%E3%83%9E%E3%83%BC%E3%82%B8#_git_log">git log</a>
<tr><td><code>git diff &lt;filename&gt;</code><td>ステージングエリアに関して行なった変更を表示する<td><a href="https://git-scm.com/book/ja/v2/%E4%BB%98%E9%8C%B2-C%3A-Git%E3%81%AE%E3%82%B3%E3%83%9E%E3%83%B3%E3%83%89-%E5%9F%BA%E6%9C%AC%E7%9A%84%E3%81%AA%E3%82%B9%E3%83%8A%E3%83%83%E3%83%97%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88#_git_diff">git diff</a>
<tr><td><code>git diff &lt;revision&gt; &lt;filename&gt;<td>スナップショット間の、ファイル内の差異を表示する<td><a href="https://git-scm.com/book/ja/v2/%E4%BB%98%E9%8C%B2-C%3A-Git%E3%81%AE%E3%82%B3%E3%83%9E%E3%83%B3%E3%83%89-%E5%9F%BA%E6%9C%AC%E7%9A%84%E3%81%AA%E3%82%B9%E3%83%8A%E3%83%83%E3%83%97%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88#_git_diff">git diff</a>
<tr><td><code>git checkout &lt;revision&gt;<td>HEADと現在のブランチを更新する<td><a href="https://git-scm.com/book/ja/v2/%E4%BB%98%E9%8C%B2-C%3A-Git%E3%81%AE%E3%82%B3%E3%83%9E%E3%83%B3%E3%83%89-%E3%83%96%E3%83%A9%E3%83%B3%E3%83%81%E3%81%A8%E3%83%9E%E3%83%BC%E3%82%B8#_git_checkout">git checkout</a>
<tr><td colspan="3">&nbsp;
<tr><th colspan="2" align="left">ブランチング(branching)とマージング(merging)<th>Pro Git<br>への参照
<tr><td><code>git branch</code><td>ブランチを表示する<td><a href="https://git-scm.com/book/ja/v2/%E4%BB%98%E9%8C%B2-C%3A-Git%E3%81%AE%E3%82%B3%E3%83%9E%E3%83%B3%E3%83%89-%E3%83%96%E3%83%A9%E3%83%B3%E3%83%81%E3%81%A8%E3%83%9E%E3%83%BC%E3%82%B8#_git_branch">git branch</a>
<tr><td><code>git branch &lt;name&gt;</code><td>ブランチを作る<td><a href="https://git-scm.com/book/ja/v2/%E4%BB%98%E9%8C%B2-C%3A-Git%E3%81%AE%E3%82%B3%E3%83%9E%E3%83%B3%E3%83%89-%E3%83%96%E3%83%A9%E3%83%B3%E3%83%81%E3%81%A8%E3%83%9E%E3%83%BC%E3%82%B8#_git_branch">git branch</a>
<tr><td><code>git checkout -b &lt;name&gt;</code><td>ブランチを作り、そのブランチに切り替える<ul><li><code>git branch &lt;name&gt;; git checkout &lt;name&gt;</code>と同様<td><a href="https://git-scm.com/book/ja/v2/%E4%BB%98%E9%8C%B2-C%3A-Git%E3%81%AE%E3%82%B3%E3%83%9E%E3%83%B3%E3%83%89-%E3%83%96%E3%83%A9%E3%83%B3%E3%83%81%E3%81%A8%E3%83%9E%E3%83%BC%E3%82%B8#_git_checkout">git checkout</a>
<tr><td><code>git merge &lt;revision&gt;</code><td>現在のブランチにマージする<td><a href="https://git-scm.com/book/ja/v2/%E4%BB%98%E9%8C%B2-C%3A-Git%E3%81%AE%E3%82%B3%E3%83%9E%E3%83%B3%E3%83%89-%E3%83%96%E3%83%A9%E3%83%B3%E3%83%81%E3%81%A8%E3%83%9E%E3%83%BC%E3%82%B8#_git_merge">git merge</a>
<tr><td><code>git mergetooll</code><td>マージコンフリクト(結合衝突)を解決するために便利なツールを使用する<td><a href="https://git-scm.com/book/ja/v2/%E4%BB%98%E9%8C%B2-C%3A-Git%E3%81%AE%E3%82%B3%E3%83%9E%E3%83%B3%E3%83%89-%E3%83%96%E3%83%A9%E3%83%B3%E3%83%81%E3%81%A8%E3%83%9E%E3%83%BC%E3%82%B8#_git_mergetool">git mergetool</a>
<tr><td><code>git rebase</code><td>パッチのセットを新しいベース(土台)の上にベース(作業が完了したブランチを分岐元のブランチにくっつける)する<td><a href=https://git-scm.com/book/ja/v2/%E4%BB%98%E9%8C%B2-C%3A-Git%E3%81%AE%E3%82%B3%E3%83%9E%E3%83%B3%E3%83%89-%E3%83%91%E3%83%83%E3%83%81%E3%81%AE%E9%81%A9%E7%94%A8#_git_rebase>git rebase</a>
<tr><td colspan="3">&nbsp;
<tr><th colspan="2" align="left">リモート<th>Pro Git<br>への参照
<tr><td><code>git remote</code><td>リモートをリスト化する<td><a href="https://git-scm.com/book/ja/v2/%E4%BB%98%E9%8C%B2-C%3A-Git%E3%81%AE%E3%82%B3%E3%83%9E%E3%83%B3%E3%83%89-%E3%83%97%E3%83%AD%E3%82%B8%E3%82%A7%E3%82%AF%E3%83%88%E3%81%AE%E5%85%B1%E6%9C%89%E3%81%A8%E3%82%A2%E3%83%83%E3%83%97%E3%83%87%E3%83%BC%E3%83%88#_git_remote">git remote</a>
<tr><td><code>git remote add &lt;name&gt; &lt;url&gt;<td>リモートを追加する<td><a href="https://git-scm.com/book/ja/v2/%E4%BB%98%E9%8C%B2-C%3A-Git%E3%81%AE%E3%82%B3%E3%83%9E%E3%83%B3%E3%83%89-%E3%83%97%E3%83%AD%E3%82%B8%E3%82%A7%E3%82%AF%E3%83%88%E3%81%AE%E5%85%B1%E6%9C%89%E3%81%A8%E3%82%A2%E3%83%83%E3%83%97%E3%83%87%E3%83%BC%E3%83%88#_git_remote">git remote</a>
<tr><td><code>git push &lt;remote&gt; &lt;local branch&gt;:&lt;remote branch&gt;<td>リモートにオブジェクトを送信し、リモートのリファレンスを更新する<td><a href="https://git-scm.com/book/ja/v2/%E4%BB%98%E9%8C%B2-C%3A-Git%E3%81%AE%E3%82%B3%E3%83%9E%E3%83%B3%E3%83%89-%E3%83%97%E3%83%AD%E3%82%B8%E3%82%A7%E3%82%AF%E3%83%88%E3%81%AE%E5%85%B1%E6%9C%89%E3%81%A8%E3%82%A2%E3%83%83%E3%83%97%E3%83%87%E3%83%BC%E3%83%88#_git_push">git push</a>
<tr><td><code>git branch --set-upstream-to=&lt;remote&gt;/&lt;remote branch&gt;<td>ローカルブランチとリモートブランチ間の通信を設定する<td><a href="https://git-scm.com/book/ja/v2/%E4%BB%98%E9%8C%B2-C%3A-Git%E3%81%AE%E3%82%B3%E3%83%9E%E3%83%B3%E3%83%89-%E3%83%96%E3%83%A9%E3%83%B3%E3%83%81%E3%81%A8%E3%83%9E%E3%83%BC%E3%82%B8#_git_branch">git branch</a>
<tr><td><code>git fetch</code><td>リモートからオブジェクトとリファレンスを回収する<td><a href="https://git-scm.com/book/ja/v2/%E4%BB%98%E9%8C%B2-C%3A-Git%E3%81%AE%E3%82%B3%E3%83%9E%E3%83%B3%E3%83%89-%E3%83%97%E3%83%AD%E3%82%B8%E3%82%A7%E3%82%AF%E3%83%88%E3%81%AE%E5%85%B1%E6%9C%89%E3%81%A8%E3%82%A2%E3%83%83%E3%83%97%E3%83%87%E3%83%BC%E3%83%88#_git_fetch">git fetch</a>
<tr><td><code>git pull</code><td><code>git fetch; git merge</code>と同様<td><a href="https://git-scm.com/book/ja/v2/%E4%BB%98%E9%8C%B2-C%3A-Git%E3%81%AE%E3%82%B3%E3%83%9E%E3%83%B3%E3%83%89-%E3%83%97%E3%83%AD%E3%82%B8%E3%82%A7%E3%82%AF%E3%83%88%E3%81%AE%E5%85%B1%E6%9C%89%E3%81%A8%E3%82%A2%E3%83%83%E3%83%97%E3%83%87%E3%83%BC%E3%83%88#_git_pull">git pull</a>
<tr><td><code>git clone</code><td>リモートからリポジトリをダウンロード(クローン)する<td><a href="https://git-scm.com/book/ja/v2/%E4%BB%98%E9%8C%B2-C%3A-Git%E3%81%AE%E3%82%B3%E3%83%9E%E3%83%B3%E3%83%89-%E3%83%97%E3%83%AD%E3%82%B8%E3%82%A7%E3%82%AF%E3%83%88%E3%81%AE%E5%8F%96%E5%BE%97%E3%81%A8%E4%BD%9C%E6%88%90#_git_clone">git clone</a>
<tr><td colspan="3">&nbsp;
<tr><th colspan="2" align="left">取り消し(Undo)<th>Pro Git<br>への参照
<tr><td><code>git commit --amend</code><td>コミットの内容やメッセージを編集する<td><a href="https://git-scm.com/book/ja/v2/Git-%E3%81%AE%E5%9F%BA%E6%9C%AC-%E4%BD%9C%E6%A5%AD%E3%81%AE%E3%82%84%E3%82%8A%E7%9B%B4%E3%81%97#r_undoing">作業のやり直し</a>
<tr><td><code>git reset HEAD &lt;file&gt;</code><td>ファイルのステージングを解除する<td><a href="https://git-scm.com/book/ja/v2/%E4%BB%98%E9%8C%B2-C%3A-Git%E3%81%AE%E3%82%B3%E3%83%9E%E3%83%B3%E3%83%89-%E5%9F%BA%E6%9C%AC%E7%9A%84%E3%81%AA%E3%82%B9%E3%83%8A%E3%83%83%E3%83%97%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88#_git_reset">git reset</a>
<tr><td><code>git checkout -- &lt;file&gt;</code><td>変更を破棄する<td><a href="https://git-scm.com/book/ja/v2/Git-%E3%81%AE%E3%81%95%E3%81%BE%E3%81%96%E3%81%BE%E3%81%AA%E3%83%84%E3%83%BC%E3%83%AB-%E3%83%AA%E3%82%BB%E3%83%83%E3%83%88%E3%82%B3%E3%83%9E%E3%83%B3%E3%83%89%E8%A9%B3%E8%AA%AC#_%E3%83%91%E3%82%B9%E6%8C%87%E5%AE%9A%E3%81%82%E3%82%8A%E3%81%AE%E5%A0%B4%E5%90%88">パス指定ありの場合</a>
<tr><td colspan="3">&nbsp;
<tr><th colspan="2" align="left">Git上級者向けコマンド<th>Pro Git<br>への参照
<tr><td><code>git config</code><td>Gitを<a href="https://git-scm.com/docs/git-config">もっとカスタマイズする</a><td><a href="https://git-scm.com/book/ja/v2/%E4%BB%98%E9%8C%B2-C%3A-Git%E3%81%AE%E3%82%B3%E3%83%9E%E3%83%B3%E3%83%89-%E3%82%BB%E3%83%83%E3%83%88%E3%82%A2%E3%83%83%E3%83%97%E3%81%A8%E8%A8%AD%E5%AE%9A#_git_config">git config</a>
<tr><td><code>git clone --depth=1</code><td>バージョン履歴全体を持ってこない、浅いクローン(ダウンロード)<td><a href="https://git-scm.com/book/ja/v2/%E4%BB%98%E9%8C%B2-C%3A-Git%E3%81%AE%E3%82%B3%E3%83%9E%E3%83%B3%E3%83%89-%E3%83%97%E3%83%AD%E3%82%B8%E3%82%A7%E3%82%AF%E3%83%88%E3%81%AE%E5%8F%96%E5%BE%97%E3%81%A8%E4%BD%9C%E6%88%90#_git_clone">git clone</a>
<tr><td><code>git add -p</code><td>対話的なステージング<td><a href="https://git-scm.com/book/ja/v2/Git-%E3%81%AE%E3%81%95%E3%81%BE%E3%81%96%E3%81%BE%E3%81%AA%E3%83%84%E3%83%BC%E3%83%AB-%E5%AF%BE%E8%A9%B1%E7%9A%84%E3%81%AA%E3%82%B9%E3%83%86%E3%83%BC%E3%82%B8%E3%83%B3%E3%82%B0#_%E3%83%91%E3%83%83%E3%83%81%E3%81%AE%E3%82%B9%E3%83%86%E3%83%BC%E3%82%B8">パッチのステージ</a>
<tr><td><code>git rebase -i</code><td>対話的なリベース<td><a href="https://git-scm.com/book/ja/v2/Git-%E3%81%AE%E3%81%95%E3%81%BE%E3%81%96%E3%81%BE%E3%81%AA%E3%83%84%E3%83%BC%E3%83%AB-%E6%AD%B4%E5%8F%B2%E3%81%AE%E6%9B%B8%E3%81%8D%E6%8F%9B%E3%81%88#r_changing_multiple">複数のコミットメッセージの変更</a>
<tr><td><code>git blame</code><td>どの行を誰が最後に編集したのかを表示する<td><a href="https://git-scm.com/book/ja/v2/%E4%BB%98%E9%8C%B2-C%3A-Git%E3%81%AE%E3%82%B3%E3%83%9E%E3%83%B3%E3%83%89-%E3%83%87%E3%83%90%E3%83%83%E3%82%B0#_git_blame">git blame</a>
<tr><td><code>git stash</code><td>作業ディレクトリへの変更を一時的に削除する<td><a href="https://git-scm.com/book/ja/v2/%E4%BB%98%E9%8C%B2-C%3A-Git%E3%81%AE%E3%82%B3%E3%83%9E%E3%83%B3%E3%83%89-%E3%83%96%E3%83%A9%E3%83%B3%E3%83%81%E3%81%A8%E3%83%9E%E3%83%BC%E3%82%B8#_git_stash">git stach</a>
<tr><td><code>git bisect</code><td>履歴のバイナリサーチ(二分探索)を行う(ソフトウェアの後戻り、デグレードなど)<td><a href="https://git-scm.com/book/ja/v2/%E4%BB%98%E9%8C%B2-C%3A-Git%E3%81%AE%E3%82%B3%E3%83%9E%E3%83%B3%E3%83%89-%E3%83%87%E3%83%90%E3%83%83%E3%82%B0#_git_binsect">git binsect</a>
<tr><td><code>.gitignore</code><td>無視するために、意図的に追跡しないファイルを指定する<td><a href="https://git-scm.com/book/ja/v2/Git-%E3%81%AE%E5%9F%BA%E6%9C%AC-%E5%A4%89%E6%9B%B4%E5%86%85%E5%AE%B9%E3%81%AE%E3%83%AA%E3%83%9D%E3%82%B8%E3%83%88%E3%83%AA%E3%81%B8%E3%81%AE%E8%A8%98%E9%8C%B2#r_ignoring">ファイルの無視</a>
</tbody>
</table>
~~~

### 参考

- [Version Control (Git) · the missing semester of your cs education](https://missing.csail.mit.edu/2020/version-control/)
  - [日本語版](https://missing-semester-jp.github.io/2020/version-control/)
- [Pro Git](https://git-scm.com/book/en/v2)
  - [日本語版](https://git-scm.com/book/ja/v2)
- [A Note About Git Commit Messages](https://tbaggery.com/2008/04/19/a-note-about-git-commit-messages.html)
  - [日本語版](http://keijinsonyaban.blogspot.com/2011/01/git.html)
- [How to Write a Git Commit Message](https://cbea.ms/git-commit/)
  - [日本語版](https://postd.cc/how-to-write-a-git-commit-message/)
