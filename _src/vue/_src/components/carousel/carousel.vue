<template>
  <div class="project__carousel" :class="{activated}" v-touch:swipe.left="nextImage" v-touch:swipe.right="prevImage">
    <carousel-controls
      :total="imgs.length"
      :pos="pos"
      :backBtn="backBtn"
      :nextBtn="nextBtn"
      v-on:back="prevImage"
      v-on:next="nextImage"
      ></carousel-controls>
    <carousel-images :imgs="imgs" :pos="pos"></carousel-images>
  </div>
</template>

<script>
import carouselControls from "./carouselControls.vue";
import carouselImages from "./carouselImages.vue";

export default {
  name: "carousel",
  data() {
    return {
      pos: 1,
      tot: this.imgs.length,
      backBtn: true,
      nextBtn: false,
      activated: false
    };
  },
  components: {
    "carousel-controls": carouselControls,
    "carousel-images": carouselImages
  },
  props: ["imgs"],
  methods: {
    prevImage: function() {
      // update controls and position info
      if (this.pos !== 1) {
        --this.pos;
        console.log("⬅️");
        this.updateControls();
      } else {
        return;
      }
    },
    nextImage: function() {
      if (this.pos < this.tot) {
        ++this.pos;
        console.log("➡️");
        this.updateControls();
      } else {
        return;
      }
    },
    updateControls: function() {
      this.pos == this.tot ? (this.nextBtn = true) : (this.nextBtn = false);
      this.pos == 1 ? (this.backBtn = true) : (this.backBtn = false);
    }
  },
  mounted() {
    this.activated = true;
  }
};
</script>
