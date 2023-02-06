---
title: "Spotlightからシェルスクリプトを呼び出す"
date: 2023-02-07T00:30:31+09:00
draft: false
tags:
- macos
- spotlight
---

macOSのSpotlightからシェルスクリプトを呼び出したい。

<!--more-->

### 解決策

シェルスクリプトの拡張子を`.command`にすると、Spotlightから実行できる。

ただし、`システム設定`-`SiriとSpotlight`で`Spotlight`の`検索結果`内の`Developer`をチェックする必要がある。

また、`Terminal.app`経由でシェルスクリプトが実行されるため、デフォルトの設定の場合、実行終了後もターミナルが`[Process Completed]`を表示したまま残ってします。
これを回避するためには、`Terminal.app`のシェル設定で、`シェルの終了時`を`シェルが正常に終了した場合は閉じる`に変更する必要がある。

#### 例: ~/blogフォルダをVsCodeで開く場合

`~/bin/blog.command`を作成し、実行権限をつける。

```shell
% cat ~/bin/blog.command
code ~/blog
% chmod u+x ~/bin/blog.command
```

Spotlightで、`blog.command`を入力し、選択するとVsCodeが起動し、`~/blog`フォルダが開かれる。

### 参考

- [Launch websites from Spotlight using Terminal commands in macOS / Michael Lee](https://michaelsoolee.com/launch-websites-spotlight-macos/)