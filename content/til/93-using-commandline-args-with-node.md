---
title: "Nodejsでコマンドライン引数を扱いたい"
date: 2023-11-17T10:23:01+09:00
draft: false
tags:
  - nodejs
  - javascript
---

Nodejsでコマンドライン引数を扱いたい。

<!--more-->

### 解決策

コマンドライン引数は`process.argv`で取得できる。

ただし、`node`コマンドとスクリプトのパスも引数に含まれてしまうため、
`process.argv.slice(2)`とすると良い。

#### 例

`spike.js`に以下を記述し、

```js
console.log(process.argv);
```

`node`に`spike.js`とその引数`arg1 arg2 arg3`を指定して実行すると、以下のように表示される。

```shell
$ node ./spike.js arg1 arg2 arg3
[
  '/usr/local/bin/node',
  './spike.js',
  'arg1',
  'arg2',
  'arg3'
]
```

`arg1 arg2 arg3`のみを取得する場合は、以下のように修正すると良い。

```js
console.log(process.argv.slice(2));
```

実行すると、以下のように`arg1 arg2 arg3`のみ表示される。

```shell
$ node ./spike.js arg1 arg2 arg3
[ 'arg1', 'arg2', 'arg3' ]
```

### 参考

- [node でコマンドラインツールを作ろう - Automate the Boring Stuff with Node.js](https://super-yusuke.gitbook.io/automate-the-boring-stuff-with-node-js/node-dekomandoraintsruworou/node-dekomandoraintsruworou)
  - [引数を受け取る - Automate the Boring Stuff with Node.js](https://super-yusuke.gitbook.io/automate-the-boring-stuff-with-node-js/node-dekomandoraintsruworou/wokeru)
