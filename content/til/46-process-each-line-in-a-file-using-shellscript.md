---
title: "シェルスクリプトでファイル内の各行を処理したい"
date: 2023-02-08T23:53:39+09:00
draft: false
tags:
- shellscript
---

シェルスクリプトで、URL一覧ファイルから各URL行を取得し処理を行いたい。

<!--more-->

### 解決策

`url.txt`というテキストファイルにURL一覧が記載されている場合、
以下のように標準入力へリダイレクトさせることで、各行を取得できる。

```shell
while read url
do
    echo $rul
done < url.txt
```

#### 例: ファイルの最終行に改行がある場合

`url.txt` の内容が以下の場合、

```shell
% cat url.txt
URL1
URL2
URL3
%
```

以下のシェルスクリプトで、各行を処理できる。

```shell
% while read url
while> do
while>    echo $url
while> done < url.txt
URL1
URL2
URL3
%
```

#### 例: ファイルの最終行に改行がない場合

`url_with_eol.txt` の内容が以下のように
最終行に改行がない場合、

```shell
% cat url_with_eol.txt
URL1
URL2
URL3%
```

以下のシェルスクリプトを実行すると、最終行が処理されない。

```shell
% while read url
while> do
while>    echo $url
while> done < url_with_eol.txt
URL1
URL2
%
```

これは、`read`は行内にファイルの終端があると`FALSE`を返すためらしい。

回避策は2つある。

- ファイルの最終行に必ず改行を入れる
- シェルスクリプトの`while`文の条件を変更する

#### 回避策: シェルスクリプトの`while`文の条件を変更する

`while`文の条件に、`|| [ -n "${url}"]`を追加し、
`read`が`FALSE`を返しても、`url`に1文字以上あれば、処理を行うように修正する。

```shell
% while read url || [ -n "${url}"]
while> do
while>    echo $url
while> done < url_with_eol.txt
URL1
URL2
URL3
%
```

### 参考

- [【シェルスクリプト】ファイルの中身を一行ずつ読み込む方法 | server-memo.net](https://www.server-memo.net/shellscript/read-file.html)
- [BASHのwhile readで最終行が処理されない問題の解決方法 - Qiita](https://qiita.com/Ets/items/a7fa24b138b8ee883dac)
- [Bash の if 文（test文）のオプションを整理してみた - Qiita](https://qiita.com/wakayama-y/items/a9b7380263da77e51711)
- [fix: 最終行がダウンロードされない不具合を修正 · kantas-spike/make_book_pdf@979e643](https://github.com/kantas-spike/make_book_pdf/commit/979e643fcf500d78f5327a431a3777145eb212cb)
- [fix: URL.txtの最終行に改行がなくてもダウンロードするように修正 · kantas-spike/make_book_pdf@ce411fc](https://github.com/kantas-spike/make_book_pdf/commit/ce411fcf0e35e5b5aea7b54abb9eefc2143cb72f)