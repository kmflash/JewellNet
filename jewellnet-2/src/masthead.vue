<template>
  <header class="masthead">
    <div class="masthead__headline-wrapper">
      <div class="masthead__headline-block">
        <h1 class="masthead__headline">
          <a href="#">{{myName}}</a>
        </h1>
        <aside class="masthead__aside" v-html="tagLine"></aside>
        <masthead-links></masthead-links>
      </div>
    </div>
  </header>
</template>

<script>
import mastheadLinks from "./mastheadLinks.vue";

export default {
  name: "masthead",
  data() {
    return {
      myName: "David Jewell",
      tagLine: "Digital Project Design &amp; Engineering"
    };
  },
  components: { "masthead-links": mastheadLinks }
};
</script>
