import Vue from "vue";
import VueAxios from "vue-axios";
import axios from "axios";
import VueRouter from "vue-router";
import App from "./App.vue";
import projectListing from "./components/projects-list/projectsList.vue";
import projectDetail from "./components/project-detail.vue";

Vue.use(VueRouter);
Vue.use(VueAxios, axios);

const routes = [
  {
    path: "/",
    component: projectListing,
    name: "home"
  },
  {
    path: "/projects/:id",
    component: projectDetail,
    name: "detail"
  }
];

const router = new VueRouter({
  routes,
  mode: "history",
  scrollBehavior: function(to, from, savedPosition) {
    if (to.hash) {
      return { selector: to.hash };
    } else {
      return { x: 0, y: 0 };
    }
  }
});

new Vue({
  el: "#app",
  router,
  render: h => h(App)
});
