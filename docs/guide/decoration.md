---
sidebarDepth: 2
---

# 装饰

你可以使用装饰去点缀你的页面，以增强视觉效果，与边框组件相同，他们也是用**SVG**元素绘制的。<ReactPageBtn />

## 自定义颜色

所有装饰均支持自定义颜色，配置项及示例如下。

```vue :no-line-numbers
<Decoration1 :color="['red', 'green']" />
```

<FullWidthTable>

| 属性  |    说明    |    类型    | 可选值 | 默认值 |
| :---: | :--------: | :--------: | :----: | :----: |
| color | 自定义颜色 | `string[]` |  `-`   |  `-`   |

</FullWidthTable>

::: tip TIP
`color`属性支持配置两个颜色，一主一副。

颜色类型可以为颜色关键字、十六进制色、RGB 及 RGBA。
:::

## Decoration1

<div class="decoration-container">
  <Decoration1 style="width:200px; height:50px;" />
</div>

```vue :no-line-numbers
<Decoration1 style="width:200px; height:50px;" />
```

<CopyBtn :info="info1" />

## Decoration2

### Normal

<div class="decoration-container">
  <Decoration2 style="width:200px; height:5px;" />
</div>

```vue :no-line-numbers
<Decoration2 style="width:200px; height:5px;" />
```

<CopyBtn :info="info2" />

### Reverse

<div class="decoration-container">
  <Decoration2 :reverse="true" style="width:5px; height:150px;" />
</div>

```vue :no-line-numbers
<Decoration2 :reverse="true" style="width:5px; height:150px;" />
```

<CopyBtn :info="info2r" />

### 配置

<FullWidthTable>

|   属性   |       说明       |   类型    | 可选值 | 默认值  |
| :------: | :--------------: | :-------: | :----: | :-----: |
| duration | 单次动画时长(秒) | `number`  |  `-`   |   `6`   |
| reverse  |     反转渲染     | `boolean` |  `-`   | `false` |

</FullWidthTable>

## Decoration3

<div class="decoration-container">
  <Decoration3 style="width:250px; height:30px;" />
</div>

```vue :no-line-numbers
<Decoration3 style="width:250px; height:30px;" />
```

<CopyBtn :info="info3" />

## Decoration4

### Normal

<div class="decoration-container">
  <Decoration4 style="width:5px; height:150px;" />
</div>

```vue :no-line-numbers
<Decoration4 style="width:5px; height:150px;" />
```

<CopyBtn :info="info4" />

### Reverse

<div class="decoration-container">
  <Decoration4 :reverse="true" style="width:250px; height:5px;" />
</div>

```vue :no-line-numbers
<Decoration4 :reverse="true" style="width:250px; height:5px;" />
```

<CopyBtn :info="info4r" />

### 配置

<FullWidthTable>

|   属性   |       说明       |   类型    | 可选值 | 默认值  |
| :------: | :--------------: | :-------: | :----: | :-----: |
| duration | 单次动画时长(秒) | `number`  |  `-`   |   `3`   |
| reverse  |     反转渲染     | `boolean` |  `-`   | `false` |

</FullWidthTable>

## Decoration5

<div class="decoration-container">
  <Decoration5 style="width:300px; height:40px;" />
</div>

```vue :no-line-numbers
<Decoration5 style="width:300px; height:40px;" />
```

<CopyBtn :info="info5" />

### 配置

<FullWidthTable>

|   属性   |       说明       |   类型   | 可选值 | 默认值 |
| :------: | :--------------: | :------: | :----: | :----: |
| duration | 单次动画时长(秒) | `number` |  `-`   | `1.2`  |

</FullWidthTable>

## Decoration6

<div class="decoration-container">
  <Decoration6 style="width:300px; height:30px;" />
</div>

```vue :no-line-numbers
<Decoration6 style="width:300px; height:30px;" />
```

<CopyBtn :info="info6" />

## Decoration7

<div class="decoration-container font1">
  <Decoration7 style="width:150px; height:30px;">Decoration</Decoration7>
</div>

```vue :no-line-numbers
<Decoration7 style="width:150px; height:30px;">Decoration</Decoration7>
```

<CopyBtn :info="info7" />

## Decoration8

### Normal

<div class="decoration-container">
  <Decoration8 style="width:300px; height:50px;" />
</div>

```vue :no-line-numbers
<Decoration8 style="width:300px; height:50px;" />
```

### Reverse

<div class="decoration-container">
  <Decoration8 :reverse="true" style="width:300px; height:50px;" />
</div>

```vue :no-line-numbers
<Decoration8 :reverse="true" style="width:300px; height:50px;" />
```

<CopyBtn :info="info8r" />

### 配置

<FullWidthTable>

|  属性   |   说明   |   类型    | 可选值 | 默认值  |
| :-----: | :------: | :-------: | :----: | :-----: |
| reverse | 反转渲染 | `boolean` |  `-`   | `false` |

</FullWidthTable>

<CopyBtn :info="info8" />

## Decoration9

<div class="decoration-container font2">
  <Decoration9 style="width:150px; height:150px;">66%</Decoration9>
</div>

```vue :no-line-numbers
<Decoration9 style="width:150px; height:150px;">66%</Decoration9>
```

<CopyBtn :info="info9" />

### 配置

<FullWidthTable>

|   属性   |       说明       |   类型   | 可选值 | 默认值 |
| :------: | :--------------: | :------: | :----: | :----: |
| duration | 单次动画时长(秒) | `number` |  `-`   |  `3`   |

</FullWidthTable>

## Decoration10

<div class="decoration-container font2">
  <Decoration10 style="width:90%; height:5px;" />
</div>

```vue :no-line-numbers
<Decoration10 style="width:90%; height:5px;" />
```

<CopyBtn :info="info10" />

## Decoration11

<div class="decoration-container font1">
  <Decoration11 style="width:200px; height:60px;">Decoration11</Decoration11>
</div>

```vue :no-line-numbers
<Decoration11 style="width:200px; height:60px;">Decoration11</Decoration11>
```

<CopyBtn :info="info11" />

## Decoration12

<div class="decoration-container font1">
  <Decoration12 style="width:150px; height:150px;" />
</div>

```vue :no-line-numbers
<Decoration12 style="width:150px; height:150px;" />
```

<CopyBtn :info="info12" />

### 配置

<FullWidthTable>

|     属性     |       说明       |   类型   | 可选值 | 默认值 |
| :----------: | :--------------: | :------: | :----: | :----: |
| scanDuration | 扫描动画时长(秒) | `number` |  `-`   |  `3`   |
| haloDuration | 光晕动画时长(秒) | `number` |  `-`   |  `2`   |

</FullWidthTable>

<script>
  export default {
    data () {
      return {
        info1: `<Decoration1 style="width:200px; height:50px;" />`,
        info2: `<Decoration2 style="width:200px; height:5px;" />`,
        info2r: `<Decoration2 :reverse="true" style="width:5px; height:150px;" />`,
        info3: `<Decoration3 style="width:250px; height:30px;" />`,
        info4: `<Decoration4 style="width:5px; height:150px;" />`,
        info4r: `<Decoration4 :reverse="true" style="width:250px; height:5px;" />`,
        info5: `<Decoration5 style="width:300px; height:40px;" />"`,
        info6: `<Decoration6 style="width:300px; height:30px;" />`,
        info7: `<Decoration7 style="width:150px; height:30px;">Decoration</Decoration7>`,
        info8: `<Decoration8 style="width:300px; height:50px;" />`,
        info8r: `<Decoration8 :reverse="true" style="width:300px; height:50px;" />`,
        info9: `<Decoration9 style="width:150px; height:150px;">66%</Decoration9>`,
        info10: `<Decoration10 style="width:90%; height:5px;" />`,
        info11: `<Decoration11 style="width:200px; height:60px;">Decoration11</Decoration11>`,
        info12: `<Decoration12 style="width:150px; height:150px;" />`
      }
    }
  }
</script>

<style lang="less">
.decoration-container {
  position: relative;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #282c34;
  overflow: hidden;
  color: #fff;
}

.font1 {
  color: #7ec699;
  font-weight: bold;
}

.font2 {
  color: #7ec699;
  font-size: 28px;
  font-weight: bold;
  text-shadow: 0 0 3px #7acaec;
}
</style>
