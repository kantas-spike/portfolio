---
title: "HugoでMathJaxによる数式を表示したい"
date: 2023-02-08T09:15:06+09:00
draft: false
useMathJax: true
tags:
- mathjax
- hugo
- render_hooks
---

ブログに数式を表示したい。

<!--more-->

### 解決方法

[MathJax](https://www.mathjax.org/)という、数式描画用のJavaScriptライブラリを使用する。

今回は、`Hugo`の`render_hooks`を利用し、以下のコードブロックで数式を表示できるようにする。

`````latex
```mathjax
(ここにMathJaxのルールに従った数式を記載)
$$ y = \sin(x) $$
$$ y = x^2 $$
$$ y = \log_2 x $$
```
`````

- 数式の表示例

```mathjax
(ここにMathJaxのルールに従った数式を記載)
$$ y = \sin(x) $$
$$ y = x^2 $$
$$ y = \log_2 x $$
```

#### render_hooksの内容

`themes/kantas/layouts/_default/_markup/render-codeblock-mathjax.html`を作成し、以下を記載する。

```html
<div class="mathjax">
    {{- .Inner | safeHTML }}
</div>
{{ .Page.Store.Set "useMathJax" true }}
```

`themes/kantas/layouts/_default/baseof.html`に、以下を記載し、`MathJax`のコードブロックを呼び出し時に、`MathJax`のライブラリを読み込むようにする。

```html
<html>
    <!-- 略 -->
    <body>
    <!-- 略 -->
        {{ if or (.Page.Store.Get "useMathJax") .Page.Params.useMathJax  }}
        <script>
            MathJax = {
              chtml: {
                matchFontHeight: false
              },
              tex: {
                inlineMath: [['$', '$']]
              }
            };
        </script>
        <script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-svg.js"></script>
        {{ end }}
    <!-- 略 -->
    </body>
</html>
```

また、ページの[Front Matter](https://gohugo.io/content-management/front-matter/)に`useMathJax: true`を記載している場合も、`MathJax`のライブラリを読み込むようにする。

これにより、コードブロックを未使用の場合でも、`$ \sin(\theta) $`と記載すれば、$ \sin(\theta) $ というようにインラインで数式を表示できる。

### 参考

- [MathJax | Beautiful math in all browsers.](https://www.mathjax.org/)
- [MathJaxによる数式表示 | 奥村晴彦先生のサイト](https://okumuralab.org/~okumura/javascript/mathjax.html)