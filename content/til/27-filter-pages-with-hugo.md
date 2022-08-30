---
title: "Hugoで一覧に表示するページをフィルタリングしたい"
date: 2022-08-29T13:51:51+09:00
draft: false
tags:
- hugo
---

検索インデックスの元データに含めるページを選択したい。

<!--more-->

以下でページ一覧を作成すると全ページが含まれるためフィルタリングしたい。

~~~json
{
    "results": [
    {{- range $index, $page := .Site.RegularPages }}
        {{- if $index -}},{{- end }}
    {
        "href": {{ .Permalink | jsonify }},
        "title": {{ .Title | jsonify }}
    }
    {{- end }}
    ]
}
~~~

### 解決策

[where](https://gohugo.io/functions/where/)関数でページをフィルタリングする。

以下の例では、タイトル(`Title`)が "SearchIndexData" のページを除外している。

~~~json
{
    "results": [
    {{- range $index, $page := where .Site.RegularPages "Title" "!=" "SearchIndexData" }}
        {{- if $index -}},{{- end }}
    {
        "href": {{ .Permalink | jsonify }},
        "title": {{ .Title | jsonify }}
    }
    {{- end }}
    ]
}
~~~

### 参考

- [where | Hugo](https://gohugo.io/functions/where/)
