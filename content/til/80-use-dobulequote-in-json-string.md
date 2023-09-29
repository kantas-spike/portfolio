---
title: "JSONの文字列値にダブルクォーテーションを含めたい"
date: 2023-09-29T16:25:24+09:00
draft: false
tags:
- javascript
- json
---
JSONの文字列値にダブルクォーテーションを含めるため、以下のように記載したらエラーとなった。
正しい表記となるよう修正したい。

~~~json
{
    "string": '"文字列"です'
}
~~~

<!--more-->

### 解決策

JSONでは、JavaScriptと異なり、シングルクォーテーションで囲って文字列を表現することはできない。
文字列を表すには、ダブルクォーテーションで囲む必要がある。

そのため、JSONの文字列内にダブルクォーテーションを含めたい場合は、
以下のように文字列内のダブルクォーテーションをエスケープする必要がある。

~~~json
{
    "string": "\"文字列\"です"
}
~~~

### 参考

- [表記方法 | JavaScript Object Notation - Wikipedia](https://ja.wikipedia.org/wiki/JavaScript_Object_Notation#%E8%A1%A8%E8%A8%98%E6%96%B9%E6%B3%95)
