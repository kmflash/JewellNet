<template>
  <div class="project__carousel-images">
    <div
      class="project__carousel--image-wrapper"
      v-for="img in imgs"
      :key="img.id"
      :class="{
        'active': pos === img.id + 1
        }"
    >
      <img :src="assembleImagePath(img.fileName)" alt="" class="project__carousel--image" :srcset="assembleImagePath(img.fileName, '2x')">
    </div>
  </div>
</template>

<script>
export default {
  name: "carousel-images",
  props: ["imgs", "pos", "basePath", "imageType"],
  methods: {
    assembleImagePath: function(fileName, density = "") {
      // construct the URL given the parts from the json file
      let completeURL = this.basePath + fileName;

      if (density != "") {
        completeURL += "@" + density + "." + this.imageType + " " + density;
      } else {
        completeURL += "." + this.imageType;
      }

      return completeURL;
    }
  }
};
</script>

