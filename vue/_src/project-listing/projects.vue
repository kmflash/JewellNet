<template>
  <section class="main">
    <div class="main__title-wrapper h2-wrapper">
      <a name="work"></a>
      <h2 class="main__title">Selected Work</h2>
    </div>
    <project-listing
      v-for="project in theProjects"
      v-bind:key="project.id"
      v-bind:project="project"
    ></project-listing>
  </section>
</template>

<script>
import projectListing from "./project.vue";
const axios = require("axios");
export default {
  name: "projects",
  components: {
    "project-listing": projectListing
  },
  data() {
    return {
      theProjects: []
    };
  },
  created() {
    console.log("downloading project data");
    this.fetchData();
  },
  methods: {
    fetchData() {
      axios
        .get("./data/projects.json")
        .then(response => (this.theProjects = response.data));
    }
  }
};
</script>
