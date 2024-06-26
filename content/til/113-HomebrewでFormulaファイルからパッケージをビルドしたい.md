---
title: "Homebrewで Formulaファイルからパッケージをビルドしたい"
date: 2024-06-25T11:19:51+09:00
draft: false
tags:
  - homebrew
  - ffmpeg
---

Homebrewで Formulaファイルからパッケージをビルドしたい。

<!--more-->

### 解決策

```shell
brew install --build-from-source --formula Formulaファイル.rb
```

### 参考

- [ruby - How do I install a software via Homebrew from .rb file - Stack Overflow](https://stackoverflow.com/questions/75609300/how-do-i-install-a-software-via-homebrew-from-rb-file)
- [homebrew-core/Formula/f/ffmpeg.rb at master · Homebrew/homebrew-core](https://github.com/Homebrew/homebrew-core/blob/master/Formula/f/ffmpeg.rb)
- [homebrew-ffmpeg/README.md at master · kantas-spike/homebrew-ffmpeg](https://github.com/kantas-spike/homebrew-ffmpeg/blob/master/README.md)
