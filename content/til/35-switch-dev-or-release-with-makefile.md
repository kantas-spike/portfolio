---
title: Makefileでリリース用と開発用で設定を切り替えたい
date: 2022-12-09T10:10:58+09:00
draft: false
tags:
- Makefile
- python
---

シェルとPythonを組合せたツールを配布する際に、Makefileでリリース用と開発用で設定を切り替えれるようにしたい。

<!--more-->

### 解決策

`make`はコマンドライン引数で以下のように変数に値を設定できる。

~~~shell
make install 変数=1
~~~

例えば、以下を実行した場合、変数RELEASEには1が設定され、
Makefileでは、変数RELEASEに1が設定された状態で実行される。

~~~shell
make install RELEASE=1
~~~

これを利用し、`ifeq`〜`else`〜`endif`を使用して、`RELEASE=1`の場合とそれ以外の場合で設定を変更する。

~~~shell
# リリース用(1) or 開発用(0)
RELEASE ?= 0

# 環境に合せてインストール先とBlenderコマンドを変更してください
ifeq ($(RELEASE), 1)  # リリース用設定
	DST_BIN=${HOME}/bin
	DST_DIR=${HOME}/opt/slide2video
else  # 開発用設定
	DST_BIN=./bin
	DST_DIR=./build/slide2video
endif
~~~

### 参照

- [How can I configure my makefile for debug and release builds?](https://stackoverflow.com/questions/1079832/how-can-i-configure-my-makefile-for-debug-and-release-builds/1079861#1079861https://stackoverflow.com/questions/1079832/how-can-i-configure-my-makefile-for-debug-and-release-builds/1079861#1079861)

- [GNU make: 7. Makefileの条件文](http://quruli.ivory.ne.jp/document/make_3.79.1/make-jp_6.html#Conditional-Syntax)