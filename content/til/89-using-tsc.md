---
title: "tscコマンドの基本的な使い方を知りたい"
date: 2023-11-07T10:53:40+09:00
draft: false
tags:
  - typescript
---

`tsc`は、主にTypeScriptで書かれたソースコードをJavaScriptにトランスパイルするためのコマンドです。

TypeScriptの学習にあたり、基本的な`tsc`コマンドの使い方を知りたい。

<!--more-->

これまでに、`tsc`について学んだ内容を以下にまとめる。

※TypeScriptはローカルにインストール、使用バージョンは`5.2.2`

```shell
$ npm init -y
$ npm install typescript
$ npx tsc --version
Version 5.2.2
```

※また、説明用にトランスパイル対象の以下のソースファイルを作成

```shell
touch index.ts
```

### デフォルトの`tsconfig.json`を作成する

まずは`tsc --init`でデフォルトのTypeScriptの構成ファイル(`tsconfig.json`)を作成する。

以下を実行すると、推奨設定で`tsconfig.json`が作成される。
また、ドキュメントへのリンクや、その他の設定可能な項目の説明がコメントとして記載される。

```shell
$ npx tsc --init

Created a new tsconfig.json with:
                                                                                                                     TS
  target: es2016
  module: commonjs
  strict: true
  esModuleInterop: true
  skipLibCheck: true
  forceConsistentCasingInFileNames: true


You can learn more at https://aka.ms/tsconfig
```

### 構成ファイル`tsconfig.json`の内容を確認する

構成ファイル`tsconfig.json`の内容を確認するには`tsc --showConfig`を使う。

`npx tsc --init`で作成した`tsconfig.json`はコメントが沢山あり内容を把握しにくいが、
以下のコマンドにより、設定内容を確認できる。

`files`項目には、`tsconfig.json`の設定により、プロジェクト内で処理対象となるソースファイルが自動的に検出される。

```shell
$ npx tsc --showConfig
{
    "compilerOptions": {
        "target": "es2016",
        "module": "commonjs",
        "esModuleInterop": true,
        "forceConsistentCasingInFileNames": true,
        "strict": true,
        "skipLibCheck": true
    },
    "files": [
        "./index.ts"
    ]
}
```

### tscコマンドには直接ソースファイルのパスを指定しない

tscコマンドの引数にソースファイルのパスは指定すると`tsconfig.json`の設定は無効になる。

引数に`index.ts`を指定して`tsc`を実行すると、トランスパイルされた`index.js`が作成されるが、
この方法だと、`tsconfig.json`の設定が読み込まれない。

```shell
npx tsc index.ts
```

`--showConfig`をつけて確認すると、前述の設定が読み込まれていないことがわかる。

```shell
$ npx tsc index.ts --showConfig
{
    "compilerOptions": {},
    "files": [
        "./index.ts"
    ]
}
```

トランスパイルする場合は、シンプルに以下を実行する。

```shell
npx tsc
```

### トランスパイルせずに型チェックのみ実施できる

TypeScriptの型チェックだけ行う場合は、`npx tsc --noEmit`を実行する。

以下を実行すると、トランスパイルせずに、型チェックのみ行う。

```shell
npx tsc --noEmit
```

### `tsc`の監視モードを使うと便利である

毎回`npx tsc`コマンドを実行したくない場合は、`npx tsc --watch`でソースファイルを監視し自動でトランスパイルさせる。

`--watch`(or `-w`)オプションをつけて実行すると、`tsc`は監視モードになる。

監視モードでは、`tsc`コマンドは終了せずに動き続け、`tsconfig.json`で処理対象となっているソースファイルに更新があった場合、自動的にトランスパイルする。

```shell
npx tsc --watch
```

### `tsc`のビルドモードも便利である

`--build`(or `-b`)オプションを実行すると、`tsc`はビルドモードになる。

```shell
npx tsc --build
```

ビルドモードは、他のプロジェクトを参照するように`tsconfig.json`で設定した場合に、参照先の複数プロジェクトをまとめてトランスパイルするためのモードである。

毎回全てのプロジェクトをトランスパイルするのではなく、更新のあったプロジェクトのみを効率良くトランスパイルすることができる。

また、ビルドモードにはいくつかオプション機能を利用でき、複数のプロジェクトを参照しない場合でも有用である。

#### プロジェクト内の生成ファイルをまとめて削除できる

`--clean`オプションにより、プロジェクト内のトランスパイルにより生成されたファイルをまとめて削除できる。

以下により、プロジェクト内のトランスパイル済みの`*.js`をまとめて削除できる。

```shell
npx tsc --build --clean
```

また、`--dry`オプションを付けることで、実際には削除せずに、何が行なわれるかだけを確認できる。

```shell
$ npx tsc --build --clean --dry
[7:02:35] A non-dry build would delete the following files:
  * /Users/kanta/hacking/learning/006_learning-typescriptを学ぶ/01/index.js
```

#### 監視モードも使える

`--watch`(or `-w`)オプションも使える。

通常の監視モードと同様に、更新のあったファイルを自動的にトランスパイルする。

```shell
npx tsc --build --watch
```

### 参考

- [tscの--showConfigオプション。これ、TypeScriptのコンパイル設定を確認するときに便利。 #TypeScript - Qiita](https://qiita.com/suin/items/f562db2bd15f1cc91017)
- [Build Mode for TypeSc... # TypeScript: Documentation - Project References](https://www.typescriptlang.org/docs/handbook/project-references.html#build-mode-for-typescript)
- [O'Reilly Japan - 初めてのTypeScript](https://www.oreilly.co.jp/books/9784814400362/)
  - 13.1.2　監視モード
  - 13.5.5　noEmit
  - 13.10.3　ビルドモード
