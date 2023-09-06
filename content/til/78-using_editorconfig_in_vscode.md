---
title: "エディタ基本設定をリポジトリに登録したい"
date: 2023-09-07T01:05:07+09:00
draft: false
tags:
- vscode
---
タブサイズや行内文字数などのエディタ基本設定をリポジトリに登録したい。

ただし、リポジトリの利用者が使用するエディタは不明なため、なるべく汎用的な方法でエディタ基本設定を管理したい。

<!--more-->

### 解決策

`.editorconfig`を利用すると、各種環境で利用可能なエディタ設定を記述できる。
具体的な記述方法は、[EditorConfig](https://editorconfig.org/)にある。

今回は、参考として、[facebook/react プロジェクト](https://github.com/facebook/react/blob/main/.editorconfig)の`.editorconfig`を紹介する。

~~~.editorconfig
# https://editorconfig.org
root = true

[*]
charset = utf-8
end_of_line = lf
indent_size = 2
indent_style = space
insert_final_newline = true
max_line_length = 80
trim_trailing_whitespace = true

[*.md]
max_line_length = 0
trim_trailing_whitespace = false

[COMMIT_EDITMSG]
max_line_length = 0
~~~

[多くのエディタ](https://editorconfig.org/#pre-installed)が標準で`.editorconfig`に対応しているが、
`vscode`の場合、`.editorconfig`を利用するためには別途プラグインが必要になる。

そのため、[EditorConfig](https://editorconfig.org/#download)の本家が公開しているプラグインである、[EditorConfig for VS Code](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)を導入する必要がある。

### 参考

- [EditorConfig](https://editorconfig.org/)
  - [No Plugin Necessary | EditorConfig](https://editorconfig.org/#pre-installed)
  - [Download a Plugin| EditorConfig](https://editorconfig.org/#download)
- [vscodeにeditorconfigを設定する備忘録 - Qiita](https://qiita.com/taijusanagi/items/f4edee28dd00fdd9c267)
- [EditorConfig for VS Code - Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)
