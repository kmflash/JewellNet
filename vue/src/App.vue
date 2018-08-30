<template>
  <div id="app-wrapper">
    <div id="topline">&nbsp;</div>
    <masthead></masthead>
  </div>
</template>

<script>
import masthead from "./masthead.vue";
export default {
  name: "app-wrapper",
  components: {
    masthead
  }
  // data() {
  //   return {
  //     msg: "Welcome to Your Vue.js App 🐧"
  //   };
  // }
};
</script>
