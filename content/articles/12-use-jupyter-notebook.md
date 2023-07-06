---
title: "Jupyter Notebookを使う"
date: 2023-02-16T08:44:35+09:00
draft: false
tags:
- python
- jupyter
---

[Jupyter Notebook](https://jupyter.org/)という、文書、プログラムコード、数式、や図形を1つのドキュメントとして表現できるWebアプリケーションがあるそうです。 [^1]

Pythonを使って、数学を勉強する時には便利そうです。今回は、実際に`Jupyter Notebook`を使ってみます。そして、作成したノートをブログに掲載できる形式に変換できるかを検証します。

<!--more-->

### 方針

いつも[Visual Studio Code](https://code.visualstudio.com/)を使用しているので、`Jupyter Notebook`も`Visual Studio Code`上で利用したいと思います。

`Visual Studio Code`には[Jupyterの拡張機能](https://marketplace.visualstudio.com/items?itemName=ms-toolsai.jupyter)があります。こちらを利用したいと思います。

また、今回は[Pythonではじめる 音のプログラミング: コンピュータミュージックの信号処理 | 青木 直史 |本 | 通販 | Amazon](https://www.amazon.co.jp/Python%E3%81%A7%E3%81%AF%E3%81%98%E3%82%81%E3%82%8B-%E9%9F%B3%E3%81%AE%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%9F%E3%83%B3%E3%82%B0-%E3%82%B3%E3%83%B3%E3%83%94%E3%83%A5%E3%83%BC%E3%82%BF%E3%83%9F%E3%83%A5%E3%83%BC%E3%82%B8%E3%83%83%E3%82%AF%E3%81%AE%E4%BF%A1%E5%8F%B7%E5%87%A6%E7%90%86-%E9%9D%92%E6%9C%A8-%E7%9B%B4%E5%8F%B2/dp/4274228991)を勉強したいので、`numpy`と`scipy`も導入します。

### Jupyter拡張機能の導入

[JupyterのQuick Start](https://marketplace.visualstudio.com/items?itemName=ms-toolsai.jupyter#working-with-python)に従い、拡張機能をインストールしましょう。

#### インストール手順

1. VsCodeの導入。

   導入済なので飛ばします

2. Anaconda/Miniconda or another Python environment の導入、およびnotebook等のパッケージ導入

    今回は、`pyenv`を使って`python`をインストールし、`poetry`を使ってpythonのパッケージおよび仮想環境を管理します。

    `python`、`poetry`のインストールと`notebook`等のパッケージ導入手順については、 [Pythonプロジェクトのパッケージを管理する](/til/2023/02/47-use-poetry/)を参照してください。

3. VsCodeのPython拡張機能の導入

    [Install Visual Studio Code and the Python Extension](https://code.visualstudio.com/docs/python/python-tutorial#_install-visual-studio-code-and-the-python-extension)に従い、Python拡張機能を導入しましょう。

4. VsCodeのJupyter拡張機能の導入

    [Installed extensions | Jupyter - Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=ms-toolsai.jupyter#installed-extensions)に従い、Jupyter拡張機能を導入しましょう。

5. 以上で完了です。実際にnotebookを作成しましょう

    [Working with Python | Jupyter - Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=ms-toolsai.jupyter#working-with-python)に従い、`Jupyter: Create New Jupyter Notebook`コマンドを実行し、ノートブックを作成し利用しましょう。

### 参考

- [Project Jupyter | Home](https://jupyter.org/)
  - [Installation jupyter/notebook: Jupyter Interactive Notebook](https://github.com/jupyter/notebook#installation)
  - [Usage jupyter/notebook: Jupyter Interactive Notebook](https://github.com/jupyter/notebook#usage---running-jupyter-notebook)
- [Project Jupyter - Wikipedia](https://ja.wikipedia.org/wiki/Project_Jupyter)
- [Visual Studio Code - Code Editing. Redefined](https://code.visualstudio.com/)
- [Get Started Tutorial for Python in Visual Studio Code](https://code.visualstudio.com/docs/python/python-tutorial)
- [Python - Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=ms-python.python)
- [Jupyter - Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=ms-toolsai.jupyter)

[^1]: [WikipediaのJupyter Notebook](https://ja.wikipedia.org/wiki/Project_Jupyter#Jupyter_Notebook)
