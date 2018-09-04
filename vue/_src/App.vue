<template>
  <div id="app-wrapper">
    <div class="content" name="top">
      <masthead></masthead>
      <router-view :theProjectList="this.theProjectsList"></router-view>
    </div>
  </div>
</template>

<script>
import masthead from "./masthead/masthead.vue";
const axios = require("axios");
export default {
  name: "app-wrapper",
  components: {
    masthead
  },
  data() {
    return {
      theProjectsList: [],
      aProject: []
    };
  },
  created() {
    console.log("downloading project data...");
    this.fetchData();
  },
  methods: {
    fetchData() {
      axios
        .get("./data/projects.json")
        .then(response => (this.theProjectsList = response.data));
    }
  }
};
</script>
