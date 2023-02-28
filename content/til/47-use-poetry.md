---
title: "Pythonプロジェクトのパッケージを管理する"
date: 2023-02-17T07:20:29+09:00
draft: false
tags:
- python
- poetry
---

GitHubにPythonのプログラムを公開する時に、利用しているPythonのバージョンとパッケージを指定したい。

<!--more-->

### 解決策

一般的に、この用途にはパッケージマネージャーというものを利用するようだ。各種開発言語には、それぞれのパッケージマネージャーが存在する。[^1]

Pythonの場合、以下の3つが有名みたいだ。[^2]

- [Anaconda](https://www.anaconda.com/products/distribution)/[Miniconda](https://docs.conda.io/en/latest/miniconda.html)
- [Pipenv](https://pipenv-ja.readthedocs.io/ja/translate-ja/)
- [Poetry](https://python-poetry.org/)

パッケージマネージャーごとに特徴があるようだが、私は以下の理由で、簡単に利用できそうなPoetryを採用する。

- 仮想環境の利用が簡単(`poetry run`や`poetry shell`で利用やアクティベートできる)
- Python標準の`pyproject.toml`で依存関係が定義されるためシンプル

`Poetry`により生成される以下のファイルをコミットしておくと、Pythonのバージョンとパッケージを指定できる。

- `pyproject.toml`
- `poetry.lock` [^8]

### Poetryを使う

[Jupyter Notebook](https://jupyter.org/)の導入を例に、`Poetry`の使い方をまとめる。

#### `Poetry`のインストール

まずは、`Poetry`をインストールします。私の環境はmacOSなので`brew`でインストールする。

```shell
% brew install poetry
..略..
% poetry --version
Poetry (version 1.3.2)
```

#### プロジェクトの初期化

次に、プロジェクト用の作業ディレクトリを作成し、移動する。

```shell
mkdir ~/spike/69_use-jupyter-notebook
cd ~/spike/69_use-jupyter-notebook
```

そして、`poetry init`でプロジェクトを初期化する。
いくつか質問されるので、適当に回答する。(回答は`project.toml`に記録されるので、あとで簡単に修正できる。)

```shell
% poetry init
This command will guide you through creating your pyproject.toml config.

Package name [69_use-jupyter-notebook]:
# ..略..
Compatible Python versions [^3.11]:
# ..略..
Do you confirm generation? (yes/no) [yes]
```

#### プロジェクトに合うPythonのバージョンを導入

Pythonのバージョンを`^3.11` [^3] と指定したので、`pyenv`で`3.11`のPythonを利用するようにする。

```shell
% pyenv install 3.11.2
python-build: use openssl@1.1 from homebrew
python-build: use readline from homebrew
Downloading Python-3.11.2.tar.xz...
-> https://www.python.org/ftp/python/3.11.2/Python-3.11.2.tar.xz
Installing Python-3.11.2...
# ..略..
% pyenv local 3.11
% cat .python-version
3.11
% pyenv rehash
% python3 --version
Python 3.11.2
```

#### 仮想環境の設定

デフォルトでは、`Poetry`は`{cache-dir}/virtualenvs`を仮想環境とし、そこにパッケージをインストールする。

今回は、プロジェクト用に専用の仮想環境を作成したいと思う。
そのためには、以下を実行し設定を変更する必要がある。 [^4]

```shell
% poetry config --local virtualenvs.in-project true
% cat poetry.toml
[virtualenvs]
in-project = true
```

`--local`オプションを指定して実行したので、`poetry.toml`が作成され、そこに設定内容が記録される。

#### Jupyter Notebookの導入

Jupyter Notebookを導入するには、`notebook`パッケージが必要である。
Poetryで、`notebook`を依存するパッケージに追加する。[^5]

```shell
% poetry add notebook
Using version ^6.5.2 for notebook

Updating dependencies
Resolving dependencies... (2.1s)

Writing lock file

Package operations: 77 installs, 0 updates, 0 removals

  • Installing six (1.16.0)
  • Installing attrs (22.2.0)
  • Installing platformdirs (3.0.0)
..略..
```

今回は、`numpy`と`scipy`を利用したいのでインストールしたいと思う。

まず、`numpy`をインストールする。

```shell
% poetry add numpy
Using version ^1.24.2 for numpy

Updating dependencies
Resolving dependencies... (0.5s)

Writing lock file

Package operations: 1 install, 0 updates, 0 removals

  • Installing numpy (1.24.2)
%
```

最後に、`scipy`をインストールする。しかし、エラーが発生した。

```shell
% poetry add scipy
Using version ^1.10.1 for scipy

Updating dependencies
Resolving dependencies... (0.0s)

The current project's Python requirement (>=3.11,<4.0) is not compatible with some of the required packages Python requirement:
  - scipy requires Python <3.12,>=3.8, so it will not be satisfied for Python >=3.12,<4.0

Because no versions of scipy match >1.10.1,<2.0.0
 and scipy (1.10.1) requires Python <3.12,>=3.8, scipy is forbidden.
So, because 69-use-jupyter-notebook depends on scipy (^1.10.1), version solving failed.

  • Check your dependencies Python requirement: The Python requirement can be specified via the `python` or `markers` properties

    For scipy, a possible solution would be to set the `python` property to ">=3.11,<3.12"

    https://python-poetry.org/docs/dependency-specification/#python-restricted-dependencies,
    https://python-poetry.org/docs/dependency-specification/#using-environment-markers
%
```

これは、プロジェクトが許容する`python`のバージョンと、`scipy`が許容する`python`のバージョンがマッチしていないため、エラーが発生している。

プロジェクトが許容する`python`のバージョンは`project.toml`に記載されている。
今回は`python`のバージョンが、`python = "^3.11"`となっており、これは`python`のバージョンが`>=3.11.0 < 4.0`を意味する。

しかし、今インストールしようとしている`scipy`は`python`の`<3.12,>=3.8`バージョンまでに対応している。 [^9] そのため、ミスマッチが発生している。

これを修正するには、プロジェクトが許容する`python`のバージョンを厳密にする。
まだ、リリースもされていない`python`のバージョンは無視して、以下のように`python = "~3.11"`とし、`python`の`>=3.11.0 < 3.12`を対象にする。 [^10]

```toml
# ..略..
[tool.poetry.dependencies]
python = "~3.11"
# ..略..
```

再度、`scipy`をインストールする。今度はちゃんとインストールできる。

```shell
% poetry add scipy
Using version ^1.10.1 for scipy

Updating dependencies
Resolving dependencies... (0.5s)

Writing lock file

Package operations: 1 install, 0 updates, 0 removals

  • Installing scipy (1.10.1)
```

プロジェクトディレクトリ内に、仮想環境用の`.venv`ディレクトリが作成され、そこにパッケージがインストールされる。

```shell
% ls .venv
bin             etc             lib             pyvenv.cfg      share
```

そして、`pyproject.toml`には`notebook`パッケージとそのバージョンが記録される。

```toml
# ..略..
[tool.poetry.dependencies]
python = "~3.11"
notebook = "^6.5.2"
numpy = "^1.24.2"
scipy = "^1.10.1"
# ..略..
```

さらに、`poetory.lock`に依存するパッケージも含めた詳細なパッケージの情報が記録される。

```shell
head poetry.lock
# This file is automatically @generated by Poetry and should not be changed by hand.

[[package]]
name = "anyio"
version = "3.6.2"
description = "High level compatibility layer for multiple asynchronous event loop implementations"
category = "main"
optional = false
python-versions = ">=3.6.2"
files = [
```

もし、GitHubにプロジェクトを公開する場合、`poetry.lock`を登録しておけば、
プロジェクトをクローンしたユーザーは、以下のコマンドにより、`poetry.lock`に記載されたバージョンの依存関係も含む全パッケージをインストールできる。[^6]

```shell
poetry install
```

#### Jupyter Notebookの実行

`poetry run`の後に、コマンドを実行すると、プロジェクトの仮想環境で実行される。

```shell
% poetry run jupyter notebook
[I 11:21:43.847 NotebookApp] Writing notebook server cookie secret to /Users/kanta/Library/Jupyter/runtime/notebook_cookie_secret
[I 11:21:44.345 NotebookApp] Serving notebooks from local directory: /Users/kanta/spike/69_use-jupyter-notebook
[I 11:21:44.345 NotebookApp] Jupyter Notebook 6.5.2 is running at:
[I 11:21:44.345 NotebookApp] http://localhost:8888/?token=3f11e224193b1fe12c2241acf4f8a47eec902761062a8fe8
[I 11:21:44.345 NotebookApp]  or http://127.0.0.1:8888/?token=3f11e224193b1fe12c2241acf4f8a47eec902761062a8fe8
[I 11:21:44.345 NotebookApp] Use Control-C to stop this server and shut down all kernels (twice to skip confirmation).
# ..略..
```

また、`poetry shell`で仮想環境をアクティベートしてから、`jupyter notebook`を実行しても同様になる。[^7]

```shell
% poetry shell
Spawning shell within /Users/kanta/spike/69_use-jupyter-notebook/.venv
% emulate bash -c '. /Users/kanta/spike/69_use-jupyter-notebook/.venv/bin/activate'
(69-use-jupyter-notebook-py3.11) % jupyter notebook
[I 11:23:35.318 NotebookApp] Serving notebooks from local directory: /Users/kanta/spike/69_use-jupyter-notebook
[I 11:23:35.318 NotebookApp] Jupyter Notebook 6.5.2 is running at:
[I 11:23:35.319 NotebookApp] http://localhost:8888/?token=a8feeef6303a95334b208be924ee88542bd9c3bdd9676870
[I 11:23:35.319 NotebookApp]  or http://127.0.0.1:8888/?token=a8feeef6303a95334b208be924ee88542bd9c3bdd9676870
[I 11:23:35.319 NotebookApp] Use Control-C to stop this server and shut down all kernels (twice to skip confirmation).
```

### 参考

- [バージョン管理ツール、パッケージ管理ツールの種類をまとめました - Qiita](https://qiita.com/akkey2475/items/5b2813e62303a9c75813)
- [Pythonパッケージ管理ツール個人的まとめ - Qiita](https://qiita.com/hi-asano/items/831c6c3147ae3d7049f9)
- [パッケージマネージャがパッケージをインストールする仕組み – ymyzk’s blog](https://blog.ymyzk.com/2017/12/how-packages-are-installed/)
- [poetryによるパッケージの依存関係の管理 | Hakky Handbook](https://book.st-hakky.com/docs/poetry-intro/)
- [Pipenv: 人間のためのPython開発ワークフロー — pipenv 2018.11.27.dev0 ドキュメント](https://pipenv-ja.readthedocs.io/ja/translate-ja/)
- [A Better Pip Workflow™ — Kenneth Reitz](https://kennethreitz.org/essays/2016/02/25/a-better-pip-workflow)
- [pyproject.toml とは何か | I Was Perfect](https://tech.515hikaru.net/post/2019-11-23-pyproject/)
- [Basic usage | Documentation | Poetry - Python dependency management and packaging made easy](https://python-poetry.org/docs/basic-usage/)
- [Configuration | Documentation | Poetry - Python dependency management and packaging made easy](https://python-poetry.org/docs/configuration/#virtualenvsin-project)
- [Dependency specification | Documentation | Poetry - Python dependency management and packaging made easy](https://python-poetry.org/docs/dependency-specification/)
- [Project Jupyter | Installing Jupyter](https://jupyter.org/install#jupyter-notebook)

[^1]: パッケージマネージャーという用語には、いくつか[分類](https://qiita.com/akkey2475/items/5b2813e62303a9c75813)があるようだ。ここでは、Python言語のパッケージ管理ツールを話題にしている。
[^2]: 昔からpipとrequirements.txtを利用するシンプルな方法が昔から利用されていたそうだが、この方法は複雑なパッケージの依存関係に対応しにくいそうだ。
[^3]: バージョン3.11以上、4.0未満の意味
[^4]: `--local`オプションなしで設定すると、すべてのプロジェクト共通の設定になる。
[^5]: `add`で指定したパッケージ名からパッケージと依存するパッケージの適切なバージョン情報を取得して、インストールする。
[^6]: `poetry.lock`が存在しない場合は、`pyproject.toml`に記載されたパッケージと、依存するパッケージの最新バージョンがインストールされる
[^7]: 起動したシェルを抜けるには、`deactivate`を実行するか`exit`(C-dでも良い)を実行する
[^8]: 依存関係のあるパッケージのバージョンを指定する場合は`poetry.lock`もコミットする
[^9]: まだリリースもされていない`<4.0`のバージョンなんて対応できる訳ないですよね
[^10]: バージョンの指定方法については、[Dependency specification](https://python-poetry.org/docs/dependency-specification/)を参照

