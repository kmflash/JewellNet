<template>
  <section class="about">
    <div class="about__header">
      <div class="h2-wrapper">
        <h2>About Me</h2>
      </div>
    </div>
    <div class="about__content">
      <div class="about__content-photo">
        <img :src="this.bioPhoto" alt="David Jewell">
      </div>
      <div class="about__content-long-bio" v-html="this.longBio"></div>
    </div>
    <section class="about__contact">
      <div class="h2-wrapper">
        <h2>Say Hi</h2>
      </div>
      <contact-form></contact-form>
    </section>
  </section>
</template>

<script>
import contactForm from "./contactForm.vue";
// utilizes elements from https://github.com/jcottrell/vue-example-contact-form
export default {
  name: "about",
  components: {
    "contact-form": contactForm
  },
  props: ["longBio", "bioPhoto"],
  mounted() {
    document.body.id = "about";
    document.body.className = "scrolled";
  }
};
</script>
