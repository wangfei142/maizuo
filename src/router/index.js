import Vue from 'vue'
import store from "@/store"
import Router from 'vue-router'
import filmsRoute from './films'
import filmRoute from './film'
import cinemasRoute from './cinemas'
import cinemaRoute from './cinema'
import actRoute from './act'
import centerRoute from './center'
import cityRoute from './city'
import searchRoute from './search'
import loginRoute from './login'
import registerRoute from './register'
Vue.use(Router);


const routes = [
  filmsRoute,
  cinemasRoute,
  actRoute,
  centerRoute,
  filmRoute,
  cinemaRoute,
  cityRoute,
  searchRoute,
  loginRoute,
  registerRoute,
  {
    path: "/card",
    component: () => import("../pages/card.vue"),
    meta: {
      // isLogined , 这个路由要进去，必须要登录完成
      isLogined: true
    }
  },
  {
    path: '**',
    redirect: '/films/nowPlaying'
  }
];
const router = new Router({
  routes,

})

// 全局前置守卫实现路由拦截功能
router.beforeEach((to, from, next) => {
  // 又要登录，而没有登录状态的时候，
  if (to.meta.isLogined && !store.state.user.userInfo) {
    return next({
      path: "/login",
      query: {
        redirect: to.fullPath
      }
    });
  }

  next();

  // 1. 判断要去的路由页面是不是有限制
  // if (to.meta.isLogined) {
  //   // 2. 判断当前是否登录了 userInfo 是否为 null
  //   if (!store.state.user.userInfo) {
  //     // 3. 跳转到登录页面
  //     next({
  //       path: "/login",
  //       query: {
  //         redirect: to.fullPath
  //       }
  //     });
  //   } else {
  //     next();
  //   }
  // } else {
  //   next();
  // }
});
export default router
