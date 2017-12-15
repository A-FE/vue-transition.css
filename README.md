# vue-transition.css ![Build Status](https://img.shields.io/badge/build-passing-brightgreen.svg) ![Github Release](https://img.shields.io/badge/release-v1.0.2-brightgreen.svg)

_vue-transition动画库_

* [在线demo](https://webcodefarmer.github.io/vue-transition.css/dist/index.html)

## 安装

### npm 安装

```
npm install vue-transition.css --save
```

### CDN 可以通过下载[vue-transition.min.css](https://raw.githubusercontent.com/WebCodeFarmer/vue-transition.css/master/transition.min.css),在页面上引入 css 文件即可开始使用。

```
<!-- 引入样式 -->
<link rel="stylesheet" href="vue-transition.min.css">
```

## 使用

```
// 入口页,如app.vue
<template>
  <div class="app">
    ...
    // 例如使用 move-right-to-left 动画
    <transition name="move-right-to-left">
      <router-view class="app-router-view"></router-view>
    </transition>
    ...
  </div>
</template>

<style>
  // 给页面加上以下样式，动画才能生效
  html,
  body,
  .app {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
  .app {
    background-color: #000;
    perspective: 1200px;
  }

  .app .app-router-view {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    overflow: hidden;
    backface-visibility: hidden;
    transform: translate3d(0, 0, 0);
    transform-style: preserve-3d;
    visibility: visible;
  }
</style>
```

[查看所有动画](https://webcodefarmer.github.io/vue-transition.css/dist/index.html)
欢迎留言或star,如果对demo中的美女不满意，可以加为qq（1024371442）详聊

# License

`vue-transition.css` is licensed under the MIT license.(http://opensource.org/licenses/MIT)
