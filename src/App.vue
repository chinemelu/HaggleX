<template>
  <div>
    <!-- <component :is="layout"> -->
    <router-view />
    <!-- </component> -->
  </div>
</template>

<script>
// const defaultLayout = "auth";
export default {
  name: "App",
  computed: {
    // layout() {
    //   return `${this.$route.meta.layout || defaultLayout}-layout`;
    // }
  }
};
</script>

<style></style>
