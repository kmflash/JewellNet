<template>
  <div class="project-listing">
    <!-- <a :href="project.key"> -->
      <router-link :to="`/projects/${project.id}/`">
      <div class="project-listing__img">
        <img :src="project.thumb" alt="">
      </div>
      <h3 class="project-listing__title">{{project.name}}</h3>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "project-list-item",
  props: ["project"]
};
</script>
