<template>
<div class="project__carousel-controls">
  <a class="project__carousel-controls--back" v-on:click="$emit('back')" :class="{'disabled': this.backBtn}">
    <caret-icon></caret-icon>
  </a>
  <div class="project__carousel-controls--location">
    <span class="pos">{{this.pos}}</span>
    <span class="seperator">/</span>
    <span class="total">{{total}}</span>
  </div>
  <a class="project__carousel-controls--next" v-on:click="$emit('next')" :class="{'disabled': this.nextBtn}">
    <caret-icon></caret-icon>
  </a>
</div>
</template>

<script>
import caretSVG from "../svg/icon-caret.svg.vue";
export default {
  name: "carousel-controls",
  components: {
    "caret-icon": caretSVG
  },
  props: ["total", "pos", "backBtn", "nextBtn"]
};
</script>
