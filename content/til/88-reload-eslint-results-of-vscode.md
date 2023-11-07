---
title: "vscodeでeslintの結果をリロードしたい"
date: 2023-11-05T11:29:23+09:00
draft: false
tags:
  - javascript
  - typescript
  - eslint
  - vscode
---

vscodeで`JavaScript`や`TypeScript`のコーディング中に、
`問題`パネルに表示される`eslint`の結果が上手く更新されない場合がある。

`問題`パネルの`eslint`の結果をリロードしたい。

<!--more-->

### 解決策

vscodeのコマンドパレットで以下を実行する。

`ESLint: Restart ESLint Server`

すると、`問題`パネルの内容が一旦クリアされ、
`eslint`を再実行した結果が`問題`パネルに反映される。

### 参考

- [Visual Studio Codeの静的解析を再実行する Restart TS server / Restart ESLint Server - Motomichi Works Blog](https://motomichi-works.hatenablog.com/entry/2022/02/12/181913)
