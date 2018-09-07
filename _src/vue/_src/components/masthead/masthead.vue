<template>
  <header class="masthead">
    <div class="masthead__inner-wrapper">
        <div class="masthead__headline-wrapper">
          <div class="masthead__headline-block">
            <h1 class="masthead__headline">
              <router-link :to="{name: 'home'}">{{myName}}</router-link>
            </h1>
            <aside class="masthead__aside" v-html="tagLine"></aside>
          </div>
          <masthead-links v-if="this.$route.path === '/'" ></masthead-links>
        </div>
      <site-menu></site-menu>
      <p class="masthead__intro" v-if="this.$route.path === '/'" v-html="intro"></p>
    </div>
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
      tagLine: "Design Technologist",
      intro:
        "<strong>Why, hello there!</strong> I’m David Jewell, a designer living in the beautiful borough of Brooklyn, NY. I specialize in digital products deeply rooted in design thinking. Coupled with technical knowledge, I am involved in all stages of the lifecycle of a product, from conception to execution. I am passionate about discovering how things work, and how to improve upon them. I love cycling, live music, the color magenta and my cat, Em."
    };
  },
  components: {
    "masthead-links": mastheadLinks,
    "site-menu": siteMenu
  }
};
</script>
