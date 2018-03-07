import Vue from 'vue'
import App from './App'
import router from './router'
import { Tabs, TabPane, Tag } from 'element-ui'

Vue.component(Tabs.name, Tabs)
Vue.component(TabPane.name, TabPane)
Vue.component(Tag.name, Tag)

import * as OfflinePluginRuntime from 'offline-plugin/runtime'
OfflinePluginRuntime.install()

Vue.config.productionTip = process.env.NODE_ENV !== 'production'
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
