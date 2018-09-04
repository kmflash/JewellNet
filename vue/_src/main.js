import Vue from "vue";
import VueAxios from "vue-axios";
import axios from "axios";
import VueRouter from "vue-router";
import App from "./App.vue";
import projectListing from "./projects-list/projectsList.vue";
import projectDetail from "./project-detail.vue";

Vue.use(VueRouter);
Vue.use(VueAxios, axios);

const routes = [
  {
    path: "/",
    component: projectListing
  },
  {
    path: "/projects/:id",
    compoonent: projectDetail,
    props: true
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
