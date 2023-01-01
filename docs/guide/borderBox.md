---
sidebarDepth: 2
---

# 边框

边框均由**SVG**元素绘制，体积轻量不失真，它们的使用极为方便。<react-page-btn />

::: tip 边框内布局
边框组件默认宽高均为 100%，边框内部的节点将被 slot 插槽分发至边框组件下 class 为`border-box-content`的容器内，如有布局需要，请针对该容器布局，以免产生样式冲突，导致边框显示异常。
:::

::: warning 注意事项
建议把边框内的节点封装成**组件**，**以组件的形式置入边框**。这是因为 slot 的渲染机制较为特殊，如果你要在组件 mounted 后对边框内置入的节点进行页面渲染状态敏感的操作（获取 DOM 宽高，实例化 echarts 图表等），可能会发生非预期的结果。比如获取的 DOM 宽高为 0，封装成组件后可避免这种情况。
:::

::: tip 重置宽高
如果边框组件的父容器宽高发生了变化，而边框组件没有侦知这一变化，边框就无法自适应父容器宽高。针对这种情况，你可以给边框绑定 key 值，在父容器宽高发生变化且完成渲染后更改 key 值，强制销毁边框组件实例并重新渲染，重新获取宽高。但这会造成边框内的组件同样被销毁重新渲染，这会带来额外的性能消耗，并导致组件状态丢失，此时我们可以调用组件内置的`initWH`方法去重置边框组件的宽高以避免销毁实例重新渲染带来的非预期副作用。
:::

## 自定义颜色

所有边框均支持自定义颜色及背景色，配置项及示例如下。

```html
<BorderBox1 :color="['red', 'green']" backgroundColor="blue">BorderBox1</BorderBox1>
```

<FullWidthTable>

|      属性       |    说明    |    类型    | 可选值 | 默认值 |
| :-------------: | :--------: | :--------: | :----: | :----: |
|      color      | 自定义颜色 | `string[]` |  `-`   |  `-`   |
| backgroundColor |   背景色   |  `string`  |  `-`   |  `-`   |

</FullWidthTable>

::: tip TIP
`color`属性支持配置两个颜色，一主一副。

颜色类型可以为颜色关键字、十六进制色、RGB 及 RGBA。
:::

## BorderBox1

<div class="border-box-contaier">
  <BorderBox1>BorderBox1</BorderBox1>
</div>

```html
<BorderBox1>BorderBox1</BorderBox1>
```

<CopyBtn :info="info1" />

## BorderBox2

<div class="border-box-contaier">
  <BorderBox2>BorderBox2</BorderBox2>
</div>

```html
<BorderBox2>BorderBox2</BorderBox2>
```

<CopyBtn :info="info2" />

## BorderBox3

<div class="border-box-contaier">
  <BorderBox3>BorderBox3</BorderBox3>
</div>

```html
<BorderBox3>BorderBox3</BorderBox3>
```

<CopyBtn :info="info3" />

## BorderBox4

<div class="border-box-contaier">
  <BorderBox4>BorderBox4</BorderBox4>
</div>

```html
<BorderBox4>BorderBox4</BorderBox4>
```

<CopyBtn :info="info4" />

## BorderBox4(reverse)

<div class="border-box-contaier">
  <BorderBox4 :reverse="true">BorderBox4</BorderBox4>
</div>

```html
<BorderBox4 :reverse="true">BorderBox4</BorderBox4>
```

与上边的边框组件略有不同的是，该组件具有翻转形态，你只需要设置 reverse 属性为 true 即可

<CopyBtn :info="info4Reverse" />

## BorderBox5

<div class="border-box-contaier">
  <BorderBox5>BorderBox5</BorderBox5>
</div>

```html
<BorderBox5>BorderBox5</BorderBox5>
```

<CopyBtn :info="info5" />

## BorderBox5(reverse)

<div class="border-box-contaier">
  <BorderBox5 :reverse="true">BorderBox5</BorderBox5>
</div>

```html
<BorderBox5 :reverse="true">BorderBox5</BorderBox5>
```

<CopyBtn :info="info5Reverse" />

## BorderBox6

<div class="border-box-contaier">
  <BorderBox6>BorderBox6</BorderBox6>
</div>

```html
<BorderBox6>BorderBox6</BorderBox6>
```

<CopyBtn :info="info6" />

## BorderBox7

<div class="border-box-contaier">
  <BorderBox7>BorderBox7</BorderBox7>
</div>

```html
<BorderBox7>BorderBox7</BorderBox7>
```

<CopyBtn :info="info7" />

## BorderBox8

<div class="border-box-contaier">
  <BorderBox8>BorderBox8</BorderBox8>
</div>

```html
<BorderBox8>BorderBox8</BorderBox8>
```

<CopyBtn :info="info8" />

### 特殊配置

<full-width-table>
属性|说明|类型|可选值|默认值
:--:|:--:|:--:|:--:|:--:
dur|单次动画时长(秒)|`Number`|`-`|`3`
</full-width-table>

## BorderBox8(reverse)

<div class="border-box-contaier">
  <BorderBox8 :reverse="true">BorderBox8</BorderBox8>
</div>

```html
<BorderBox8 :reverse="true">BorderBox8</BorderBox8>
```

<CopyBtn :info="info8Reverse" />

## BorderBox9

<div class="border-box-contaier">
  <BorderBox9>BorderBox9</BorderBox9>
</div>

```html
<BorderBox9>BorderBox9</BorderBox9>
```

<CopyBtn :info="info9" />

## BorderBox10

<div class="border-box-contaier">
  <BorderBox10>BorderBox10</BorderBox10>
</div>

```html
<BorderBox10>BorderBox10</BorderBox10>
```

<CopyBtn :info="info10" />

## BorderBox11

<div class="border-box-contaier">
  <BorderBox11 title="BorderBox11" >BorderBox11</BorderBox11>
</div>

```html
<BorderBox11 title="BorderBox11">BorderBox11</BorderBox11>
```

<CopyBtn :info="info11" />

### 特殊配置

<full-width-table>
属性|说明|类型|可选值|默认值
:--:|:--:|:--:|:--:|:--:
title|边框标题|`String`|`-`|`''`
titleWidth|标题宽度|`Number`|`-`|`250`
</full-width-table>

## BorderBox12

<div class="border-box-contaier">
  <BorderBox12>BorderBox12</BorderBox12>
</div>

```html
<BorderBox12>BorderBox12</BorderBox12>
```

<CopyBtn :info="info12" />

## BorderBox13

<div class="border-box-contaier">
  <BorderBox13>BorderBox13</BorderBox13>
</div>

```html
<BorderBox13>BorderBox13</BorderBox13>
```

<CopyBtn :info="info13" />

<script>
export default {
  data () {
    return {
      info1: `<BorderBox1>BorderBox1</BorderBox1>`,
      info2: `<BorderBox2>BorderBox2</BorderBox2>`,
      info3: `<BorderBox3>BorderBox3</BorderBox3>`,
      info4: `<BorderBox4>BorderBox4</BorderBox4>`,
      info4Reverse: `<BorderBox4 :reverse="true">BorderBox4</BorderBox4>`,
      info5: `<BorderBox5>BorderBox5</BorderBox5>`,
      info5Reverse: `<border-box-5 :reverse="true">BorderBox5</BorderBox5>`,
      info6: `<BorderBox6>BorderBox6</BorderBox6>`,
      info7: `<BorderBox7>BorderBox7</BorderBox7>`,
      info8: `<BorderBox8>BorderBox8</BorderBox8>`,
      info8Reverse: `<BorderBox8 :reverse="true">BorderBox8</BorderBox8>`,
      info9: `<BorderBox9>BorderBox9</BorderBox9>`,
      info10: `<BorderBox10>BorderBox10</BorderBox10>`,
      info11: `<BorderBox11 title="BorderBox11">BorderBox11</BorderBox11>`,
      info12: `<BorderBox12>BorderBox12</BorderBox12>`,
      info13: `<BorderBox13>BorderBox13</BorderBox13>`,
    }
  }
}
</script>

<style lang="less">
.border-box-contaier {
  height: 300px;
  padding: 30px;
  overflow: hidden;
  box-sizing: border-box;
  background-color: #282c34;

  .border-box-content {
    display: flex;
    justify-content: center;
    align-items: center;
    color: #46bd87;
    font-weight: bold;
  }

  .BorderBox11-title {
    font-weight: bold;
    fill: #8cacf9;
  }
}
</style>
