---
title: "PythonスクリプトをBlenderで実行したい"
date: 2022-11-25T06:08:32+09:00
draft: false
tags:
- python
- blender
---

作成したPythonのスクリプトをBlender起動時に実行したい。

<!--more-->

### 解決策

Blenderをコマンドラインで起動時に、コマンドラインオプション `-P` or `--python` につづけてでPythonスクリプトのパスを指定すると
指定したPythonスクリプトを実行できる。

例えば、`hello.py`を作成して、以下を実行すると、Blender起動時に`hello.py`が実行される。

~~~shell
/Applications/Blender.app/Contents/MacOS/Blender -P ./hello.py
~~~

もし、`hello.py`が以下の内容の場合、

~~~python
# hello.py
import bpy

print("hello!!")
~~~

Blenderで実行すると、ターミナルに以下のように`hello!!`が表示され、BlenderのGeneralが起動される。

~~~shell
/Applications/Blender.app/Contents/MacOS/Blender -P ./hello.py
read prefs: /Users/kanta/Library/Application Support/Blender/3.3/config/userpref.blend
hello!!
~~~

### 参考

- [» Advanced » Command Line » Command Line Arguments - Python Option](https://docs.blender.org/manual/en/latest/advanced/command_line/arguments.html#python-options)
