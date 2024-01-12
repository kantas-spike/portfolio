---
title: "BlenderのaddonでRGBAカラーのプロパティーを定義したい"
date: 2024-01-12T23:11:31+09:00
draft: false
tags:
  - python
  - blender
  - blender-addon
---

Blenderのaddonで、RGBカラーを選択させたい場合、`subtype="COLOR"`を指定した`bpy.props.FloatVectorProperty`を定義しパネルに配置すれば良い。

同様の方法で、RGBAカラーをパネルで選択させたい。

<!--more-->

#### RGBカラーのイメージ

```python
# RGB色用プロパティーの定義
bpy.types.Object.rgb_color = bpy.props.FloatVectorProperty(
        subtype="COLOR",
        min=0,
        max=1.0,
        name="色",
        description="縁取りの色",
        default=(1.0, 1.0, 1.0) #<= (r, g, b)の値を指定

# パネル
class HelloWorldPanel(bpy.types.Panel):
    bl_idname = "OBJECT_PT_hello_world"
    bl_space_type = "SEQUENCE_EDITOR"
    bl_region_type = "UI"
    bl_category = "SRT Loader"
    bl_label = "Hello World"

    def draw(self, context):
        obj = bpy.data.objects[0]
        self.layout.prop(obj, "rgb_color", text="")
```

### 解決策

以下のように明示的に`size=4`を指定した`bpy.props.FloatVectorProperty`を定義しパネルに配置すれば良い。

#### RGBAカラーのイメージ

```python
# RGB色用プロパティーの定義
bpy.types.Object.rgba_color = bpy.props.FloatVectorProperty(
        subtype="COLOR",
        min=0,
        max=1.0,
        size=4,  #<= sizeを`4`と明記. デフォルトは`3`になっている。
        name="色",
        description="縁取りの色",
        default=(1.0, 1.0, 1.0, 0.5) #<= (r, g, b, a)の値を指定

# パネル
class HelloWorldPanel(bpy.types.Panel):
    bl_idname = "OBJECT_PT_hello_world"
    bl_space_type = "SEQUENCE_EDITOR"
    bl_region_type = "UI"
    bl_category = "SRT Loader"
    bl_label = "Hello World"

    def draw(self, context):
        obj = bpy.data.objects[0]
        self.layout.prop(obj, "rgba_color", text="")
```

### 参考

- [python - How controll RGB node with FloatVectorProperty (Blender 2.8) - Blender Stack Exchange](https://blender.stackexchange.com/questions/141333/how-controll-rgb-node-with-floatvectorproperty-blender-2-8)
- [bpy.props.FloatVector... # Property Definitions (bpy.props) — Blender Python API](https://docs.blender.org/api/current/bpy.props.html#bpy.props.FloatVectorProperty)
  - [Property Subtype Number Array Items — Blender Python API](https://docs.blender.org/api/current/bpy_types_enum_items/property_subtype_number_array_items.html#rna-enum-property-subtype-number-array-items)
