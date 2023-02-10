---
title: "makeを使って『Make本』をメイクする"
date: 2023-02-09T07:21:11+09:00
draft: false
tags:
- make
- Makefile
---

[PDFで公開されているMake本をマージする | kanta's spike](https://kantas-spike.github.io/portfolio/blog/2023/02/09-merge-make-book/)で、公開されている[GNU Make 第3版](https://www.oreilly.co.jp/library/4873112699/)のPDFをマージするシェルスクリプトを作成したことを紹介しました。

折角なので、この『Make本』を読んで学びたいと思います。
そして、勉強の成果として、[PDFで公開されているMake本をマージする | kanta's spike](/blog/2023/02/09-merge-make-book/)で作成したシェルスクリプトを`makefile`に置き換えたいと思います。

<!--more-->

Makeについてはこれまで、[メタプログラミング · the missing semester of your cs education](https://missing-semester-jp.github.io/2020/metaprogramming/)で学んだり、コピペでツールインストール用に使用してきました。[^1]

この機会に、ちゃんと `make` について学びたいと思います。

### ターゲットと依存関係の整理

`makefile`の基本構成は以下になるようです。

```makefile
target: prereq1 prereq2
    commands
```

用語の意味は以下になります。

- `target`: ファイルもしくは何か作り出されるもの
- `prereq`: 必須項目(または依存項目)。ターゲットが作成される前に必要なもの
- `commands`: 必須項目からターゲットを作るためのコマンド

以前作成したシェルスクリプトをもとに、『Make本』のマージ版PDFを作成するための、依存関係を整理します。

| target | prereq | メモ |
|---|---|---|
| マージ版目次付きpdf[^8] | マージ版PDF[^4] | [make_book_pdf/03_add_toc.sh](https://github.com/kantas-spike/make_book_pdf/blob/main/old_tool/03_add_toc.sh)から整理|
|| 目次情報ファイル[^3] ||
| マージ版PDF[^4] | ダウンロードした章別PDF | [make_book_pdf/02_merge_pdf.sh](https://github.com/kantas-spike/make_book_pdf/blob/main/old_tool/02_merge_pdf.sh)から整理 |
||改訂情報PDF[^2]||
| ダウンロードした章別PDF | 章別PDFのURL一覧[^5]| [make_book_pdf/01_download_pdf.sh](https://github.com/kantas-spike/make_book_pdf/blob/main/old_tool/01_download_pdf.sh)から整理 |
||PDFダウンロード用ディレクトリ[^6]||
|改訂情報PDF[^2]| 改訂情報PDFの原本[^7] | `cp`で作成 |
|PDFダウンロード用ディレクトリ[^6]||`mkdir -p`で作成|
|目次情報ファイル[^3]||手動で作成|
|章別PDFのURL一覧[^5]||手動で作成|
|改訂情報PDFの原本[^7]||手動で作成|

### 疑問点の整理

前項でシェルスクリプトからターゲットと依存関係を整理しました。
しかし、いくつか疑問があります。

「Make本」を読んで、疑問点と対策案をまとめてみました。

|疑問|対策案|参照|
|---|---|---|
|`ダウンロードした章別のPDF群`は、どのようにターゲットを定義するのか？| `$(TOUCH) build/downloaded` でダミーファイルとして対応する? |[11.1.4 ソーステキストの検証](/pdf/make_merged.pdf#page=234)|
|`commands`として`while`文などの数行あるシェルスクリプトを記載できるのか？| 1行のスクリプトを`\`で改行することで対応できそう |[5.1.1 長いコマンド](/pdf/make_merged.pdf#page=111)|
|`curl`や`git`などのコマンドを利用しているが、それらのコマンドの存在チェックは必要か？|コマンドを変数で定義して、環境に応じて再定義が必要なことをREADMEに記載しておく| [7章 ポータブルなmakefile](/pdf/make_merged.pdf#page=149)|

### Makefileの作成

これまでの整理を踏まえて作成した`Makefile`が以下になります。

```Makefile
BUILD_DIR := ./build
DOWNLOAD_DIR := $(BUILD_DIR)/pdf
OUTLINE_TOOL_DIR := $(BUILD_DIR)/pdfoutline
URL_LIST := ./URL.txt
TOC_FILE := ./toc.txt
ADDITIONAL_PDF := ./additional_info.pdf
COMBINED_PDF := $(BUILD_DIR)/_make.pdf
OUTPUT_PDF := make_merged.pdf
DOWNLOAD_INTERVAL_SEC := 15

# for debug
QUIET = @

# commands
TOUCH = touch
CURL = curl
GS = gs
GIT = git
PYTHON3 = python3

.PHONY: all
all: $(OUTPUT_PDF)


# add toc to combined pdf
$(OUTPUT_PDF): $(TOC_FILE) $(OUTLINE_TOOL_DIR) $(COMBINED_PDF)
	$(PYTHON3) $(OUTLINE_TOOL_DIR)/pdfoutline.py $(COMBINED_PDF) $(TOC_FILE) $@

# clone tool
$(OUTLINE_TOOL_DIR):
	$(GIT) clone https://github.com/yutayamamoto/pdfoutline.git $@

# combine pdf
$(COMBINED_PDF): $(BUILD_DIR)/downloaded $(ADDITIONAL_PDF)
	cp -p $(ADDITIONAL_PDF) $(DOWNLOAD_DIR)/025.pdf
	$(GS) -dNOPAUSE -sDEVICE=pdfwrite -sOUTPUTFILE=$@ -dBATCH $(DOWNLOAD_DIR)/*.pdf

# download from URL_LIST
$(BUILD_DIR)/downloaded: $(URL_LIST) $(DOWNLOAD_DIR)
	$(QUIET) idx=1;							\
	while read line || [ -n "$${line}" ];				\
	do								\
		output_path=$(DOWNLOAD_DIR)/`printf "%02d" $$idx`0.pdf;	\
		echo "download $${line} to $${output_path} ...";	\
		$(CURL) $${line} -o $${output_path};			\
		idx=$$(($$idx+1));					\
		echo "sleep $(DOWNLOAD_INTERVAL_SEC)sec...";		\
		sleep $(DOWNLOAD_INTERVAL_SEC);				\
	done < $<
	$(TOUCH) $@

# make download dir
$(DOWNLOAD_DIR):
	mkdir -p $(DOWNLOAD_DIR)


# clean
.PHONY: clean
clean:
	rm -rf $(DOWNLOAD_DIR)
	rm $(COMBINED_PDF)
	rm $(BUILD_DIR)/downloaded
	rm $(OUTPUT_PDF)

.PHONY: clean-all
clean-all:
	rm -rf $(BUILD_DIR)
	rm $(OUTPUT_PDF)
```

### まとめ

生成物(ターゲット)が依存するファイルが新しくなったら、`make`すると自動的に更新されるので、便利になりました。

作成済の他ツールのMakefileを修正しながら、もっと`make`になれていきたいと思います。

#### 学んだ事

- シェルスクリプトと組合せる場合、`for文`などは1行で記載し、`\`で改行する [^11]

	例えば、このような`for`文の場合を考える。

	```shell
	for i in 1 2 3
	do
		echo hello
		echo world
	done
	```

	1行で記載するとこのようになる。

	```shell
	for i in 1 2 3; do echo hello; echo world; done
	```

	`Makefile`内には、コマンドに1行のシェルスクリプトとして記載できる。

	```Makefile
	$(ターゲット):
		for i in 1 2 3; do echo hello; echo world; done
	```

	1行だと行が長すぎる場合は、`\`を使って改行する。
	```Makefile
	$(ターゲット):
		for i in 1 2 3; \
		do \
		 echo hello; \
		 echo world; \
		done
	```

- シェルスクリプト内の変数は、makeの変数と区別するため、`$$変数名`に変更する必要がある[^9] [^10]
	```Makefile
	MSG := hello
	x := world
	$(ターゲット):
		for i in 1 2 3; \
		do \
		 echo $(MSG) $x $$i; \
		done
	```


### 参考
- [O'Reilly Japan - GNU Make 第3版](https://www.oreilly.co.jp/library/4873112699/)
- [メタプログラミング · the missing semester of your cs education](https://missing-semester-jp.github.io/2020/metaprogramming/)
- [kantas-spike/make_book_pdf: 『GNU Make 第3版』 各章マージ版PDF](https://github.com/kantas-spike/make_book_pdf)
- [yutayamamoto/pdfoutline: A command line tool for adding an outline to pdf files](https://github.com/yutayamamoto/pdfoutline)

[^1]: コピペでなんとなくMakefileを作成していました。
[^2]: build/pdf/025.pdf
[^3]: [make_book_pdf/toc.txt at main · kantas-spike/make_book_pdf](https://github.com/kantas-spike/make_book_pdf/blob/main/toc.txt)
[^4]: build/_make.pdf
[^5]: [make_book_pdf/URL.txt at main · kantas-spike/make_book_pdf](https://github.com/kantas-spike/make_book_pdf/blob/main/URL.txt)
[^6]: build/pdf
[^7]: [make_book_pdf/additional_info.pdf at main · kantas-spike/make_book_pdf](https://github.com/kantas-spike/make_book_pdf/blob/main/additional_info.pdf)
[^8]: make_merged.pdf
[^9]: [make は2つのドル記号($$)を見つけると、1つのドル記号($)にしてからサブシェルに渡します](/pdf/make_merged.pdf#page=82)
[^10]: [makeの変数値を取得するには$(変数名)で取得する。変数名が1文字の場合は、括弧を省略して$変数名で取得できる。](/pdf/make_merged.pdf#page=82)
[^11]: [5.1.1 長いコマンド](/pdf/make_merged.pdf#page=111)