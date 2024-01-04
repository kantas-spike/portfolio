---
title: "Hugoの記事のタイトルからプレフィックスを削除したい"
date: 2023-12-21T14:33:18+09:00
draft: false
tags:
  - hugo
---

Hugoで管理しているブログの記事のファイル名には、プレフィックスとして連番の数字を付与している。

```txt
100-Hugoの記事のタイトルからプレフィックスを削除したい.md
```

`hugo new contet`でこのようなファイルから記事を作成した場合、記事のタイトルにプレフィックスが残ってしまう。

タイトルからプレフィックスを削除したい。

<!--more-->

### 解決策

`archetypes`ファイルのタイトル処理でプレフィックスを削除すれば良い。

現状、`archetypes`ファイルは以下になっている。

```go
---
title: "{{ replace .Name "-" " " | title }}"
date: {{ .Date }}
draft: true
---
```

それを、以下のように修正すれば良い。

```go
---
title: "{{ .Name | replaceRE "^[0-9]+-" "" | humanize | title }}"
date: {{ .Date }}
draft: true
---
```

以下に詳細を説明する。

#### | (Pipelines)

`|`(Pipelines)は、`Hugo`(正確には`Go`のテンプレート言語)のコマンドを繋げる仕組みである。

`|`の前後には、`値(例: "hello world")`や`メソッド(例: .Name)`、そして`関数とその引数(例: printf "%s")`を指定できる。

`|`の後に、`関数とその引数(例: printf "%s")`を指定した場合は、`|`の前を評価した結果が、`関数とその引数(例: printf "%s")`の最後の引数となる。

そのため、以下のコードは、

```go
"abcdef" | printf "%s"
```

以下と同じ意味となる。

```go
$var := "abcdef"
printf "%s" $var
```

````column{title="注意"}
Hugoの[`relpace`関数](https://gohugo.io/functions/strings/replace/)のシンタックスは以下のように、
置換対象の文字列が第1引数になる。

```go
replace INPUT OLD NEW [LIMIT]
```

そのため、置換対象の文字列をパイプでつないで渡すことはできない。

置換したい場合は、[strings.ReplaceRE | Hugo](https://gohugo.io/functions/strings/replacere/)を利用したほうが良さそう。

```go
replaceRE PATTERN REPLACEMENT INPUT [LIMIT]
```
````

### 参考

- [Pipelines ¶ # template package - text/template - Go Packages](https://pkg.go.dev/text/template#hdr-Pipelines)
- [strings.Replace | Hugo](https://gohugo.io/functions/strings/replace/)
- [strings.ReplaceRE | Hugo](https://gohugo.io/functions/strings/replacere/)
- [Archetypes | Hugo](https://gohugo.io/content-management/archetypes/)
