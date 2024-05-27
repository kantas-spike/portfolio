---
title: "PythonでユニークなIDを生成する"
date: 2023-01-18T13:19:05+09:00
draft: false
tags:
  - python
  - uuid
---

PythonでユニークなIDを生成したい。

<!--more-->

### 解決策

[uuid](https://docs.python.org/ja/3/library/uuid.html)を利用すると、ユニークなIDを生成できる。

```python
import uuid

# ランダムな UUID を生成
print(str(uuid.uuid4()))

# => bddd6fbe-c4eb-4bc6-9ea5-5511bde61293
```

### まとめ

登場したAPIは以下になる。

| モジュール/パッケージ | API   | 説明                     |
| --------------------- | ----- | ------------------------ |
| uuid                  | uuid4 | ランダムなUUIDを生成する |

登場した用語は以下になる。

| 分類               | 用語      | 説明                                                                                                                                                                      |
| ------------------ | --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| コンピューター用語 | UUID [^1] | ソフトウェア上でオブジェクトを一意に識別するための識別子。128ビットの数値。16進法による **xxxxxxxx-xxxx-xxxx-Nxxx-xxxxxxxxxxxx** のような文字列表現が使われることが多い。 |

### 参考

- [uuid --- RFC 4122 に基づくUUID オブジェクト — Python 3.11.1 ドキュメント](https://docs.python.org/ja/3/library/uuid.html)

[^1]: [UUID - Wikipedia](https://ja.wikipedia.org/wiki/UUID)
