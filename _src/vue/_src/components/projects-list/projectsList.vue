<template>
  <section class="main">
    <div class="main__title-wrapper h2-wrapper">
      <a name="work"></a>
      <h2 class="main__title">Selected Work</h2>
    </div>
    <project-list-item
      v-for="project in theProjectList"
      v-bind:key="project.id"
      v-bind:project="project"
    ></project-list-item>
  </section>
</template>

<script>
import projectListItem from "./projectListItem.vue";
const axios = require("axios");
export default {
  name: "projects",
  components: {
    "project-list-item": projectListItem
  },
  data() {
    return {};
  },
  mounted() {
    document.body.id = "home";
    document.body.className = "";
  },
  props: ["theProjectList"]
};
</script>
