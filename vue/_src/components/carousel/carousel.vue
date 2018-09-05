<template>
  <div class="project__carousel activated">
    <carousel-controls></carousel-controls>
    <carousel-images :imgs="imgs"></carousel-images>
  </div>
</template>

<script>
import carouselControls from "./carouselControls.vue";
import carouselImages from "./carouselImages.vue";

export default {
  name: "carousel",
  components: {
    "carousel-controls": carouselControls,
    "carousel-images": carouselImages
  },
  props: ["imgs"]
};
</script>
