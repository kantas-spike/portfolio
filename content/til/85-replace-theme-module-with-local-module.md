---
title: "Hugoのテーマモジュールをローカルのモジュールに置き換えたい"
date: 2023-10-27T10:20:16+09:00
draft: false
tags:
  - hugo
---

GitHubで管理している自作のHugoテーマをモジュール化した。

しかし、Hugoテーマを修正するたびに、毎回プッシュしモジュールをアップデートする必要があり面倒である。

もっと、手軽にHugoテーマを改修できるようにしたい。

<!--more-->

### 解決策

Hugoモジュールは、[Go言語のモジュール機能](https://go.dev/doc/modules/gomod-ref)を利用しており、
`go.mod`ファイル内に、`replace`ディレクティブを記載することにより、モジュールをローカルパスに置き換えることができる。

```go.mod
replace module-path [module-version] => replacement-path [replacement-version]
```

以下を例とした場合、

- サイト側:
  - ローカルで管理しているHugoサイト モジュール名: `myblog`
    - `/Users/kanta/blog`
- モジュール側:
  - GitHub上のテーマモジュール: モジュール名: `github.com/kantas-spike/kantas-theme`
    - [https://github.com/kantas-spike/kantas-theme](https://github.com/kantas-spike/kantas-theme)
  - ローカルファイルシステムに`github.com/kantas-spike/kantas-theme`をクローン
    - `/Users/kanta/hacking/products/002_kantas_theme`
- やりたい事:
  - サイト側で、参照しているテーマモジュールを、ローカルシステム上のテーマモジュールに切り替える

Hugoサイトで、Hugoテーマをインポートしているため、`/Users/kanta/blog/go.mod`は以下のようになる。

```go.mod
module myblog

go 1.18

require github.com/kantas-spike/kantas-theme v0.0.0-20230928195921-52393738eda2 // indirect
```

Hugoテーマの参照先を、GitHub上でなはなく、ローカルファイルシステムに切り替えるために、`go.mod`を以下に修正する。

```go.mod
module myblog

go 1.18

require github.com/kantas-spike/kantas-theme v0.0.0-20230928195921-52393738eda2 // indirect
// replaceによりモジュールの参照先を切り替える
replace github.com/kantas-spike/kantas-theme => /Users/kanta/hacking/products/002_kantas_theme
```

この状態でHugoサーバーをリスタートすれば、ローカルファイルシステム上のHugoテーマの修正が、
リアルタイムでブログに反映される。

これにより、Hugoサーバーでテーマの修正を確認し、修正が完了したところで、
GitHubにプッシュするというサイクルでテーマを開発できるようになる。

### 参考

- [Use Hugo Modules | Hugo](https://gohugo.io/hugo-modules/use-modules/#make-and-test-changes-in-a-module)
- [go.mod file reference - The Go Programming Language](https://go.dev/doc/modules/gomod-ref)
  - [go.mod file reference - The Go Programming Language](https://go.dev/doc/modules/gomod-ref#replace)
- [【Go】go.modのreplaceでローカルのモジュールを参照する : ビジネスとIT活用に役立つ情報（株式会社アーティス）](https://www.asobou.co.jp/blog/web/go-mod-replace)
