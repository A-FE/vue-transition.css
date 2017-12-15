<template>
  <div class="app">
    <a href="https://github.com/WebCodeFarmer/vue-transition.css" class="github">
      <img src="./assets/img/github.svg" width="32px" title="欢迎star">
    </a>
    <!-- 页面标题 -->
    <el-tabs type="border-card" class="m-tabs">

      <el-tab-pane label="move">
        <el-tag size="medium" @click.native="handleChangeRoute('/moveRightToLeft')">move-right-to-left</el-tag>
        <el-tag size="medium" @click.native="handleChangeRoute('/moveLeftToRight')">move-left-to-right</el-tag>
        <el-tag size="medium" @click.native="handleChangeRoute('/moveTopToBottom')">move-top-to-bottom</el-tag>
        <el-tag size="medium" @click.native="handleChangeRoute('/moveBottomToTop')">move-bottom-to-top</el-tag>
      </el-tab-pane>

      <el-tab-pane label="moveFade">
        <el-tag size="medium" @click.native="handleChangeRoute('/moveFadeRightToLeft')">{{transformClassName('moveFadeRightToLeft')}}</el-tag>
        <el-tag size="medium" @click.native="handleChangeRoute('/moveFadeLeftToRight')">{{transformClassName('moveFadeLeftToRight')}}</el-tag>
        <el-tag size="medium" @click.native="handleChangeRoute('/moveFadeTopToBottom')">{{transformClassName('moveFadeTopToBottom')}}</el-tag>
        <el-tag size="medium" @click.native="handleChangeRoute('/moveFadeBottomToTop')">{{transformClassName('moveFadeBottomToTop')}}</el-tag>
      </el-tab-pane>

      <el-tab-pane label="moveDifferent">
        <el-tag size="medium" @click.native="handleChangeRoute('/moveDifferentRightToLeft')">{{transformClassName('moveDifferentRightToLeft')}}</el-tag>
        <el-tag size="medium" @click.native="handleChangeRoute('/moveDifferentLeftToRight')">{{transformClassName('moveDifferentLeftToRight')}}</el-tag>
        <el-tag size="medium" @click.native="handleChangeRoute('/moveDifferentTopToBottom')">{{transformClassName('moveDifferentTopToBottom')}}</el-tag>
        <el-tag size="medium" @click.native="handleChangeRoute('/moveDifferentBottomToTop')">{{transformClassName('moveDifferentBottomToTop')}}</el-tag>
      </el-tab-pane>

      <el-tab-pane label="sacle">
        <el-tag size="medium" @click.native="handleChangeRoute('/scaleDownToDown')">{{transformClassName('scaleDownToDown')}}</el-tag>
        <el-tag size="medium" @click.native="handleChangeRoute('/scaleDownToUp')">{{transformClassName('scaleDownToUp')}}</el-tag>
        <el-tag size="medium" @click.native="handleChangeRoute('/scaleUpToUp')">{{transformClassName('scaleUpToUp')}}</el-tag>
      </el-tab-pane>

      <el-tab-pane label="rotate">
        <el-tag size="medium" @click.native="handleChangeRoute('/rotateFall')">{{transformClassName('rotateFall')}}</el-tag>
        <el-tag size="medium" @click.native="handleChangeRoute('/rotateSides')">{{transformClassName('rotateSides')}}</el-tag>
      </el-tab-pane>

      <el-tab-pane label="glue">
        <el-tag size="medium" @click.native="handleChangeRoute('/rotateGlueBottomToTop')">{{transformClassName('rotateGlueBottomToTop')}}</el-tag>
        <el-tag size="medium" @click.native="handleChangeRoute('/rotateGlueTopToBottom')">{{transformClassName('rotateGlueTopToBottom')}}</el-tag>
        <el-tag size="medium" @click.native="handleChangeRoute('/rotateGlueRightToLeft')">{{transformClassName('rotateGlueRightToLeft')}}</el-tag>
        <el-tag size="medium" @click.native="handleChangeRoute('/rotateGlueLeftToRight')">{{transformClassName('rotateGlueLeftToRight')}}</el-tag>
      </el-tab-pane>

      <el-tab-pane label="flip">
        <el-tag size="medium" @click.native="handleChangeRoute('/rotateFlipTop')">{{transformClassName('rotateFlipTop')}}</el-tag>
        <el-tag size="medium" @click.native="handleChangeRoute('/rotateFlipBottom')">{{transformClassName('rotateFlipBottom')}}</el-tag>
        <el-tag size="medium" @click.native="handleChangeRoute('/rotateFlipLeft')">{{transformClassName('rotateFlipLeft')}}</el-tag>
        <el-tag size="medium" @click.native="handleChangeRoute('/rotateFlipRight')">{{transformClassName('rotateFlipRight')}}</el-tag>
      </el-tab-pane>

      <el-tab-pane label="carouse">
        <el-tag size="medium" @click.native="handleChangeRoute('/rotateCarouselTop')">{{transformClassName('rotateCarouselTop')}}</el-tag>
        <el-tag size="medium" @click.native="handleChangeRoute('/rotateCarouselBottom')">{{transformClassName('rotateCarouselBottom')}}</el-tag>
        <el-tag size="medium" @click.native="handleChangeRoute('/rotateCarouselLeft')">{{transformClassName('rotateCarouselLeft')}}</el-tag>
        <el-tag size="medium" @click.native="handleChangeRoute('/rotateCarouselRight')">{{transformClassName('rotateCarouselRight')}}</el-tag>
      </el-tab-pane>

      <el-tab-pane label="push">
        <el-tag size="medium" @click.native="handleChangeRoute('/rotatePushBottomToTop')">{{transformClassName('rotatePushBottomToTop')}}</el-tag>
        <el-tag size="medium" @click.native="handleChangeRoute('/rotatePushTopToBottom')">{{transformClassName('rotatePushTopToBottom')}}</el-tag>
        <el-tag size="medium" @click.native="handleChangeRoute('/rotatePushRightToLeft')">{{transformClassName('rotatePushRightToLeft')}}</el-tag>
        <el-tag size="medium" @click.native="handleChangeRoute('/rotatePushLeftToRight')">{{transformClassName('rotatePushLeftToRight')}}</el-tag>
      </el-tab-pane>

      <el-tab-pane label="fold">
        <el-tag size="medium" @click.native="handleChangeRoute('/rotateFoldBottomToTop')">{{transformClassName('rotateFoldBottomToTop')}}</el-tag>
        <el-tag size="medium" @click.native="handleChangeRoute('/rotateFoldTopToBottom')">{{transformClassName('rotateFoldTopToBottom')}}</el-tag>
        <el-tag size="medium" @click.native="handleChangeRoute('/rotateFoldRightToLeft')">{{transformClassName('rotateFoldRightToLeft')}}</el-tag>
        <el-tag size="medium" @click.native="handleChangeRoute('/rotateFoldLeftToRight')">{{transformClassName('rotateFoldLeftToRight')}}</el-tag>
      </el-tab-pane>
    </el-tabs>

    <transition :name="transitionName">
      <router-view class="app-router-view" :class="`bg-${num}`"></router-view>
    </transition>

  </div>
</template>

<script>
  import 'vue-transition.css'
  export default {
    name: 'app',
    data() {
      return {
        num: 0,
        transitionName: ''
      }
    },

    methods: {
      addNum() {
        if (this.num === 5) {
          this.num = 0
        } else {
          this.num++
        }
      },

      // 驼峰转换为中划线
      transformClassName(str) {
        return str
          .replace(/([A-Z])/g, str => {
            return '-' + str.toLocaleLowerCase()
          })
          .replace('/', '')
      },

      handleChangeRoute(route) {
        if (this.$route.path !== route) {
          this.transitionName = this.transformClassName(route)
          console.log(this.transitionName)
          this.addNum()
          this.$router.push(route)
        }
      }
    }
  }
</script>

<style lang="less">
  /* 引入全局样式 */
  @import './assets/css/main.less';
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
    .app-router-view {
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
  }

  // tabs
  .app > .m-tabs {
    position: fixed;
    width: 900px;
    height: 100px;
    z-index: 1000;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    .el-tab-pane {
      font-size: 0;
    }
    .el-tabs__item {
      user-select: none;
    }
    .el-tag {
      margin-bottom: 8px;
      margin-right: 8px;
      cursor: pointer;
      background: #fff;
      border: 1px solid #dcdfe6;
      color: #606266;
      transition: all 0.2s ease-in-out;
      & + .el-tag {
        margin-left: 0;
      }
      &:hover {
        background-color: rgba(64, 158, 255, 0.1);
        color: #409eff;
        border: 1px solid rgba(64, 158, 255, 0.2);
      }
    }
  }

  .github {
    position: fixed;
    z-index: 1000;
    top: 20px;
    left: 20px;
    opacity: 0.8;
    transition: all 0.2s linear;
    &:hover {
      opacity: 1;
    }
  }
</style>
