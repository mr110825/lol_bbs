import Vue from 'vue';
import Router from "vue-router";

import HomePage from "../pages/home/homepage.vue";
Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: HomePage,
      name: "HomePage",
    }
  ],
})

export default router