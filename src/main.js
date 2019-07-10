import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from "./store"
import { Tab, Tabs, Toast, List, Search, IndexBar, IndexAnchor, DropdownMenu, DropdownItem ,ImagePreview,Field } from "vant";
Vue.config.productionTip = false
Vue.use(Tab)
  .use(Tabs)
  .use(Toast)
  .use(List)
  .use(Search)
  .use(IndexBar)
  .use(IndexAnchor)
  .use(DropdownMenu)
  .use(DropdownItem)
  .use(ImagePreview)
  .use(Field)


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')


