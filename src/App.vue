<template>
  <div id="app">
    <AppHeader></AppHeader>
    <Books></Books>
  </div>
</template>
<script>
import AppHeader from "./components/AppHeader";
import Books from "./components/Books";

export default {
  data() {
    return {};
  },
  methods: {},
  components: {
    AppHeader,
    Books
  },
  created() {}
};
</script>
<style lang="scss">
@import "./assets/scss/fonts.scss";
@import "./assets/scss/global.scss";
@import "./assets/scss/button.scss";
</style>
