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
```

### 参考

- [uuid --- RFC 4122 に基づくUUID オブジェクト — Python 3.11.1 ドキュメント](https://docs.python.org/ja/3/library/uuid.html)