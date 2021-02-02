<template>
  <div>
    <div class="auth-layout">
      <div class="light-gradient">
        <slot name="light-gradient"></slot>
      </div>
      <div class="dark-gradient">
        <slot name="dark-gradient"></slot>
      </div>
    </div>
  </div>
</template>

<script>
// import Carousel from "@/components/Carousel";
export default {
  components: {
    // Carousel,
  }
};
</script>

<style lang="scss" scoped>
.auth-layout {
  max-width: 80%;
  margin: 4rem auto 0 auto;
  display: flex;
}

.light-gradient {
  flex: 0 0 59%;
  background-image: linear-gradient(to right, #2e1963, #482e8b);
}

.dark-gradient {
  flex: 1;
  background-color: #2e1963;
}
</style>
