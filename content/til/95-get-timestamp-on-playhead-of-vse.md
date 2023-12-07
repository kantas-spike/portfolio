---
title: "BlenderのVSEのプレイヘッドのタイムスタンプを取得したい"
date: 2023-12-07T21:09:45+09:00
draft: false
tags:
  - python
  - blender
  - blender-addon
---

Blenderで動画編集時に[SubRip](https://ja.wikipedia.org/wiki/SubRip)形式の字幕ファイルも編集したいので、
**Video Sequence Editor** のプレイヘッドのタイムスタンプを取得したい。

<!--more-->

やりたいことは以下になる。

- VSEのコンテキストメニューから呼び出したい
- タイムスタンプをクリップボードにコピーしたい
  - プレイヘッドの位置(フレーム番号)をタイムスタンプに変換したい

### 解決策

実現方法を整理する

#### VSEのコンテキストメニューを拡張する

`SEQUENCER_MT_context_menu`がVSEのコンテキストメニューのようだ。

以下でメニューを追加可能

```python
def menu_fn(self, context):
    self.layout.separator()
    self.layout.operator(xx.bl_idname) # オペレーターは要実装

bpy.types.SEQUENCER_MT_context_menu.append(menu_fn)
```

#### アドオン内でクリップボードに文字列をコピーする

[clipboard # WindowManager(ID) — Blender Python API](https://docs.blender.org/api/current/bpy.types.WindowManager.html#bpy.types.WindowManager.clipboard)

```python
timestamp = "00:00:00,123"
context.window_manager.clipboard = timestamp # timestampがクリップボードにコピーされる
```

#### プレイヘッドが指しているフレームナンバーを取得する

以下で取得できる。

```python
cur_frame = bpy.context.scene.frame_current
```

#### フレームNoをタイムスタンプに変換する

フレームNoを秒に変換するためには、フレームレートを知る必要がある。

VSEでは以下で、フレームレートが計算できるようだ。

```python
frame_rate = bpy.context.scene.render.fps / bpy.context.scene.render.fps_base
```

あとは、以下でフレームNoを`timedelta`に変換できる。

```python
sec = cur_frame / frame_rate
dlt = datetime.timedelta(seconds=sec)
```

#### 実装例

[srt_loader/**init**.py at main · kantas-spike/srt_loader](https://github.com/kantas-spike/srt_loader/blob/main/__init__.py#L181)に実装。

以下はメニュー部分のみ抜粋

```python
import bpy
import datetime

class StrLoaderGetTimestampOfPlayhead(bpy.types.Operator):
    bl_idname = "srt_loader.copy_timestamp_of_playhead"
    bl_label = "Copy playhead timestamp"
    bl_description = "Playheadのタイムスタンプを取得する"

    @classmethod
    def poll(cls, context):
        return context.space_data.view_type == "SEQUENCER"

    def format_srt_timestamp(self, delta):
        m, s = divmod(delta.seconds, 60)
        h, m = divmod(m, 60)
        return "{:02}:{:02}:{:02},{:03}".format(
            h, m, s, round(delta.microseconds / 1000)
        )

    def execute(self, context):
        frame_rate = bpy.context.scene.render.fps / bpy.context.scene.render.fps_base
        cur_frame = bpy.context.scene.frame_current
        delta = datetime.timedelta(seconds=(cur_frame / frame_rate))
        timestamp = self.format_srt_timestamp(delta)
        print(
            f"frame_rate: {frame_rate}, cur_frame: {cur_frame}, timestamp: {timestamp}"
        )
        self.report({"INFO"}, timestamp)
        context.window_manager.clipboard = timestamp
        return {"FINISHED"}

def menu_fn(self, context):
    self.layout.separator()
    self.layout.operator(StrLoaderGetTimestampOfPlayhead.bl_idname)


classes = [
    StrLoaderGetTimestampOfPlayhead,
]

def register():
    for c in classes:
        bpy.utils.register_class(c)
    bpy.types.SEQUENCER_MT_context_menu.append(menu_fn)


def unregister():
    bpy.types.SEQUENCER_MT_context_menu.remove(menu_fn)
    for c in classes:
        bpy.utils.unregister_class(c)


if __name__ == "__main__":
    register()

```

### 参考

- [clipboard # WindowManager(ID) — Blender Python API](https://docs.blender.org/api/current/bpy.types.WindowManager.html#bpy.types.WindowManager.clipboard)
- [Blenderでシェイプキー名一覧を取得・一覧から空のシェイプキーを作成 #Python - Qiita](https://qiita.com/yukimituki11/items/e40d4d5f7cc21e2b7c4b)
- [python - VSE playhead position variable - Blender Stack Exchange](https://blender.stackexchange.com/questions/71729/vse-playhead-position-variable)
- [python - What does this do: fps = scene.render.fps / scene.render.fps_base? - Blender Stack Exchange](https://blender.stackexchange.com/questions/193754/what-does-this-do-fps-scene-render-fps-scene-render-fps-base)
  [blender/scripts/startup/bl_ui/space_sequencer.py at 9c0bffcc89f174f160805de042b00ae7c201c40b · blender/blender](https://github.com/blender/blender/blob/9c0bffcc89f174f160805de042b00ae7c201c40b/scripts/startup/bl_ui/space_sequencer.py#L1113)
