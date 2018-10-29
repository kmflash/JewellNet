<template>
  <div class="masthead__menu">
    <div class="masthead__menu-burger" v-on:click="toggleNav">
      <burger-icon></burger-icon>
    </div>
    <div class="masthead__menu-wrapper">
      <ul class="masthead__menu-list">
        <li v-for="item in menuItems" :key="item.key" :class="['masthead__menu-list-' + item.key, {disabled: item.isDisabled}]">
          <router-link v-if="item.type == 'router'" :to="{name: item.key}">{{item.text}}</router-link>
          <a v-else :href="item.url" >{{item.text}}</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import burgerSVG from "../svg/icon-burger.svg.vue";

export default {
  name: "site-menu",
  props: { menuItems: Array },
  data() {
    return {
      burgerOpen: false,
      burger: {
        wrapper: ".masthead__menu",
        toggled: "open"
      }
    };
  },
  components: {
    "burger-icon": burgerSVG
  },
  methods: {
    toggleNav: function() {
      var burgerWrapper = document.querySelector(this.burger.wrapper);

      if (this.burgerOpen == false) {
        console.log("🍔");
        burgerWrapper.classList.add(this.burger.toggled);
        this.burgerOpen = true;
      } else {
        console.log("🚫🍔");
        burgerWrapper.classList.remove(this.burger.toggled);
        this.burgerOpen = false;
      }
    }
  }
};
</script>
