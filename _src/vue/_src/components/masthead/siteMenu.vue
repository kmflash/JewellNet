<template>
  <div class="masthead__menu">
    <div class="masthead__menu-burger" v-on:click="toggleNav">
      <burger-icon></burger-icon>
    </div>
    <div class="masthead__menu-wrapper">
      <ul class="masthead__menu-list">
        <li v-for="item in theMenu" :key="item.key" :class="['masthead__menu-list-' + item.key, {disabled: item.isDisabled}]">
          <router-link :to="{name: item.key}" v-if="item.key != 'email'">{{item.text}}</router-link>
          <a :href="buidEmail(item.email)" v-else >{{item.text}}</a>
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
          key: "home", // named route path
          url: "/",
          text: "home",
          isDisabled: false
        },
        {
          key: "email",
          email: {
            // assemble to try and discourage spam
            name: "me",
            domain: "davidjewell",
            tld: "nyc"
          },
          text: "Contact Me",
          isEmail: true,
          isDisabled: false
        },
        {
          key: "playground",
          url: "#",
          text: "Playground",
          isDisabled: true
        }
      ],
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
    },
    buidEmail: function(addr) {
      return (
        "mailto\u003A\u0014" +
        addr.name +
        "\u0040" +
        addr.domain +
        "\u002E" +
        addr.tld
      );
    }
  }
};
</script>
