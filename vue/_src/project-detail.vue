<template>
  <div class="project-listing">
      <h3 class="project-listing__title">{{project.name}}</h3>
  </div>
</template>

<script>
const axios = require("axios");

export default {
  name: "project-detail",
  data() {
    return {
      project: []
    };
  },
  created() {
    let id = this.$route.params.id;
    console.log("downloading project data");
    this.fetchData();
  },
  methods: {
    fetchData() {
      axios
        .get("./data/projects.json")
        .then(response => (this.project = response.data));
    }
  }
};
</script>
