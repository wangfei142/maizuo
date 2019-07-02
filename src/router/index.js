import Vue from 'vue'
import Router from 'vue-router'
import filmsRoute from './films'
import filmRoute from './film'
import cinemasRoute from './cinemas'
import cinemaRoute from './cinema'
import actRoute from './act'
import centerRoute from './center'

Vue.use(Router);


const routes = [
  filmsRoute,
  cinemasRoute,
  actRoute,
  centerRoute,
  filmRoute,
  cinemaRoute,
  {
    path: '**',
    redirect: '/films/nowPlaying'
  }
];
const router = new Router({
  routes,
  
})
export default router