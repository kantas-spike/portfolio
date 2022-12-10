---
title: VSCodeでターミナルとコードの間を行き来する
date: 2022-12-09T03:28:37+09:00
draft: false
tags:
- vscode
---
`vscode`を操作中に、ターミナルとコードの行き来をショートカットで行いたい

<!--more-->

### 解決策

実際は、`管理`>`キーボードショートカット`で以下を設定する

#### 1. ターミナル外で`CTRL+Shift+@`をタイプするとターミナルへ移動

- コマンド: `表示: アクティブなエディター グループにフォーカス`(`workbench.action.focusActiveEditorGroup`)
- キーバインド: `CTRL+Shift+@`
- いつ： `terminalFocus`
- (設定結果)

    ~~~json
    {
    "key": "ctrl+shift+[BracketLeft]",
    "command": "workbench.action.focusActiveEditorGroup",
    "when": "terminalFocus"
    }
    ~~~

#### 2. ターミナル内で`CTRL+Shift+@`をタイプするとアクティブエディタへ移動

- コマンド: `ターミナル: ターミナルにフォーカス`(`workbench.action.terminal.focus`)
- キーバインド: `CTRL+Shift+@`
- いつ： `!terminalFocus`
- (設定結果)

    ~~~json
    {
    "key": "ctrl+shift+[BracketLeft]",
    "command": "workbench.action.terminal.focus",
    "when": "!terminalFocus"
    }
    ~~~

### 参考

- [How to switch the cursor between terminal and code in VSCode?](https://superuser.com/questions/1270103/how-to-switch-the-cursor-between-terminal-and-code-in-vscode)
