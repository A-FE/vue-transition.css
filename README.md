# vue-transition.css ![Build Status](https://img.shields.io/badge/build-passing-brightgreen.svg) ![Github Release](https://img.shields.io/badge/release-v1.0.2-brightgreen.svg)

_a animation library of vue-transition vue-transition 动画库_

* [live demo](https://webcodefarmer.github.io/vue-transition.css/dist/index.html)

## 安装

### npm 安装

```
npm install vue-transition.css
```

### CDN 可以通过下载[vue-transition.min.css](https://raw.githubusercontent.com/WebCodeFarmer/vue-transition.css/master/transition.min.css),在页面上引入 css 文件即可开始使用。

```
<!-- 引入样式 -->
<link rel="stylesheet" href="vue-transition.css">
```

## 使用

```
// 例如使用 move-right-to-left 动画
 <transition name="move-right-to-left">
      <router-view class="app-router-view"></router-view>
</transition>
```

[查看所有动画](https://webcodefarmer.github.io/vue-transition.css/dist/index.html)

# License

`vue-transition.css` is licensed under the MIT license.(http://opensource.org/licenses/MIT)
