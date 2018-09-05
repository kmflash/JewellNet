<template>
    <div id="app-wrapper" class="content" name="top">
      <masthead></masthead>
      <router-view
      :theProjectList="this.theProjectsList"
></router-view>
    </div>
</template>

<script>
import masthead from "./components/masthead/masthead.vue";
const axios = require("axios");
export default {
  name: "app-wrapper",
  components: {
    masthead
  },
  data() {
    return {
      theProjectsList: [],
      projectDetail: [],
      pageInfo: {
        burger: {
          wrapper: ".masthead__menu",
          button: ".masthead__menu-burger",
          menu: ".masthead__menu-wrapper",
          toggled: "open"
        },
        carousel: {
          wrapper: ".project__carousel",
          controls: {
            back: ".project__carousel-controls--back",
            fwd: ".project__carousel-controls--next"
          },
          position: ".project__carousel-controls--location .pos",
          total: ".project__carousel-controls--location .total",
          imgs: ".project__carousel--image-wrapper"
        }
      }
    };
  },
  created() {
    console.log("downloading project data...");
    this.fetchData();
  },
  methods: {
    fetchData() {
      axios
        .get("/data/projects.json")
        .then(response => (this.theProjectsList = response.data));
    }
  }
};
</script>

<style>
@import url("../css/normalize.min.css");
@import url("../css/jewellnet.min.css");
</style>
