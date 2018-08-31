<template>
  <div id="app-wrapper">
    <div class="content" name="top">
      <masthead></masthead>
      <router-view></router-view>
    </div>
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
