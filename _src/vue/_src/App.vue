<template>
    <div id="app-wrapper" class="content" name="top">
      <masthead :siteData="this.siteData"></masthead>
      <router-view :theProjectList="this.theProjectsList"></router-view>
      <site-footer></site-footer>
    </div>
</template>

<script>
import masthead from "./components/masthead/masthead.vue";
import siteFooter from "./components/footer.vue";
const axios = require("axios");
export default {
  name: "app-wrapper",
  components: {
    masthead,
    siteFooter
  },
  data() {
    return {
      siteData: [],
      theProjectsList: [],
      projectDetail: []
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      // fetch site info
      console.log("loading site data...");
      axios
        .get("json/siteData.json")
        .then(response => (this.siteData = response.data));

      console.log("loading project data...");
      axios
        .get("./json/projects.json?")
        .then(response => (this.theProjectsList = response.data));

      console.log("data loaded.");
      console.log(this.theProjectsList);
    }
  }
};
</script>

<style>
@import url("../css/normalize.min.css");
@import url("../css/jewellnet.min.css");
</style>
