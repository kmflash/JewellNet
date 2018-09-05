<template>
<div class="project__carousel-controls">
  <caret-icon></caret-icon>
  <a class="project__carousel-controls--back">
    <caret-icon></caret-icon>
  </a>
                      <div class="project__carousel-controls--location">
                        <span class="pos">1</span>
                        <span class="seperator">/</span>
                        <span class="total">--</span>
                    </div>
    <a class="project__carousel-controls--fwd">
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
  }
};
</script>
