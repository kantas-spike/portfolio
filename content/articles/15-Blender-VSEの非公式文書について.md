---
title: "Blender VSE 非公式文書について"
date: 2024-03-28T13:39:00+09:00
draft: false
useMermaid: true
tags:
  - blender
  - vse
---

[Blender VSE Unofficial Docs — Blender VSE Unofficial Documentation documentation](https://vse-docs.readthedocs.io/)という、
Blender VSEの学習に良さそうな文書を見つけましたので紹介します。

<!--more-->

### はじめに

私は、Blenderの _Video Sequence Editor(略称: VSE)_ を使って動画編集しています。

なんとなく使えるようになりましたが、もっと、ちゃんと、さくっと、VSEを使えるようになりたいです。

まずは、公式の情報にあたりました。ドキュメントは、以下にあります。

```column {title="Blender リファレンスマニュアル"}
[Blender 4.0 Reference Manual — Blender Manual](https://docs.blender.org/manual/en/latest/)
```

しかし、公式のリファレンスは、UIのメニューやボタンの説明が中心のため、動画編集という作業の流れに沿った説明がありません。
初心者には、ハードルが高いです。

いろいろ調べていくうちに、良さそうな文書をみつけました。

```column {title="Blender Vse 非公式文書"}
[Blender VSE Unofficial Docs — Blender VSE Unofficial Documentation documentation](https://vse-docs.readthedocs.io/)
```

この記事では、この非公式文書について紹介します。

### Blender VSE 非公式文書 とは

[Blender VSE Unofficial Docs — Blender VSE Unofficial Documentation documentation](https://vse-docs.readthedocs.io/) は、
Blenderの公式リファレンスマニュアルのVSE部分を、追記、再構成した文書です。

[hug-sch/vse-docs](https://github.com/hug-sch/vse-docs)でメンテナンスされています。

公式のBlenderリファレンス文書よりも、よりワークフロー思考のアプローチで記載されています。

```column {title="Blender VSE 非公式文書の章立て"}
1. Video Sequence Editor

   - VSEの使い方を説明

2. Video Editing

   - 『セットアップ』、『編集』、『レンダリング』という **ワークフロー** に沿ってVSEの使い方を説明

3. Extra tools

   - 動画編集で必要になるBlender以外の追加ツールについて説明
```

**「1. Video Sequence Editor」** と **「2. Video Editing」** は、どちらも VSEの使い方の説明ですが、以下の方針で分類されています。

```column
- エディター内の操作に関するもの(メニュー、オーバーレイ、ディスプレイモード...)は **Video Sequence Editor** セクションで説明
- エディターデータ(例えば、VSEの場合はストリップ)の操作に関わるものは、**Video Editing** セクションで説明
```

まずは、 動画編集のワークフローに沿って説明されている **「2. Video Editing」** から読みすすめるのが良いと思います。
そのなかで、必要に応じて、 **「1. Video Sequence Editor」** を参照し、VSEの使い方を確認していきましょう。

### 感想

この非公式文書を 翻訳ツールなどで翻訳しながら、ざっと読んでみました。
ざっくり翻訳版を以下に置いています。(勉強しながら、コツコツ修正・追記していく予定です。)

```column {title="ざっくり翻訳版"}
[Blender VSE 非公式文書 — Blender VSE Unofficial Documentation ドキュメント](https://kantas-spike.github.io/vse-docs/)
```

いくつか短所もありますが、ワークフローベースでVSEを説明してくれるので、公式リファレンスと比較すると大変わかりやすいです。

良い点、悪い点を以下になります。

#### 良い点

1. 公式のリファレンスに比べて、理解しやすい構成

   **「2. Video Editing」** に、動画編集のワークフローの説明と、それに沿った操作説明があり、
   動画編集の作業をイメージしながら読むことができます。

   ````column {title="動画編集のワークフロー" icon="🖼️"}
   ```mermaid {align="center"}
   flowchart LR
   f1["セットアップ"]
   f2["編集"]
   f3["レンダリング"]

   f1 --> f2 --> f3
   ```
   ````

   **「1. Video Sequence Editor」** よりも、 **「2. Video Editing」** を先に読む方が良さそうです。

   ```

   ```

2. **「2.2.2.2. グリースペンシルによる注釈」** がおもしろい

   公式のリファレンスには記載のない、グリースペンシルを利用した注釈の作成方法が追記されています。
   このノウハウは、いつかやってみたいです。

3. 見逃がしていた機能を知ることができる

   これまで何となく使っていた操作の詳細な説明があるので、
   いままで使ってきた操作に別のオプションがあることや、もっと便利な操作方法を知ることができます。

#### 残念な点

- 情報が古い部分がある(チャンネル数の上限など Blender2.x? 頃の記載がある。)
- 作成途中と思われ、未記載の部分が多々ある

  以下は未記載

  - 2.2.3.2. Color grading > Modifiers
  - 2.3. Render your project

### まとめ

[Blender VSE Unofficial Docs — Blender VSE Unofficial Documentation documentation](https://vse-docs.readthedocs.io/)を紹介しました。

動画編集のワークフローに沿った説明がわかりやすいです。
そして、非公式文書で未記載の部分や、古い内容については、自分で勉強して 「ざっくり翻訳版」 に追記してたりして、VSEをもっと学んでいきたいです。

また、非公式文書をもとに、具体的な例を使って、説明動画を作成したいと思います。

### 参照

- [Blender 4.0 Reference Manual — Blender Manual](https://docs.blender.org/manual/en/latest/)
- [Blender VSE Unofficial Docs — Blender VSE Unofficial Documentation documentation](https://vse-docs.readthedocs.io/index.html)
  - [hug-sch/vse-docs](https://github.com/hug-sch/vse-docs)
  - ざっくり日本語翻訳版
    - [Blender VSE 非公式文書 — Blender VSE Unofficial Documentation ドキュメント](https://kantas-spike.github.io/vse-docs/index.html)
      - [kantas-spike/vse-docs](https://github.com/kantas-spike/vse-docs)
