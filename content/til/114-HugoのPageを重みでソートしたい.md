---
title: "Hugoの Pageを重みでソートしたい"
date: 2024-07-23T23:57:26+09:00
draft: false
tags:
  - hugo
---

Hugoで作成したブログで、作成日時の新しい順に記事一覧を表示している。
この記事一覧で一部記事を常に上位に表示したい。

<!--more-->

### 解決策

`Page` オブジェクトの `Weight` にページの重みを設定しておき [^1] 、
作成日時でソート済みの記事一覧をさらに`Weight`の大きい順にソートすれば良い。

#### 例: Weigthで再ソートした記事一覧

```go
<div>
{{ range (sort .Site.RegularPages.ByDate.Reverse "Weight" "desc" ) }}
  <div><!-- 略 --></div>
{{ end }}
</div>
```

### 参考

- [Weight | Hugo](https://gohugo.io/methods/page/weight/)
- [collections.Sort | Hugo](https://gohugo.io/functions/collections/sort/)

[^1]: `Page` オブジェクトの `Weight`は、フロントマターの`weight`により設定できる。
