<template>
  <div class="masthead__menu">
    <div class="masthead__menu-burger">
      <burger-icon></burger-icon>
    </div>
    <div class="masthead__menu-wrapper">
      <ul class="masthead__menu-list">
        <li v-for="item in theMenu" :key="item.key" :class="['masthead__menu-list-' + item.key, {disabled: item.isDisabled}]">
          <a :href="item.url">{{item.text}}</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import burgerSVG from "../svg/icon-burger.svg.vue";

export default {
  name: "site-menu",
  data() {
    return {
      theMenu: [
        {
          key: "about",
          url: "index.html#top",
          text: "About",
          isDisabled: false
        },
        {
          key: "work",
          url: "index.html#work",
          text: "Work",
          isDisabled: false
        },
        {
          key: "playground",
          url: "#",
          text: "Playground",
          isDisabled: true
        }
      ]
    };
  },
  components: {
    "burger-icon": burgerSVG
  }
};
</script>
