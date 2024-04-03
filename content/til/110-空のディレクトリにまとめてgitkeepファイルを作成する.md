---
title: "空のディレクトリにまとめて.gitkeepファイルを作成したい"
date: 2024-03-29T15:27:46+09:00
draft: false
tags:
  - git
  - shell
---

複数存在する空のディレクトリにまとめて`.gitkeep`ファイルを作成したい。

<!--more-->

### 解決策

以下のコマンドで空のディレクトリをリストアップできる。

```shell
find . -type d -empty
```

これを使って、`for`でまとめて`.gitkeep`を作成する。

```shell
for i in $(find . -type d -empty)
do
  touch $i/.gitkeep
done
```

### 参照

- [How to list empty folders in linux - Stack Overflow](https://stackoverflow.com/questions/9417967/how-to-list-empty-folders-in-linux/9418016#9418016)
