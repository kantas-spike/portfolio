---
title: "gitのsubmoduleを削除したい"
date: 2023-10-26T16:29:46+09:00
draft: false
tags:
  - git
  - hugo
---

Hugoテーマのモジュール化に伴ない、不要になったgitのsubmoduleを削除したい。

<!--more-->

### 解決策

`git submodule deinit`で削除する。

```shell
git submodule deinit -f 追加したサブモジュール
git rm -f 追加したサブモジュール
rm -rf .git/modules/追加したサブモジュール
```

### 参考

- [[git] submoduleの削除、再追加について #Git - Qiita](https://qiita.com/k_yamashita/items/040c04f8798d2384806e)
