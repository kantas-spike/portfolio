---
title: "Hugoでテーマを利用時にサイト用のアセットも利用したい"
date: 2023-06-01T23:09:00+09:00
draft: false
tags:
- hugo
---
テーマを利用すると、サイトの`assets`ディレクトリにアクセスができなくなるため、
テーマの`assets`ディレクトリにJavaScriptを配置しなければならない。

記事専用のJavaScriptは、テーマのアセットではなくサイトのアセットに配置したい。

<!--more-->

### 解決策

[Theme Components](https://gohugo.io/hugo-modules/theme-components/)のドキュメントには以下の記述がある。

~~~markdown
- For `i18n` and `data` files, Hugo merges deeply using the translation ID and data key inside the files.
- For `static`, `layouts` (templates), and `archetypes` files, these are merged on file level. So the left-most file will be chosen.
~~~

サイトやテーマ(複数可)の、`i18n`や`data`内のファイルの内容や`static`, `layouts`, `archetypes`ディレクトリのファイルはマージされるようだ。
しかし、`assets`ディレクトリについては記載がなく、テーマの`assets`ディレクトリのみ採用されるようだ。 [^1]

テーマのアセットとサイトのアセットを併用するためには、[Hugoのマウント機能](https://gohugo.io/hugo-modules/configuration/#module-config-mounts)を利用すれば良さそうだ。

今回の場合、以下の設定によりテーマのアセットとサイトのアセットを併用可能になる。

- 記事専用のアセットは サイトの物理ディレクトリ `assets/sample`に格納
- サイトの物理ディレクトリ `assets/sample`を、仮想ディレクトリ `assets` [^2] 配下に`article`という名前でマウント [^3]

    ~~~toml
    # hugo.toml(or config.toml)
    # ...略...
    [module]
    # ...略...
    # マウント設定
    [[module.mounts]]
      source = 'assets/sample'  # サイトの物理ディレクトリ(`assets/sample`)を
      target = 'assets/article' # 仮想ディレクトリ`assets`配下に`article`という名前でマウントする
    # ...略...
    ~~~

これにより、`resources.Get "article/xxx.js"`で取得するJavaScriptファイルは、サイトの`assets`から取得できるようになる。

一方、`resources.Get "js/xxx.js"`のように取得すると、従来通りテーマの`assets`から取得できる。

### 参考

- [Theme Components | Hugo](https://gohugo.io/hugo-modules/theme-components/)
- [Configure Modules | Hugo](https://gohugo.io/hugo-modules/configuration/#module-config-mounts)

[^1]: 複数のテーマが指定された場合は`left-most`の`assets`ディレクトリが採用されるのかな...
[^2]: 仮想ディレクトリ`assets`には、テーマの物理ディレクトリ`assets`がマウントされている
[^3]: `target`に`source`と同じ`assets/sample`を指定しても良い。今回は説明のため`source`と`target`で名前を変えてみた