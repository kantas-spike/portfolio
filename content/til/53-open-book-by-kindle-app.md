---
title: "Kindle.appで指定した購入済み書籍を直接開きたい"
date: 2023-04-25T17:54:10+09:00
draft: false
tags:
- kindle
- uri_scheme
---

macOSのKindle.appで指定した購入済み書籍を直接開きたい。

<!--more-->

### 解決策

macOSのKindleアプリでは、以下の形式の**URIスキーム**が使える。(■■■部分は電子書籍のASIN、△△はページ番号)

~~~markdown
kindle://book/?action=open&asin=■■■&location=△△
~~~

例えば、[Amazon.co.jp: Python ゼロからはじめるプログラミング eBook : 三谷純: Kindleストア](https://www.amazon.co.jp/Python-%E3%82%BC%E3%83%AD%E3%81%8B%E3%82%89%E3%81%AF%E3%81%98%E3%82%81%E3%82%8B%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%9F%E3%83%B3%E3%82%B0-%E4%B8%89%E8%B0%B7%E7%B4%94-ebook/dp/B0915ZKFPB/ref=tmm_kin_swatch_0?_encoding=UTF8&qid=&sr=)を購入済みの場合、本書の**ASIN**は、**B0915ZKFPB**になる。

以下のように、**ASIN**を埋めこんだ**URIスキーム**をmacOSのターミナルで開くと、Kindleアプリが起動し、購入済みの「Python ゼロからはじめるプログラミング」が開く。(ターミナル経由でなくても、HTMLにリンクとして記載しクリックしても良い。)

~~~shell
open "kindle://book/?action=open&asin=B0915ZKFPB"
~~~

ただし、iOSでは、この**URIスキーム**を呼びだしても、Kindleアプリが起動し初期画面が表示されるだけで、ASINに該当する書籍は表示されない。

### 参考

- [URL schemes for various book readers -- some solutions and some questions : r/shortcuts](https://www.reddit.com/r/shortcuts/comments/9n08qp/url_schemes_for_various_book_readers_some/)