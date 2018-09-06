<template>
  <footer class="siteFooter">
    <p>Copyright &copy; {{year}} David Jewell</p>
  </footer>
</template>

<script>
export default {
  name: "site-footer",
  data() {
    return {
      year: new Date().getFullYear()
    };
  }
};
</script>
