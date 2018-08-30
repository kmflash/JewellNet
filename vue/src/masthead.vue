<template>
  <header class="masthead">
    <div class="masthead__headline-wrapper">
      <div class="masthead__headline-block">
        <h1 class="masthead__headline">
          <a href="#">{{myName}}</a>
        </h1>
        <aside class="masthead__aside" v-html="tagLine"></aside>
      </div>
    </div>
    <masthead-links></masthead-links>
    <site-menu></site-menu>
    <p class="masthead__intro" v-html="intro"></p>
  </header>
</template>

<script>
import mastheadLinks from "./mastheadLinks.vue";
import siteMenu from "./siteMenu.vue";

export default {
  name: "masthead",
  data() {
    return {
      myName: "David Jewell",
      tagLine: "Digital Project Design &amp; Engineering",
      intro:
        "<strong>Why, hello there!</strong> I’m David Jewell, originally from Nashville, I now call Brooklyn my home. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris                 nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur blah."
    };
  },
  components: {
    "masthead-links": mastheadLinks,
    "site-menu": siteMenu
  }
};
</script>
