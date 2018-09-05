<template>
  <div class="project__carousel-images">
    <div class="project__carousel--image-wrapper" v-for="img in imgs" :key="img.url">
      <img :src="img" alt="" class="project__carousel--image">
    </div>
    <div class="project__carousel--image-mask">
        &nbsp;
    </div>
  </div>
</template>

<script>
export default {
  name: "carousel-images",
  props: ["imgs"]
};
</script>

