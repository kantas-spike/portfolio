---
title: "Hugoのpartialテンプレートに複数の引数を渡したい"
date: 2023-09-29T09:32:30+09:00
draft: false
tags:
- hugo
---

Hugoのpartialテンプレートに、コンテキスト(`.`)以外にも、追加の情報を渡したい。

<!--more-->

### 解決策

`dict`で作成したマップを引数で渡す。

~~~go
{{ partial "icon" (dict "Name" "bell" "ClassName" "text-2xl") }}
~~~

もし、partialテンプレートで、コンテキスト`.`または、マップを引数として取得したい場合は、
テンプレート側で`reflect.IsMap`により、引数の方をチェックして、処理を分岐させる。

~~~go
/* layouts/partials/icon.html */
{{- $icon_name := "" -}}
{{- $class_name := "text-xl" -}}
{{- if reflect.IsMap . -}}
    {{- $icon_name = .Name -}}
    {{- $class_name = .ClassName -}}
{{- else -}}
    {{- $icon_name = . -}}
{{- end -}}
/* ...略... */
~~~

この場合は、以下の呼び出し方も可能となる。

~~~go
{{ partial "icon" "bell" }}
~~~

### 参考

- [Partial templates | Hugo](https://gohugo.io/templates/partials/)
- [dict | Hugo](https://gohugo.io/functions/dict/)
- [reflect.IsMap | Hugo](https://gohugo.io/functions/reflect.ismap/)