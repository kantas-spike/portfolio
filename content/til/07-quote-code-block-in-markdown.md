---
title: "Markdown内でコードブロックを引用したい"
date: 2022-07-22T15:31:39+09:00
draft: false
tags:
- hugo
- markdown
---

コードブロックの表記自体を引用したい。

<!--more-->

### 解決策

**`** または **~** を3つ以上続けて書くコードブロックを**Fenced code blocks**と呼ぶ。

**Fenced code blocks**では、開始のフェンスと終了のフェンスの文字数が合っていれば良いので、**Fenced code blocks** の使い方を説明したい場合は、4つ以上のフェンスで囲んでやれば、ブロック内の3文字フェンスはただの文字列として扱われる。

~~~~~text
~~~~text
~~~mermaid
flowchart TD
    Start --> Stop
~~~
~~~~
~~~~~

上記のように記述すると、以下のように表示される。

~~~~text
~~~mermaid
flowchart TD
    Start --> Stop
~~~
~~~~

### 参照

- [コードブロック](https://docs.github.com/ja/get-started/writing-on-github/working-with-advanced-formatting/creating-and-highlighting-code-blocks#fenced-code-blocks)
- [Fenced code blocks](https://github.github.com/gfm/#fenced-code-blocks)