<template>
  <header class="masthead">
    <div class="masthead__inner-wrapper">
        <div class="masthead__headline-wrapper">
          <div class="masthead__headline-block">
            <h1 class="masthead__headline">
              <router-link :to="{name: 'home'}">{{this.siteData.myName}}</router-link>
            </h1>
            <aside class="masthead__aside" v-html="siteData.tagline" v-if="this.$route.name === 'home'"></aside>
          </div>
          <masthead-links v-if="this.$route.name === 'home'" :linx="siteData.mastheadLinks"></masthead-links>
        </div>
      <site-menu :menuItems="siteData.siteNav"></site-menu>
      <p class="masthead__intro" v-if="this.$route.name === 'home'" v-html="siteData.bio"></p>
    </div>
  </header>
</template>

<script>
import mastheadLinks from "./mastheadLinks.vue";
import siteMenu from "./siteMenu.vue";

export default {
  name: "masthead",
  props: ["siteData"],
  components: {
    "masthead-links": mastheadLinks,
    "site-menu": siteMenu
  }
};
</script>
