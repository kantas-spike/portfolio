---
title: "HugoでcssのURLにハッシュを付与したい"
date: 2022-09-04T04:28:24+09:00
draft: false
tags:
- hugo
---
キャッシュを回避するためにCSSやJavascriptなどのリソースファイルのURLにハッシュを付けたい。
<!--more-->

### 解決策

`resources.Fingerprint` を使う。

以下のように、リソースファイルを取得時に、`resources.Fingerprint` を適用する。

リソースファイルのURLに、リソースファイルのハッシュ値が付与される。

#### 利用例

~~~html
{{ $syntaxCss := resources.Get "css/syntax.css" | resources.Fingerprint -}}
<link rel="stylesheet" href="{{ $syntaxCss.RelPermalink }}">
~~~

#### 実行結果

~~~html
<link rel="stylesheet" href="http://localhost:1313/portfolio/css/syntax.d59352fe2c71602c0598c94b3cdaaef7d6553d94438605aefc2b925940f21d6a.css">
~~~

#### ハッシュ関数の変更方法

`resources.Fingerprint`で使用されるハッシュ関数はデフォルトが`sha384`である。引数に指定することで、他に`sha512`と`md5`に変更できる。

~~~html
{{ $syntaxCss := resources.Get "css/syntax.css" | resources.Fingerprint "md5" -}}
<link rel="stylesheet" href="{{ $syntaxCss.RelPermalink }}">
~~~

### 参考

- [Fingerprinting and SRI | Hugo](https://gohugo.io/hugo-pipes/fingerprint/)