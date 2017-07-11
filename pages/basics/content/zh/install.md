---
title:　安装
---

这个模块是通过[node](https://nodejs.org)打包然后用[npm](https://www.npmjs.com/)发布的，使用时作为你的项目的依赖之一安装。

```bash
npm install --save glamorous
```

`glamorous`依赖`react`和`glamor`，所以如果之前没有安装这些模块的话，你还得在你的项目里面安装他们。

```bash
npm install --save react glamor
```

> 备注：如果你使用的React版本在15.5或者更高，你还需要安装`prop-types`：`npm install --save prop-types`

你可以使用下面任何一种模块格式

- `main`: `dist/glamorous.cjs.js` - 通过CommonJS模块的形式导出
- `global`: `dist/glamorous.umd.js` and `dist/glamorous.umd.min.js` - 通过umd模块的形式导出，可以在几种环境中使用，最常见的是作为全局变量使用
- `jsnext:main` and module: `dist/glamorous.es.js` - exports itself using the ES modules specification, you'll need to configure webpack to make use of this file do this using the resolve.mainFields property.
- `jsnext:main` and module: `dist/glamorous.es.js` - 通过ES模块规范导出，如果要通过这种形式使用的话你需要在webpack中配置resolve.mainFields属性 

不过最常见的场景还是通过CommonJS使用此模块：

```js
const glamorous = require('glamorous')
const {ThemeProvider} = glamorous
```

如果你在使用转换工具（同时/或者使用jsnext:main）

```js
import glamorous, {ThemeProvider} from 'glamorous'

// 你还可以导入特定的Glamorous组件（详见"内置"组件部分）
import {Div, H2} from 'glamorous'

// 和JavaScript内置对象名字相同的标签可以通过Tag后缀导入
// 包含短横线-的标签会被转换成驼峰风格
import {MapTag, ColorProfile} from 'glamorous'
```

如果你想以全局变量的形式使用：

```html
<!-- 加载资源 -->
<script src="https://unpkg.com/react/dist/react.js"></script>
<script src="https://unpkg.com/prop-types/prop-types.js"></script>
<script src="https://unpkg.com/glamor/umd/index.js"></script>
<!-- 加载glamorous-->
<script src="https://unpkg.com/glamorous/dist/glamorous.umd.js"></script>
<script>
// 在这里使用window.glamorous
const glamorous = window.glamorous
const {ThemeProvider} = glamorous
</script>
```
