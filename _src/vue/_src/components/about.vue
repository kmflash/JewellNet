<template>
  <section class="about">
    <div class="h2-wrapper">
      <h2>About Me</h2>
    </div>

    </section>
</template>

<script>
export default {
  name: "about",
  props: ["longBio", "bioPhoto"],
  mounted() {
    document.body.id = "about";
    document.body.className = "scrolled";
  }
};
</script>
