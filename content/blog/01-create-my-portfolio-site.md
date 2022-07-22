---
title: "ポートフォリオサイトを作成する"
date: 2022-07-15T06:13:30+09:00
year: "2022"
month: "2022/07"
draft: false
tags:
- html
- hugo
- hacking
---

[Hugo](https://gohugo.io/)と[GitHub Pages](https://gohugo.io/hosting-and-deployment/hosting-on-github/)を使って、プログラミングの学習記録サイトを作りたいと思います。

<!--more-->

### なぜ記録するのか？

[ハッカーになろう](https://cruel.org/freeware/hacker.html#skills3)([How To Became A Hacker](http://www.catb.org/~esr/faqs/hacker-howto.html#skills3))で「3. World Wide Web を使う方法を学び、HTML を書くこと。」は必須スキルと紹介されています。

このスキルを身に付けるために、プログラミングの学習記録をつけたいと思います。

### 何を記録するのか？

[ハッキングの学び方](https://github.com/kantas-spike/how-to-learn-hacking-japanese/blob/main/how-to-learn-hacking.md)([How To Learn Hacking](http://www.catb.org/~esr/faqs/hacking-howto.html))で、ハッキングの学習段階が紹介されています。

この学習方法でプログラミングを学んでいきます。

~~~mermaid
flowchart LR
    subgraph one["第一段階"]
        direction LR
        s1-1["言語・ツールの学習"]<-->s1-2["小さなプログラム作成"]
    end
    subgraph two["第二段階"]
        s2["デザインセンスを磨く<br>(インクリメンタルハッキングサイクル)"]
    end
    subgraph three["第三段階"]
        s3["オリジナルプロジェクト開発"]
    end
    one<-->two
    two-->three
~~~

本サイトでは、学んだ事や成果物を以下のルールで記録します。

~~~mermaid
    flowchart LR;
        s1["『言語・ツールの学習』"];
        s2["『小さなプログラム作成』"];
        s3["デザインセンスを磨く<br>(インクリメンタルハッキングサイクル)"]
        o1["TIL"];
        o2["Blog"];
        o3["My Tools"];
        o4["IHC"];
        s1-- "学んだ事(メモ)" -->o1;
        s1-- "学んだ事のまとめ" -->o2;
        s2-->o3;
        s3-->o4;
~~~

### どうやって記録するのか？

スタティックサイトジェネレータである[Hugo](https://gohugo.io/)を使ってサイトを作成します。
スタティックサイトジェネレータとは、静的コンテンツの作成に特化した手軽にWebサイトを構築できるツールです。

今回はあらかじめ用意した[プログラミング学習記録用の Hugo Theme](https://github.com/kantas-spike/kantas-theme)をベースにサイトを作成します。

#### サイトの作成

1. Hugoでサイトを作成
2. [プログラミング学習記録用の Hugo Theme](https://github.com/kantas-spike/kantas-theme)のインストール手順に従いインストールおよびセットアップ
3. 設定ファイル(`config.toml`)をカスタマイズ(`title`や`baseURL`、`publishDir`などを変更してください) (参考: [作成例](https://github.com/kantas-spike/portfolio))

#### 次に、動作確認します

ターミナルで以下を実行します。

~~~shell
hugo server --disableFastRender --ignoreCache --cleanDestinationDir
~~~

[http://localhost:1313/](http://localhost:1313/)にアクセスするとサイトを確認できます。

注意: `baseURL`に'https://kantas-spike.github.io/portfolio/'のようなサブディレクトリを指定した場合は、[http://localhost:1313/portfolio/](http://localhost:1313/portfolio/)にアクセスする必要があります。

[LiveReload](https://gohugo.io/getting-started/usage/#livereload)が有効になっているので、設定やページを変更した場合、直ちにブラウザ上に反映されます。

動作確認を終了するには、ターミナルで `Ctrl+C` を押します。

#### 記事を追加します

`Blog`に記事を追加する場合は、以下を実行します。

~~~shell
hugo new blog/create-my-portfolio-site.md
~~~

すると、`content/blog/create-my-portfollio-site.md` が作成されます。
このファイルを編集して記事を書きましょう。

また、コマンドは以下のルールになっています。
本サイトでは、`セクション名`部分に`blog`、`til`、`mytools`、`ihc`を指定可能です。

~~~shell
hugo new セクション名/記事名.md
~~~

記事の内容が確認できたら、コミットしましょう。

注意: 記事ファイルのフロントマター部分の`draft`がデフォルトで`true`になっています。
`hugo`は、ドラフト状態のファイルを出力しないため、記事が書けたら、`draft`行を削除するか、`draft: false`に変更しましょう。

~~~yaml
draft: false # デフォルトはtrue
~~~

#### 最後に、サイトを生成します

ターミナルで以下を実行すると、`publishDir`で指定したフォルダにサイトが出力されます。

`GitHub Pages`の利用する場合は、あらかじめ `publishDir = "docs"` に変更してください。

~~~shell
hugo --cleanDestinationDir
~~~

### どこに公開するのか？

無料で簡単に始められる[GitHub Pages](https://gohugo.io/hosting-and-deployment/hosting-on-github/) を使ってサイトを公開します。
(参考: `Hugo`の[Hosting & Deployment](https://gohugo.io/hosting-and-deployment/)ページに、各種ホスティングサービスへのデプロイ方法が記載されています。)

[GitHub Pagesの種類](https://gohugo.io/hosting-and-deployment/hosting-on-github/#types-of-github-pages)にあるように、
`GitHub Pages`には以下の2種類あります。

1. ユーザー・組織ページ(URL: `<https://<USERNAME|ORGANIZATION>.github.io/>`)
2. プロジェクトページ(URL: `https://<USERNAME|ORGANIZATION>.github.io/<PROJECT>/`)

今回は、「2. プロジェクトページ」を採用します。

#### GitHub リポジトリの準備します

GitHub リポジトリを作成し、カスタマイズした[ポートフォリオサイトの雛形](https://github.com/kantas-spike/portfolio/tree/site_skelton)をプッシュします。
(ただし、[kantas-spike/portfolio](https://github.com/kantas-spike/portfolio)をフォークした人はリポジトリの作成は不要です。)

#### `docs`をプッシュします

さらに、以下のコマンドによりサイトを生成し、 `docs` をリポジトリにプッシュします。

~~~shell
hugo --cleanDestinationDir
~~~

#### リポジトリの`GitHub Pages` を設定し、サイトを公開する

GitHubリポジトリページの`Settings`ページを表示します。
`Pages`を選択し、`Source`に公開するサイトのブランチ名とフォルダ名を指定します。

今回は、Branch: `main`、フォルダ: `/docs`を選択します。

すると、以下のように公開サイトのURLが表示されます。

~~~markdown
Your site is published at https://kantas-spike.github.io/portfolio/
~~~

このURLが、あなたのポートフォリオサイトになります。

以上で、サイトが公開されました。URLにアクセスできるまに少し時間(数分ぐらい？)がかかる場合があります。

### まとめ

[Hugo](https://gohugo.io/)と[GitHub Pages](https://gohugo.io/hosting-and-deployment/hosting-on-github/)を使えば、手軽にサイトを作成できます。

プログラミングの学習記録を継続的に更新していきましょう。

また、今後、ポートフォリオサイト自体に機能やレイアウト、デザインを変更したくなると思います。
ポートフォリオサイトのテーマをインクリメンタルハッキングサイクルの対象にすると良さそうです。
