<template>
<div class="project__carousel--wrapper">
      <carousel-controls
      :total="imgs.length"
      :pos="pos"
      :backBtn="backBtn"
      :nextBtn="nextBtn"
      v-on:back="prevImage"
      v-on:next="nextImage"
      ></carousel-controls>
<div class="project__carousel" :class="{activated}" v-touch:swipe.left="nextImage" v-touch:swipe.right="prevImage">

    <carousel-images :imgs="imgs" :pos="pos"></carousel-images>
  </div>
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
  props: ["imgs", "imageSizes"],
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
      this.moveTray();
    },
    moveTray: function() {
      var docWidth = document.body.clientWidth;
      var imageTray = document.querySelector(".project__carousel-images");

      // breakpoints
      var bpXSBaseLine = 375;

      var bpSM = 768;
      var bpMD = 1025;
      var bpLG = 1401;

      //image Sizes
      var imageWidthSM = 340;
      var imageOffsetSM = 10;

      var imageWidthMD = 674;
      var imageOffsetMD = 28;

      var imageWidthLG = 850;
      var imageOffsetLG = imageOffsetMD;

      var imageWidthXL = 927;
      var imageOffsetXL = imageOffsetMD;

      var offsetPctSM = (imageWidthSM + imageOffsetSM) / bpXSBaseLine * 100;
      var offsetMD = imageWidthMD + imageOffsetMD;
      var offsetLG = imageWidthLG + imageOffsetLG;
      var offsetXL = imageWidthXL + imageOffsetXL;

      if (docWidth < bpSM) {
        imageTray.style.left = (this.pos - 1) * offsetPctSM * -1 + "%";
      } else if (docWidth >= bpSM && docWidth < bpMD) {
        imageTray.style.left = (this.pos - 1) * offsetMD * -1 + "px";
      } else if (docWidth >= bpMD && docWidth < bpLG) {
        imageTray.style.left = (this.pos - 1) * offsetLG * -1 + "px";
      } else {
        imageTray.style.left = (this.pos - 1) * offsetXL * -1 + "px";
      }
    },
    updateCarouselHeight: function() {
      var theCarousel = document.querySelector(".project__carousel");
      var theInfo = document.querySelector(".project-info");
      var docWidth = document.body.clientWidth;

      if (docWidth > 1400) {
        if (theCarousel.offsetHeight < theInfo.offsetHeight) {
          theCarousel.style.height = theInfo.offsetHeight + "px";
        } else {
          theInfo.style.height = theCarousel.offsetHeight - 30 + "px";
        }
      } else {
        theCarousel.style.height = "unset";
        theInfo.style.height = "unset";
      }
    }
  },
  mounted() {
    this.activated = true;
    this.moveTray();
    window.addEventListener("resize", this.updateCarouselHeight);

    this.updateCarouselHeight();
  },
  beforeDestroy: function() {
    window.removeEventListener("resize", this.updateCarouselHeight());
  }
};
</script>
