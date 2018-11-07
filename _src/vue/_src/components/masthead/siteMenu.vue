<template>
  <div class="masthead__menu" ref="hamburger">
    <div class="masthead__menu-burger" v-on:click="toggleNav">
      <burger-icon></burger-icon>
    </div>
    <div class="masthead__menu-wrapper" ref="thewrapper">
      <ul class="masthead__menu-list">
        <li v-for="item in menuItems" :key="item.key" :class="['masthead__menu-list-' + item.key, {disabled: item.isDisabled}]" @click="closeNav">
          <router-link v-if="item.type == 'router'" :to="{name: item.key}">{{item.text}}</router-link>
          <a v-else :href="item.url" target="_blank">{{item.text}}</a>
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
        menuWrapper: ".masthead__menu-wrapper",
        menuLength: 0,
        toggled: "open"
      }
    };
  },
  components: {
    "burger-icon": burgerSVG
  },
  updated() {
    this.burger.menuLength = this.menuItems.length;
  },
  methods: {
    toggleNav: function() {
      if (this.burgerOpen == false) {
        this.openNav();
      } else {
        this.closeNav();
      }
    },
    openNav() {
      console.log("🍔");
      this.$refs.hamburger.classList.add(this.burger.toggled);
      this.$refs.thewrapper.style.height = 40 * this.burger.menuLength + "px";
      this.burgerOpen = true;
    },
    closeNav() {
      console.log("🚫🍔");
      this.$refs.hamburger.classList.remove(this.burger.toggled);
      this.$refs.thewrapper.style.height = 0;
      this.burgerOpen = false;
    },
    documentClick(tgt) {
      let el = this.$refs.hamburger;
      let target = tgt.target;

      if (this.burgerOpen == true && el !== target && !el.contains(target)) {
        this.closeNav();
      }
    }
  },
  created() {
    document.addEventListener("click", this.documentClick);
  },
  destroyed() {
    document.removeEventListener("click", this.documentClick);
  }
};
</script>
