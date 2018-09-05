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
      projectDetail: []
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
