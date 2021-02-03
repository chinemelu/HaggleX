<template>
  <button @click="handleButtonClick" class="primary-button">
    {{ buttonText }}
  </button>
</template>

<script>
export default {
  props: {
    buttonText: {
      type: String,
      default: ""
    }
  },
  methods: {
    handleButtonClick() {
      this.$emit("button-clicked");
    }
  }
};
</script>

<style lang="scss" scoped></style>
