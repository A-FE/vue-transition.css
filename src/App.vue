<template>
  <div class="app">
    <!-- 页面标题 -->
    <el-tabs type="border-card" class="m-tabs">

      <el-tab-pane label="move">
        <el-button size="mini" @click="handleChangeRoute('/moveRightToLeft')">move-right-to-left</el-button>
        <el-button size="mini" @click="handleChangeRoute('/moveLeftToRight')">move-left-to-right</el-button>
        <el-button size="mini" @click="handleChangeRoute('/moveTopToBottom')">move-top-to-bottom</el-button>
        <el-button size="mini" @click="handleChangeRoute('/moveBottomToTop')">move-bottom-to-top</el-button>
      </el-tab-pane>

      <el-tab-pane label="moveFade">
        <el-button size="mini" @click="handleChangeRoute('/moveFadeRightToLeft')">{{transformClassName('moveFadeRightToLeft')}}</el-button>
        <el-button size="mini" @click="handleChangeRoute('/moveFadeLeftToRight')">{{transformClassName('moveFadeLeftToRight')}}</el-button>
        <el-button size="mini" @click="handleChangeRoute('/moveFadeTopToBottom')">{{transformClassName('moveFadeTopToBottom')}}</el-button>
        <el-button size="mini" @click="handleChangeRoute('/moveFadeBottomToTop')">{{transformClassName('moveFadeBottomToTop')}}</el-button>
      </el-tab-pane>

      <el-tab-pane label="moveDifferent">
        <el-button size="mini" @click="handleChangeRoute('/moveDifferentRightToLeft')">{{transformClassName('moveDifferentRightToLeft')}}</el-button>
        <el-button size="mini" @click="handleChangeRoute('/moveDifferentLeftToRight')">{{transformClassName('moveDifferentLeftToRight')}}</el-button>
        <el-button size="mini" @click="handleChangeRoute('/moveDifferentTopToBottom')">{{transformClassName('moveDifferentTopToBottom')}}</el-button>
        <el-button size="mini" @click="handleChangeRoute('/moveDifferentBottomToTop')">{{transformClassName('moveDifferentBottomToTop')}}</el-button>
      </el-tab-pane>

      <el-tab-pane label="sacle">
        <el-button size="mini" @click="handleChangeRoute('/scaleDownToDown')">{{transformClassName('scaleDownToDown')}}</el-button>
        <el-button size="mini" @click="handleChangeRoute('/scaleDownToUp')">{{transformClassName('scaleDownToUp')}}</el-button>
        <el-button size="mini" @click="handleChangeRoute('/scaleUpToUp')">{{transformClassName('scaleUpToUp')}}</el-button>
      </el-tab-pane>

      <el-tab-pane label="rotate">
        <el-button size="mini" @click="handleChangeRoute('/rotateFall')">{{transformClassName('rotateFall')}}</el-button>
        <el-button size="mini" @click="handleChangeRoute('/rotateSides')">{{transformClassName('rotateSides')}}</el-button>
      </el-tab-pane>

      <el-tab-pane label="glue">
        <el-button size="mini" @click="handleChangeRoute('/rotateGlueBottomToTop')">{{transformClassName('rotateGlueBottomToTop')}}</el-button>
        <el-button size="mini" @click="handleChangeRoute('/rotateGlueTopToBottom')">{{transformClassName('rotateGlueTopToBottom')}}</el-button>
        <el-button size="mini" @click="handleChangeRoute('/rotateGlueRightToLeft')">{{transformClassName('rotateGlueRightToLeft')}}</el-button>
        <el-button size="mini" @click="handleChangeRoute('/rotateGlueLeftToRight')">{{transformClassName('rotateGlueLeftToRight')}}</el-button>
      </el-tab-pane>

      <el-tab-pane label="flip">
        <el-button size="mini" @click="handleChangeRoute('/rotateFlipTop')">{{transformClassName('rotateFlipTop')}}</el-button>
        <el-button size="mini" @click="handleChangeRoute('/rotateFlipBottom')">{{transformClassName('rotateFlipBottom')}}</el-button>
        <el-button size="mini" @click="handleChangeRoute('/rotateFlipLeft')">{{transformClassName('rotateFlipLeft')}}</el-button>
        <el-button size="mini" @click="handleChangeRoute('/rotateFlipRight')">{{transformClassName('rotateFlipRight')}}</el-button>
      </el-tab-pane>

      <el-tab-pane label="carouse">
        <el-button size="mini" @click="handleChangeRoute('/rotateCarouselTop')">{{transformClassName('rotateCarouselTop')}}</el-button>
        <el-button size="mini" @click="handleChangeRoute('/rotateCarouselBottom')">{{transformClassName('rotateCarouselBottom')}}</el-button>
        <el-button size="mini" @click="handleChangeRoute('/rotateCarouselLeft')">{{transformClassName('rotateCarouselLeft')}}</el-button>
        <el-button size="mini" @click="handleChangeRoute('/rotateCarouselRight')">{{transformClassName('rotateCarouselRight')}}</el-button>
      </el-tab-pane>

      <el-tab-pane label="push">
        <el-button size="mini" @click="handleChangeRoute('/rotatePushBottomToTop')">{{transformClassName('rotatePushBottomToTop')}}</el-button>
        <el-button size="mini" @click="handleChangeRoute('/rotatePushTopToBottom')">{{transformClassName('rotatePushTopToBottom')}}</el-button>
        <el-button size="mini" @click="handleChangeRoute('/rotatePushRightToLeft')">{{transformClassName('rotatePushRightToLeft')}}</el-button>
        <el-button size="mini" @click="handleChangeRoute('/rotatePushLeftToRight')">{{transformClassName('rotatePushLeftToRight')}}</el-button>
      </el-tab-pane>

      <el-tab-pane label="fold">
        <el-button size="mini" @click="handleChangeRoute('/rotateFoldBottomToTop')">{{transformClassName('rotateFoldBottomToTop')}}</el-button>
        <el-button size="mini" @click="handleChangeRoute('/rotateFoldTopToBottom')">{{transformClassName('rotateFoldTopToBottom')}}</el-button>
        <el-button size="mini" @click="handleChangeRoute('/rotateFoldRightToLeft')">{{transformClassName('rotateFoldRightToLeft')}}</el-button>
        <el-button size="mini" @click="handleChangeRoute('/rotateFoldLeftToRight')">{{transformClassName('rotateFoldLeftToRight')}}</el-button>
      </el-tab-pane>
    </el-tabs>

    <transition :name="transitionName">
      <router-view class="app-router-view" :class="`bg-${num}`"></router-view>
    </transition>

  </div>
</template>

<script>
  import 'page-transition.css'
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
    .el-button {
      margin-bottom: 8px;
      margin-right: 8px;
      & + .el-button {
        margin-left: 0;
      }
    }
  }
</style>
