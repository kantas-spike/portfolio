---
title: "`Static Export`したNext.jsアプリをGitHub Pagesで表示できない"
date: 2023-07-10T01:17:23+09:00
draft: false
tags:
- GitHub
- hugo
---

`Static Export`したNext.jsアプリをGitHub Pagesで表示できない。

どうやら`_next/`配下のファイルを表示できないようだ。

<!--more-->

### 解決策

`docs/.nojekyll`ファイルを作成し、GitHub Pagesで Jekyllの処理を禁止すると良い。[^1]
そのために、Hugoのサイト(or テーマ)に`static/.nojekyll`を作成する。

GitHub Pagesでホスティングされたサイトは、デフォルトでは[Jekyll](https://jekyllrb.com/)により処理されるようだ。

Jekyllは`_`をプレフィックスにもつファイルやディレクトリを除外する。
そのため、`_next/`配下のファイルが表示されなくなった。

本ブログはHugoを利用しており、Jekyllは不要であるため、
`docs/.nojekyll`ファイルを追加し、GitHub PagesにJekyllを利用しないように指示する。

### 参考

- [`next export` static pages are unable to be loaded when deployed to github pages · Issue #27302 · vercel/next.js](https://github.com/vercel/next.js/issues/27302)
- [GitHub Pagesで普通の静的ホスティングをしたいときは .nojekyll ファイルを置く - Qiita](https://qiita.com/sky_y/items/b96ae52c90457bcd7846)
- [GitHub Pages について - 静的サイト ジェネレーター | GitHub Docs](https://docs.github.com/ja/pages/getting-started-with-github-pages/about-github-pages#static-site-generators)
- [Directory Structure | Jekyll • Simple, blog-aware, static sites](https://jekyllrb.com/docs/structure/)

[^1]: `.nojekyll`は空のファイルで良い