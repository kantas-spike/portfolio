---
title: "Pythonで外部プロセスに標準入力から情報を渡したい"
date: 2024-01-16T12:58:19+09:00
draft: false
tags:
  - python
---

Pythonで外部プロセスを実行し、その外部プロセスの標準入力を使って、Pythonから情報を与えたい。

<!--more-->

例えば、以下のように外部プロセス`cat -`に対して、`text.txt`の内容をPython経由で、`cat -`に渡したい。

```shell
cat - < test.txt
```

### 解決策

[subprocess.Popen()](https://docs.python.org/ja/3/library/subprocess.html#popen-constructor)で外部プロセスを起動し、[Popen.communicate(input)](https://docs.python.org/ja/3/library/subprocess.html#subprocess.Popen.communicate)を使って、外部プロセスの標準入力に値を渡せば良い。

以下は、`cat -`に対して、標準入力から`test1\ntest2\ntest3`を渡している。

```python
# spike.py
import subprocess


def main():
    proc = subprocess.Popen(
        "cat - ",
        shell=True,
        stdin=subprocess.PIPE,
        stdout=subprocess.PIPE,
        stderr=subprocess.PIPE,
        text=True,
    )

    stdout, stderr = proc.communicate("test1\ntest2\ntest3")
    if stdout:
        print("stdout:")
        print(stdout)
    if stderr:
        print("stderr:")
        print(stderr)


if __name__ == "__main__":
    main()
```

実行結果は以下となる。

```shell
$ python spike.py
stdout:
test1
test2
test3
```

### 参考

- [Popen コンストラクター このモジュー... # subprocess --- サブプロセス管理 — Python 3.12.1 ドキュメント](https://docs.python.org/ja/3/library/subprocess.html#popen-constructor)
- [Popen.communicate(inp... # subprocess --- サブプロセス管理 — Python 3.12.1 ドキュメント](https://docs.python.org/ja/3/library/subprocess.html#subprocess.Popen.communicate)
- [Pythonで外部プロセスと標準入出力で通信する #Python - Qiita](https://qiita.com/ground0state/items/cb7db426682e33cbe1e7)
- [python - Does subprocess.communicate() close stdin after writing input to it? - Stack Overflow](https://stackoverflow.com/questions/46191977/does-subprocess-communicate-close-stdin-after-writing-input-to-it)
- [非同期に使う # Pythonからシェルコマンドを実行！subprocessでサブプロセスを実行する方法まとめ | DevelopersIO](https://dev.classmethod.jp/articles/python-subprocess-shell-command/#toc-6)
