---
title: "HugoでNext.jsアプリを公開したい"
date: 2023-07-10T00:28:07+09:00
draft: false
tags:
- next.js
- hugo
---

Nest.jsで作成したアプリをHugoで作成したブログに公開したい。 [^1]

<!--more-->

### 解決策

Next.jsでアプリを`Static Export`し、その結果を Hugoの`static`ディレクトリに格納すれば良い。

手順を、Nest.jsで作成したアプリ [^2] を`static/tictactoe`に格納する場合を例にして説明する。

1. Next.jsのプロジェクト内で、`next.config.js`に以下を設定し、

    ~~~js
    /** @type {import('next').NextConfig} */
    const nextConfig = {
        output: 'export',
        basePath: '/portfolio/tictactoe',
    }

    module.exports = nextConfig
    ~~~

2. `npm run build`を実行する
3. `out`ディレクトリに`Static Export`された結果が格納される
4. `out`ディレクトリをHugoの`static`配下にコピーする

    ~~~shell
    cp -r ./out ~/blog/static/tictactoe
    ~~~

5. Hugoのサイトへ移動し、サーバーを起動する

   ~~~shell
   $ cd ~/blog
   $ hugo server
   Web Server is available at http://localhost:1313/portfolio/ (bind address 127.0.0.1)
   Press Ctrl+C to stop
   ~~~

6. [http://localhost:1313/portfolio/tictactoe/](http://localhost:1313/portfolio/tictactoe/)にアクセスするとアプリが表示される

7. `hugo`でスタティックサイトを生成し、GitHubにプッシュすると [https://kantas-spike.github.io/portfolio/tictactoe/](https://kantas-spike.github.io/portfolio/tictactoe/)でアプリを表示できる。

### 参考

- [Static Export した Tic-Tac-Toeを Hugoで公開したい · kantas-spike/learn_react · GitHub](https://github.com/kantas-spike/learn_react/blob/main/memo/03-02_react_tutorial_tic-tac-toe.md#static-export-%E3%81%97%E3%81%9F-tic-tac-toe%E3%82%92-hugo%E3%81%A7%E5%85%AC%E9%96%8B%E3%81%97%E3%81%9F%E3%81%84)
- [Deploying: Static Exports | Next.js](https://nextjs.org/docs/app/building-your-application/deploying/static-exports)
- [next.config.js Options: basePath | Next.js](https://nextjs.org/docs/app/api-reference/next-config-js/basePath)
- [Deploying: Static Exports - Unsupported Features | Next.js](https://nextjs.org/docs/app/building-your-application/deploying/static-exports#unsupported-features)

[^1]: Reactでアプリを作成しようと勉強中。その中でReactは生で使わずにフレームワークを使うように推奨されていたので、Next.jsを使うようにした。
[^2]: [Tutorial: Tic-Tac-Toe – React](https://react.dev/learn/tutorial-tic-tac-toe)を[Next.jsを利用して実装](https://github.com/kantas-spike/learn_react/tree/main/exercises/03-02_react_tutorial_tic-tac-toe)