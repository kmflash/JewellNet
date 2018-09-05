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
    component: projectListing
  },
  {
    path: "/projects/:id",
    component: projectDetail
  }
];

const router = new VueRouter({
  routes
});

new Vue({
  el: "#app",
  router,
  render: h => h(App)
});
