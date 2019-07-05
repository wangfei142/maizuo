import Vue from "vue";
import Vuex from "vuex";
import cinema from "./modules/cinema";
import cinemas from "./modules/cinemas";
import film from "./modules/film";
import city from "./modules/city";
Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    film,
    cinemas,
    city,
    cinema
  }
});
