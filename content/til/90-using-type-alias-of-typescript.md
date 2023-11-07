---
title: "TypeScriptでtypeエイリアスはどこに定義するべき"
date: 2023-11-07T10:58:43+09:00
draft: false
tags:
  - typescript
---

[kantas-spike/title_url_copier](https://github.com/kantas-spike/title_url_copier)をTypeScript化する際に、型エイリアスを定義した。

この型は2つのファイルで利用するが、その場合、型エイリアスはどこに定義するべきなのか?

<!--more-->

```ts
type LinkFormatOptions = {
  format: string;
  useHashFormat: boolean;
  hashFormat: string;
};
```

### 解決策

型エイリアスを定義した独自の宣言ファイル(`./src/types/global.d.ts`)を作成し、
宣言ファイルを`tsc`のコンパイル対象に含めることで、定義した型エイリアスが各ソースファイルで共用できるようになる。

具体的な手順は以下になる。

1. 宣言ファイル(`./src/types/global.d.ts`)に、以下のように定義する。
   また、 `./src/background.ts`に定義していた型エイリアスは不要なので削除する。

   ```ts
   // ./src/types/global.d.ts

   // 強制的にファイルを`モジュール`にする
   //
   //  ファイルが`スクリプト`であれば、`declare global`を利用しなくても、
   //  定義内容が全てグローバルになる。
   //  意図せずにグローバルを汚すことがないようにモジュールにしている。
   export {};

   // 明示的にグローバルの宣言空間に型エイリアスを定義する
   declare global {
     type LinkFormatOptions = {
       format: string;
       useHashFormat: boolean;
       hashFormat: string;
     };
   }
   ```

2. 宣言ファイルを`tsc`のコンパイル対象に含める

   今回は、`./src/types/global.d.ts`に宣言ファイルを作成した。

   もともと、`tsconfig.json`の設定で`include: ["src"]`となっているため、
   自動的に宣言ファイルがコンパイル対象となる。

   もし、`./src`フォルダー以外に宣言ファイルを作成した場合(例: `./types/global.d.ts`)は、
   `tsconfig.json`の`compilerOptions`内の`typesRoots`に、宣言ファイルを格納したフォルダーを指定すれば良い。

   ```json
   {
     // ..略..
     "compilerOptions": {
       // ..略..
       "typeRoots": ["./node_modules/@types", "./types"]
     }
     // ..略..
   }
   ```

3. 念のため確認

   以下のコマンドを実行し、表示される`files`設定内に宣言ファイルが含まれていることを確認する。

   ```shell
   $ npx tsc --showConfig
   {
    "compilerOptions": {
        "target": "es2021",
        "module": "esnext",
        "rootDir": "./src",
        "outDir": "./dist",
        "esModuleInterop": true,
        "forceConsistentCasingInFileNames": true,
        "strict": true,
        "skipLibCheck": true
    },
    "files": [
        "./src/background.ts",
        "./src/options.ts",
        "./src/types/global.d.ts"
    ],
    "include": [
        "src/**/*"
    ],
    "exclude": [
        "dist",
        "node_modules"
    ]
   }
   ```

4. あとは`tsc`でトランスパイルする

   ```shell
   npx tsc
   ```

### 参考

- [How to declare global types in TypeScript | bobbyhadz](https://bobbyhadz.com/blog/typescript-make-types-global)
- [How to declare Global Variables in TypeScript | bobbyhadz](https://bobbyhadz.com/blog/typescript-declare-global-variable)
