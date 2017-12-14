import Vue from 'vue'
import Router from 'vue-router'

import Page404 from 'pages/404'

// move
import MoveBottomToTop from 'pages/move/bottomToTop'
import MoveTopToBottom from 'pages/move/topToBottom'
import MoveRightToLeft from 'pages/move/RightToLeft'
import MoveLeftToRight from 'pages/move/LeftToRight'

// move-fade
import MoveFadeBottomToTop from 'pages/moveFade/bottomToTop'
import MoveFadeTopToBottom from 'pages/moveFade/topToBottom'
import MoveFadeRightToLeft from 'pages/moveFade/RightToLeft'
import MoveFadeLeftToRight from 'pages/moveFade/LeftToRight'

// move-different
import MoveDifferentBottomToTop from 'pages/moveDifferent/bottomToTop'
import MoveDifferentTopToBottom from 'pages/moveDifferent/topToBottom'
import MoveDifferentRightToLeft from 'pages/moveDifferent/RightToLeft'
import MoveDifferentLeftToRight from 'pages/moveDifferent/LeftToRight'

// scale
import ScaleDownToDown from 'pages/scale/downToDown'
import ScaleDownToUp from 'pages/scale/downToUp'
import ScaleUpToUp from 'pages/scale/upToUp'

// rotate-glue
import RotateGlueBottomToTop from 'pages/rotate/glue/bottomToTop'
import RotateGlueTopToBottom from 'pages/rotate/glue/topToBottom'
import RotateGlueRightToLeft from 'pages/rotate/glue/RightToLeft'
import RotateGlueLeftToRight from 'pages/rotate/glue/LeftToRight'

// rotate-flip
import RotateFlipTop from 'pages/rotate/flip/top'
import RotateFlipBottom from 'pages/rotate/flip/bottom'
import RotateFlipLeft from 'pages/rotate/flip/left'
import RotateFlipRight from 'pages/rotate/flip/right'

// rotate-carousel
import RotateCarouselTop from 'pages/rotate/carousel/top'
import RotateCarouselBottom from 'pages/rotate/carousel/bottom'
import RotateCarouselLeft from 'pages/rotate/carousel/left'
import RotateCarouselRight from 'pages/rotate/carousel/right'

// rotate-fall
import RotateFall from 'pages/rotate/fall'
// rotate-sides
import Rotatesides from 'pages/rotate/sides'

// rotate-push
import RotatePushBottomToTop from 'pages/rotate/push/bottomToTop'
import RotatePushTopToBottom from 'pages/rotate/push/topToBottom'
import RotatePushRightToLeft from 'pages/rotate/push/RightToLeft'
import RotatePushLeftToRight from 'pages/rotate/push/LeftToRight'

// rotate-fold
import RotateFoldBottomToTop from 'pages/rotate/fold/bottomToTop'
import RotateFoldTopToBottom from 'pages/rotate/fold/topToBottom'
import RotateFoldRightToLeft from 'pages/rotate/fold/RightToLeft'
import RotateFoldLeftToRight from 'pages/rotate/fold/LeftToRight'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '*', component: Page404 },
    { path: '/', redirect: '/moveBottomToTop' },
    // move
    {
      path: '/moveBottomToTop',
      component: MoveBottomToTop
    },
    {
      path: '/moveTopToBottom',
      component: MoveTopToBottom
    },
    {
      path: '/moveRightToLeft',
      component: MoveRightToLeft
    },
    {
      path: '/moveLeftToRight',
      component: MoveLeftToRight
    },
    // moveFade
    {
      path: '/moveFadeBottomToTop',
      component: MoveFadeBottomToTop
    },
    {
      path: '/moveFadeTopToBottom',
      component: MoveFadeTopToBottom
    },
    {
      path: '/moveFadeRightToLeft',
      component: MoveFadeRightToLeft
    },
    {
      path: '/moveFadeLeftToRight',
      component: MoveFadeLeftToRight
    },
    // moveDifferent
    {
      path: '/moveDifferentBottomToTop',
      component: MoveDifferentBottomToTop
    },
    {
      path: '/moveDifferentTopToBottom',
      component: MoveDifferentTopToBottom
    },
    {
      path: '/moveDifferentRightToLeft',
      component: MoveDifferentRightToLeft
    },
    {
      path: '/moveDifferentLeftToRight',
      component: MoveDifferentLeftToRight
    },
    // scale
    {
      path: '/scaleDownToDown',
      component: ScaleDownToDown
    },
    {
      path: '/scaleDownToUp',
      component: ScaleDownToUp
    },
    {
      path: '/scaleUpToUp',
      component: ScaleUpToUp
    },
    // rotateGlue
    {
      path: '/rotateGlueBottomToTop',
      component: RotateGlueBottomToTop
    },
    {
      path: '/rotateGlueTopToBottom',
      component: RotateGlueTopToBottom
    },
    {
      path: '/rotateGlueRightToLeft',
      component: RotateGlueRightToLeft
    },
    {
      path: '/rotateGlueLeftToRight',
      component: RotateGlueLeftToRight
    },
    // rotateFlip
    {
      path: '/rotateFlipTop',
      component: RotateFlipTop
    },
    {
      path: '/rotateFlipBottom',
      component: RotateFlipBottom
    },
    {
      path: '/rotateFlipLeft',
      component: RotateFlipLeft
    },
    {
      path: '/rotateFlipRight',
      component: RotateFlipRight
    },
    // rotateCarousel
    {
      path: '/rotateCarouselTop',
      component: RotateCarouselTop
    },
    {
      path: '/rotateCarouselBottom',
      component: RotateCarouselBottom
    },
    {
      path: '/rotateCarouselLeft',
      component: RotateCarouselLeft
    },
    {
      path: '/rotateCarouselRight',
      component: RotateCarouselRight
    },
    // rotateFall
    {
      path: '/rotateFall',
      component: RotateFall
    },
    // Rotatesides
    {
      path: '/rotatesides',
      component: Rotatesides
    },
    // rotate-push
    {
      path: '/rotatePushBottomToTop',
      component: RotatePushBottomToTop
    },
    {
      path: '/rotatePushTopToBottom',
      component: RotatePushTopToBottom
    },
    {
      path: '/rotatePushRightToLeft',
      component: RotatePushRightToLeft
    },
    {
      path: '/rotatePushLeftToRight',
      component: RotatePushLeftToRight
    },
    // rotate-fold
    {
      path: '/rotateFoldBottomToTop',
      component: RotateFoldBottomToTop
    },
    {
      path: '/rotateFoldTopToBottom',
      component: RotateFoldTopToBottom
    },
    {
      path: '/rotateFoldRightToLeft',
      component: RotateFoldRightToLeft
    },
    {
      path: '/rotateFoldLeftToRight',
      component: RotateFoldLeftToRight
    }
  ]
})
