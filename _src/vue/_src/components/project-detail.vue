<template>
  <div>
    <section class="project" v-for="project in theProjectList" :key="project.id" v-if="project.id === $route.params.id">
      <div class="project-header" >
        <div class="project-header__title-wrapper h2-wrapper">
          <h2 class="project-header__title">{{project.name}}</h2>
        </div>
        <span class="project-header__year">{{project.year}}</span>
      </div>
      <carousel :imgs="project.imgs"></carousel>

      <div class="project-info">
        <div class="project-info__section" v-if="project.disc">
          <div class="project-info__section-title-wrapper h4-wrapper">
            <h4 class="project-info__section-title">About</h4>
          </div>
          <p class="project-info__section-text" v-html="project.disc"></p>
        </div>
        <div class="project-info__section" v-if="project.role">
          <div class="project-info__section-title-wrapper h4-wrapper">
            <h4 class="project-info__section-title">Role</h4>
          </div>
          <p class="project-info__section-text" v-html="project.role"></p>
        </div>
        <div class="project-info__section" v-if="project.notes">
          <div class="project-info__section-title-wrapper h4-wrapper">
            <h4 class="project-info__section-title">Technical Notes</h4>
          </div>
          <ul class="project-info__section-list">
            <li v-for="item in project.notes" :key="item" v-html="item"></li>
          </ul>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import carousel from "./carousel/carousel.vue";
export default {
  name: "project-item",
  props: ["theProjectList"],
  components: {
    carousel: carousel
  },
  mounted() {
    document.body.id = "detail";
    document.body.className = "scrolled";
  }
};
</script>

