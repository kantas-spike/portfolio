---
title: "自作ツールをインストールしたい"
date: 2022-12-04T23:00:39+09:00
draft: false
tags:
- python
- hugo
---
自作のShellなどのツールを作ったときに、どのディレクトリにインストールするべきなのか?

ツールのソースは、作業ディレクトリで開発しGitHubで管理するが、ツール自体はどうインストールするべき?

### 解決策

Linuxには、[Filesystem Hierarchy Standard](https://refspecs.linuxfoundation.org/FHS_3.0/fhs-3.0.html)という、ディレクトリ構成についての標準があります。

自分のホームディレクトリ配下に、上記の標準に従ったディレクトリを作成すれば良さそう。
また、私の場合は、シェルスクリプトと、複数のPythonスクリプトを組合せることが多いので、標準でいう`opt`ディレクトリの構成が良いと思います。

~~~shell
% ls ~/opt/package-name
bin
lib
etc
share
~~~

そして、`~/opt/package-name/bin/xxx.sh`を`~/bin/xxx.sh`にシンボリックリンクする。

### 参考

- [Filesystem Hierarchy Standard](https://refspecs.linuxfoundation.org/FHS_3.0/fhs-3.0.html)
- [Filesystem Hierarchy Standard|Wikipedia](https://ja.wikipedia.org/wiki/Filesystem_Hierarchy_Standard)
