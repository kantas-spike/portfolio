---
title: "Hugoで記事を更新日時でソートしたい"
date: 2023-05-29T13:17:25+09:00
draft: false
tags:
- hugo
---

Hugoで記事を更新日時でソートしたい。

ただし、記事には更新日時(`lastmod`)を持たないもの(作成日時＝更新日時)もある。

<!--more-->

Hugoでは、以下のように記事一覧を表示した場合、デフォルトで、[Weight > Date > LinkTitle > FilePath](https://gohugo.io/templates/lists/#default-weight--date--linktitle--filepath)の順にソートするようだ。

~~~html
<ul>
    {{ range .Pages }}
        <li>
            <h1><a href="{{ .Permalink }}">{{ .Title }}</a></h1>
            <time>{{ .Date.Format "Mon, Jan 2, 2006" }}</time>
        </li>
    {{ end }}
</ul>
~~~

これを記事の更新日時でソートしたい。

### 解決策

[.ByLastmod](https://gohugo.io/templates/lists/#by-last-modified-date)と[.Reverse](https://gohugo.io/templates/lists/#reverse-order)を組合せることで実現する。

`.Pages.ByLastmod.Reverse`により、ページ一覧を更新日時の逆順でソートする。

- 例

    ~~~html
    <ul>
        {{ range .Pages.ByLastmod.Reverse }}
            <li>
                <h1><a href="{{ .Permalink }}">{{ .Title }}</a></h1>
                <time>{{ .Lastmod.Format "Mon, Jan 2, 2006" }}</time>
            </li>
        {{ end }}
    </ul>
    ~~~

また、[Hugoのfronmatterの日付関連のデフォルト設定](https://gohugo.io/getting-started/configuration/#configure-dates)では、更新日時を意味する`lastmode`は以下のように定義されている。

~~~toml
[frontmatter]
  # ...略...
  lastmod = [':git', 'lastmod', 'date', 'publishDate']
  # ...略...
~~~

これは、ページ変数`.Lastmod`を参照した時に採用される値の優先度であり、各設定の意味は以下になるようだ。

- `:git`: Gitで管理されている該当ページの最新リビジョンの日付。ただし、`--enableGitInfo`オプションを付けるか、設定で`enableGitInfo = true`を設定する必要がある
- `lastmod`: frontmatterの`lastmod`項目の日付
- `date`: frontmatterの`date`項目の日付
- `publishDate`: frontmatterの`publishDate`項目の日付

私のブログでは、`GitInfo`を有効にしていないため、`.Lastmod`の値は、frontmatterに`lastmod`があればその日付が採用され、なければ`date`が採用される。
これの設定は、`記事には更新日時を持たないもの(作成日時＝更新日時)もある`という用途にもあっている。

### 参考

- [Lists of Content in Hugo | Hugo](https://gohugo.io/templates/lists/#order-content)
- [Configure Hugo | Hugo](https://gohugo.io/getting-started/configuration/#configure-dates)
