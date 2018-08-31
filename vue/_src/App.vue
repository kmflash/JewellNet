<template>
  <div id="app-wrapper">
    <div id="topline">&nbsp;</div>
    <masthead></masthead>
  </div>
</template>

<script>
import masthead from "./masthead/masthead.vue";
export default {
  name: "app-wrapper",
  components: {
    masthead
  }
};
</script>
