---
title: "HugoでPlotlyによるグラフを表示したい"
date: 2023-02-08T09:46:02+09:00
draft: false
usePlotly: true
tags:
- plotly
- hugo
- render_hooks
---

ブログにグラフを表示したい。

<!--more-->

### 解決策

[Plotly](https://plotly.com/javascript/)という、グラフ描画用のJavaScriptライブラリを使用する。

今回は、`Hugo`の`render_hooks`を利用し、以下のコードブロックでグラフを表示できるようにする。

`Plotly`は出力先の`<div/>`とグラフを定義したJavaScriptの2つを記載する必要がある。

そのため、不恰好だけど、`<div/>`と`<script/>`をそのままコードブロックに記載することにする。[^1] [^2]

`````html
```plotly
<div id="out1"></div>
<script>
  Plotly.newPlot("out1", [{
    x: [10, 50, 100],
    y: [30, 150, 300]
  }], {}, {responsive: true});
</script>
```
`````

- 出力例
```plotly
<div id="out1"></div>
<script>
  Plotly.newPlot("out1", [{
    x: [10, 50, 100],
    y: [30, 150, 300]
  }], {}, {responsive: true});
</script>
```

#### render_hooksの内容

`themes/kantas/layouts/_default/_markup/render-codeblock-plotly.html`を作成し、以下を記載する。

```html
<div class="plotly">
    {{- .Inner | safeHTML }}
</div>
```

`themes/kantas/layouts/_default/baseof.html`に、以下を記載し、`Plotly`のコードブロックを呼び出し時に、`Plotly`のライブラリを読み込むようにする。

```html
<html>
    <!-- 略 -->
    <head>
    <!-- 略 -->
        {{ if .Page.Params.usePlotly }}
        <script src="https://cdn.plot.ly/plotly-2.12.1.min.js"></script>
        {{ end }}
    <!-- 略 -->
    </head>
    <body/>
</html>
```

### 参考

- [Plotly Open Source Graphing Libraries](https://plotly.com/graphing-libraries/)
  - [Plotly javascript graphing library in JavaScript](https://plotly.com/javascript/)
- [Plotly | 奥村晴彦先生のサイト](https://okumuralab.org/~okumura/javascript/plotly.html)

[^1]: コードブロックがやる仕事は、実質、JavaScriptライブラリを読み込むためのフラグを立てるだけである。
[^2]: コードブロックのレンダー時に、フラグが立つため、ライブラリは`<body/>`の下部で読み込む。そのため、`Plotly`の実行は`load`イベントのタイミングに行う必要がある。