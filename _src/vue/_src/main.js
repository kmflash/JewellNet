import Vue from "vue";
import VueAxios from "vue-axios";
import axios from "axios";
import VueRouter from "vue-router";
import Vue2TouchEvents from "vue2-touch-events";
import App from "./App.vue";
import projectListing from "./components/projects-list/projectsList.vue";
import projectDetail from "./components/project-detail.vue";

Vue.use(VueRouter);
Vue.use(VueAxios, axios);
Vue.use(Vue2TouchEvents);

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
  routes
});

var app = new Vue({
  el: "#app",
  router,
  render: h => h(App),
  data: {
    keyCode: ""
  },
  methods: {
    handleGlobalKeyDown(e) {
      console.log(e.keyCode);
    }
  }
});

window.addEventListener("keydown", function(e) {
  app.handleGlobalKeyDown(e);
});
