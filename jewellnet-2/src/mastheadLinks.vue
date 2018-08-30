<template>
  <ul class="masthead__links">
    <li v-for="link in mhLinks" :key="link.key" :class="'masthead__links--' + link.key">
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
import linkedinSVG from "./svg/linkedin.svg.vue";
import githubSVG from "./svg/github.svg.vue";
import instagramSVG from "./svg/instagram.svg.vue";
import stravaSVG from "./svg/strava.svg.vue";
export default {
  name: "masthead-links",
  components: {
    "linkedin-svg": linkedinSVG,
    "github-svg": githubSVG,
    "instagram-svg": instagramSVG,
    "strava-svg": stravaSVG
  },
  data() {
    return {
      mhLinks: [
        { key: "linkedin", url: "https://www.linkedin.com/in/mrjewell/" },
        { key: "github", url: "https://github.com/kmflash/" },
        { key: "instagram", url: "https://www.instagram.com/mrjewell/" },
        { key: "strava", url: "https://www.strava.com/athletes/10766330" }
      ]
    };
  }
};
</script>
