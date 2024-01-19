---
title: "Pythonで外部プロセスに標準入力から情報を渡したい(非同期版)"
date: 2024-01-19T23:35:31+09:00
draft: false
tags:
  - python
---

Pythonで外部プロセスを実行し、その外部プロセスの標準入力を使って、Pythonから情報を与えたい。

ただし、[Popen.communicate(input)](https://docs.python.org/ja/3/library/subprocess.html#subprocess.Popen.communicate)を使うと、
プロセス終了まで処理がブロックされるため、標準入力をプロセスに非同期で渡したい。

<!--more-->

### 解決策

[subprocess.Popen](https://docs.python.org/ja/3/library/subprocess.html#popen-constructor)の`stdin`に直接データを書き込めば良い。

以下は、cat -に対して、標準入力からtest1\ntest2\ntest3を渡している。

```python
# spike2.py
import subprocess
import time


def main():
    proc = subprocess.Popen(
        "cat - ",
        shell=True,
        stdin=subprocess.PIPE,
        stdout=subprocess.PIPE,
        stderr=subprocess.PIPE,
        text=True,
    )

    # 標準入力に直接書き込む
    proc.stdin.write("test1\ntest2\ntest3")
    proc.stdin.close()  # クローズしないとプロセスが入力待ちのままになる

    # プロセスが終了するまで待つ
    # 終了を待つだけなら`proc.wait()`で良い
    while proc.poll() is None:
        # 必要ならプロセス実行中に、ここで別の処理を行う
        time.sleep(1)

    print(f"returncode: {proc.poll()}")
    print("stdout:")
    print(proc.stdout.read())


if __name__ == "__main__":
    main()

```

実行結果は以下となる。

```shell
$ python spike2.py
returncode: 0
stdout:
test1
test2
test3
```

ただし、以下の警告がある。

```column {title="警告"}
 [.stdin.write](https://docs.python.org/ja/3/library/subprocess.html#subprocess.Popen.stdin), [.stdout.read](https://docs.python.org/ja/3/library/subprocess.html#subprocess.Popen.stdout), [.stderr.read](https://docs.python.org/ja/3/library/subprocess.html#subprocess.Popen.stderr) を利用すると、別のパイプの OS パイプバッファーがいっぱいになってデッドロックが発生する恐れがあります。これを避けるためには [communicate()](https://docs.python.org/ja/3/library/subprocess.html#subprocess.Popen.communicate) を利用してください。
```

### 参考

- [Popen.stdin # subprocess --- サブプロセス管理 — Python 3.12.1 ドキュメント](https://docs.python.org/ja/3/library/subprocess.html#subprocess.Popen.stdin)
  - [デッドロックが発生する恐れ](https://docs.python.org/ja/3/library/subprocess.html#:~:text=%E3%81%AB%E3%81%AA%E3%81%A3%E3%81%A6-,%E3%83%87%E3%83%83%E3%83%89%E3%83%AD%E3%83%83%E3%82%AF%E3%81%8C%E7%99%BA%E7%94%9F%E3%81%99%E3%82%8B%E6%81%90%E3%82%8C,-%E3%81%8C%E3%81%82%E3%82%8A%E3%81%BE%E3%81%99)
