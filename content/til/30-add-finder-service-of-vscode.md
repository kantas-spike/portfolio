---
title: "MacOSのFinderにVScodeを開く機能を追加したい"
date: 2022-11-14T09:32:58+09:00
draft: false
tags:
- vscode
- macos
---

MacOSのFinderでフォルダを選択して、右クリックですぐにVSCodeで開きたい。

<!--more-->

### 解決策

 `Automator`で、クイックアクションを作成し、`Finder.app`の`ファイルまたはフォルダ`のアクションとして、VSCodeを開くシェルスクリプトを登録する。



#### 手順

1. `Automator`を起動し、「新規書類」をクリックし、`クイックアクション`を選択する

   ![quickaction](/images/til/30-01_quickaction.png)

2. `ライブラリ`から`ユーティリティ`の`シェルスクリプトを実行`を選択し、以下を設定する

    - ワークフローが受け取る項目: `ファイルまたはフォルダ`
    - 検索対象: `Finder.app`
    - シェル: `/bin/zsh`
    - 入力の引き渡し方法: `引数として`
    - スクリプト:

        ~~~shell
        for f in "$@"
        do
            open -a 'Visual Studio Code' "$f"
        done
        ~~~

    - 設定例:

        ![shell](/images/til/30-02_shell.png)

3. 設定したクイックアクションを保存して、`Visual Studio Codeで開く`という名前を付けます

4. 以上により、`Finder.app`で、フォルダやファイルを右クリックすると、コンテキストメニューのクイックアクション内に、`Visual Studio Codeで開く`が表示されるようになります

    ![shell](/images/til/30-03_context.png)

5. `Visual Studio Codeで開く`を選択すると、該当フォルダやファイルをVSCodeで開きます

### 参考

* [Finder のコンテキストメニューに「Visual Studio Code で開く」を追加する](https://qiita.com/hiroyuki7/items/a3fcdf943c313473ecee)
