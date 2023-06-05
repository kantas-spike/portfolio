---
title: "Hugoのテーマで使用するパッケージは、テーマ内で管理したい"
date: 2023-06-02T06:20:26+09:00
draft: false
tags:
- hugo
---

Hugoのthemeで使用するJavascriptのパッケージは、`theme/THEME_NAME/package.json` で管理したい。

<!--more-->

### 解決策

Hugoのthemeで使用するJavascriptのパッケージを、themeディレクトリ内の`package.json`(例: `site/theme/THEME_NAME/package.json`)で管理した場合、
[js.Build](https://gohugo.io/hugo-pipes/js/)でエラーが発生する。

これは、[js.Build](https://gohugo.io/hugo-pipes/js/)がサイトの`package.json`(例: `site/package.json`)を参照するためのようだ。

Hugoでは、この対策として[hugo mod npm pack](https://gohugo.io/commands/hugo_mod_npm_pack/)が用意されている。

#### 仕組み

[hugo mod npm pack](https://gohugo.io/commands/hugo_mod_npm_pack/)を実行すると以下を行う。

1. プロジェクト(サイトやテーマ)に`package.hugo.json`が存在しなければ、`package.json`をコピーして`package.hugo.json`を作成
2. プロジェクト配下のディレクトリにある`package.hugo.json`とプロジェクト自身の`package.hugo.json`に定義されたパッケージの依存関係情報を収集
3. プロジェクトの`package.json`のパッケージの依存関係情報を、**2.で取得したパッケージ依存関係情報**で上書き

これにより、プロジェクトに関連するパッケージの依存関係情報をプロジェクトの`package.json`に集約できる。

あとは、以下を実行すれば関係する全てのパッケージをインストールでき、プロジェクトをエラーなく利用できるようになる。

~~~shell
npm install
~~~

#### 使い方

1つテーマ(`themes/kantas`)と関連するサイトを例に、使い方を説明する。

1. テーマのディレクトリに移動し、`package.json`をコピーして`package.hugo.json`を作成

    ~~~shell
    cd themes/kantas
    cp package.json package.hugo.json
    ~~~

2. サイトのルートディレクトリに戻り、`hugo mod npm pack`を実行し、`package.hugo.json`を作成し、`package.json`を更新する

    ~~~shell
    cd ../..
    hugo mod npm pack
    ~~~

#### テーマ側のパッケージを変更する場合

例えばテーマに新しいパッケージを追加する場合は以下を実行する。

1. テーマのディレクトリに移動し、新たなパッケージをインストール

    ~~~shell
    cd themes/kantas
    npm install xxx
    ~~~

2. 更新された`package.json`をコピーして`package.hugo.json`を上書きする [^1]

    ~~~shell
    cp package.json package.hugo.json
    ~~~

3. サイトのルートディレクトリに戻り、`hugo mod npm pack`を実行し、サイトの`package.json`を更新する。

    ~~~shell
    cd ../..
    hugo mod npm pack
    ~~~

4. サイトに新たなパッケージをインストールする。

    ~~~shell
    npm install
    ~~~

### 感想

複雑だ。

### 参考

- [js.Build | Hugo](https://gohugo.io/hugo-pipes/js/#include-dependencies-in-packagejson--node_modules)
- [hugo mod npm pack | Hugo](https://gohugo.io/commands/hugo_mod_npm_pack/)
- [hugo/package_builder.go at master · gohugoio/hugo · GitHub](https://github.com/gohugoio/hugo/blob/master/modules/npm/package_builder.go)

[^1]: テーマの`package.hugo.json`は`package.json`のシンボリックリンクにするのが良さそうだが、Hugoのファイルシステムはシンボリックリンクに未対応