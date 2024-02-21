---
title: "Homebrewで古いバージョンのパッケージをインストールしたい"
date: 2024-02-22T00:40:46+09:00
draft: false
tags:
  - homebrew
  - tool
---

[Homebrew](https://brew.sh/)で、最新版の[hugo](https://github.com/gohugoio/hugo)をインストールしたら、ブログの生成に失敗した。古いバージョンに戻したい。

<!--more-->

以下のコマンドで、`hugo v0.123.1`をインストールした。

```shell
brew upgrade hugo
```

しかし、このバージョンでは、私のブログは生成時にエラーになる。
動作確認ができている`hugo`の`v0.122.0`にバージョンを戻したい。

#### `brew`のバージョン

```shell
$ brew -v
Homebrew 4.2.9-63-g6a9c9c0
```

### 解決策

`brew`には [Taps (Third-Party Repositories)](https://docs.brew.sh/Taps)という、独自の`Formula` [^1] を管理するためのリポジトリを追加できる。
新たな`tap`を作成し、古い`hugo`パッケージの`Formula`をダウンロードして管理すれば良い。[^2]

手順は以下となる。

1. エラーが発生する最新の`hugo v0.123.1`をアンインストール

   ```shell
   brew uninstall hugo
   ```

1. `kanta/olds`という名前の`tap`を以下のコマンドで作成

   ```shell
   brew tap-new kanta/olds
   ```

1. 作成された`tap`(`kanta/olds`)のパスを確認

   ```shell
   $ brew tap-info kanta/olds
   kanta/olds: no commands/casks/formulae, private
   /usr/local/Homebrew/Library/Taps/kanta/homebrew-olds (33 files, 34.2KB)
   From: N/A
   ```

1. `tap`(`kanta/olds`)の`Formula`ディレクトリに移動

   ```shell
   $ cd /usr/local/Homebrew/Library/Taps/kanta/homebrew-olds
   $ ls
   Formula         README.md
   $ cd Formula
   ```

1. `hugo v0.122.0`の`Formula`をダウンロード [^3]

   ```shell
   $ pwd
   /usr/local/Homebrew/Library/Taps/kanta/homebrew-olds/Formula
   $ curl -OL https://github.com/Homebrew/homebrew-core/raw/2fd8dba871a6a5412fa7c00b12ac99b5738cd199/Formula/h/hugo.rb
   $ ls
   hugo.rb
   ```

1. `brew search hugo`で追加した`Formula`を確認

   ```shell
   $ brew search hugo --formula
   ==> Formulae
   hugo                    kanta/olds/hugo # <= 追加されている!!
   ```

1. `hugo v0.122.0`をインストール

   ```shell
   $ brew install kanta/olds/hugo
   $ hugo version
   hugo v0.122.0-b9a03bd59d5f71a529acb3e33f995e0ef332b3aa+extended darwin/amd64 BuildDate=2024-01-26T15:54:24Z VendorInfo=brew
   ```

### 参考

- [Taps (Third-Party Repositories) — Homebrew Documentation](https://docs.brew.sh/Taps)
- [Homebrew で Formula にない任意のバージョンのパッケージをインストールする - ひよこまめ](https://blog.chick-p.work/til/brew-install-specify-version)
- [History for Formula/h/hugo.rb - Homebrew/homebrew-core](https://github.com/Homebrew/homebrew-core/commits/1c4eb0bb51c67a74a1de9861ae6c837afbbb8406/Formula/h/hugo.rb)

[^1]: `Formula`とはパッケージのインストール手順を記載した`brew`専用のスクリプトファイル
[^2]: `Homebrew`のv4以前であれば`brew extract`コマンドで`tap`に指定したバージョン`Formula`を作成できるようだ。しかし、v4以降ではできないため、`curl`を使って手動で`Formula`をダウンロードする方針とする。
[^3]: [History for Formula/h/hugo.rb - Homebrew/homebrew-core](https://github.com/Homebrew/homebrew-core/commits/1c4eb0bb51c67a74a1de9861ae6c837afbbb8406/Formula/h/hugo.rb)から該当バージョンのURLを取得する
