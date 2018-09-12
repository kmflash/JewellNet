<template>
  <ul class="masthead__links">
    <li v-for="link in linx" :key="link.key" :class="'masthead__links--' + link.key">
      <a :href="link.url" target="_blank">
        <linkedin-svg v-if="link.key == 'linkedin'"></linkedin-svg>
        <github-svg v-if="link.key == 'github'"></github-svg>
        <instagram-svg v-if="link.key == 'instagram'"></instagram-svg>
        <strava-svg v-if="link.key == 'strava'"></strava-svg>
      </a>
    </li>
  </ul>
</template>

<script>
import linkedinSVG from "../svg/linkedin.svg.vue";
import githubSVG from "../svg/github.svg.vue";
import instagramSVG from "../svg/instagram.svg.vue";
import stravaSVG from "../svg/strava.svg.vue";
export default {
  name: "masthead-links",
  components: {
    "linkedin-svg": linkedinSVG,
    "github-svg": githubSVG,
    "instagram-svg": instagramSVG,
    "strava-svg": stravaSVG
  },
  props: ["linx"]
};
</script>
