# 介绍

组件库基于 Vue3<ReactPageBtn />，主要用于构建大屏（**全屏**）数据展示页面即**数据可视化**，具有多种类型组件可供使用：

- **边框**

带有不同边框的容器

- **装饰**

用来点缀页面效果，增加视觉效果

- **图表**

Work In Progress

- **其他**

Work In Progress

## 用前必看

使用前应阅读以下提示，这样出现相应问题后可以快速解决

::: tip Alpha
目前还处于 Alpha 阶段，所有的 API 及 Props 都可能在后续迭代中发生变化
:::

::: tip 兼容性
组件库的开发和调试都使用 Chrome 浏览器，没有时间和精力做其他浏览器的兼容，尤其是 IE

所以请使用 Chrome 浏览器
:::

::: warning 宽高异常
组件的默认宽高都是 100%，可以根据父容器宽高进行自适应，但在某些情况下组件宽高可能表现异常，这种情况一般是因为组件的父容器宽高发生了变化，而组件没有侦知这一变化，你可以在组件上绑定 key 值，在更改父容器宽高且页面完成重绘后，更新 key 值，使组件强制刷新，以获取正确宽高，或者显式设置组件宽高。
:::

## 安装

- **步骤 1**：在 Vue3 项目下进行组件库安装 [(如何创建 Vue3 项目？ → Vue 官网)](https://cn.vuejs.org/)

```sh
cd vue3-project
```

- **步骤 2**：将@dataview/datav-vue3 安装为本地依赖

:::: code-group
::: code-group-item NPM

```bash:no-line-numbers
npm install @dataview/datav-vue3
```

:::

::: code-group-item YARN

```bash:no-line-numbers
yarn add @dataview/datav-vue3
```

:::

::: code-group-item PNPM

```bash:no-line-numbers
pnpm install @dataview/datav-vue3
```

:::
::::

## 使用

在引入 DataV 时，可以传入一个包含 `classNamePrefix` 属性的全局配置对象，
`classNamePrefix` 用于配置组件库 class 前缀，默认为 `dv-`

> 也可以使用组件库导出的 _setClassNamePrefix_ 方法来设置 class 前缀

### 完整引入

```ts :no-line-numbers
import { createApp } from 'vue';
import DataV, { setClassNamePrefix } from '@dataview/datav-vue3';
import App from './App.vue';

const app = createApp(App);
app.use(DataV, { classNamePrefix: 'dv-' });

// setClassNamePrefix('dv-')
```

### 按需引入

```vue :no-line-numbers
<script setup lang="ts">
import { BorderBox1 } from '@dataview/datav-vue3';
</script>

<template>
  <BorderBox1 class="container"> Content </BorderBox1>
</template>

<style>
.container {
  width: 500px;
  height: 200px;
}
</style>
```

### UMD / CDN

```html :no-line-numbers
<script src="https://unpkg.com/@dataview/datav-vue3@latest/umd/datav.umd.js"></script>
```

这里我们使用了 [unpkg](https://unpkg.com/)，但你也可以使用任何提供 npm 包服务的 CDN，例如 [jsdelivr](https://www.jsdelivr.com/) 或 [cdnjs](https://cdnjs.com/)。当然，你也可以下载此文件并自行提供服务。

<FoldBox title="查看 UMD 使用示例">

@[code html:no-line-numbers](./umdExample.html)

</FoldBox>
