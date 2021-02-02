<template>
  <button class="primary-button">{{ buttonText }}</button>
</template>

<script>
export default {
  props: {
    buttonText: {
      type: String,
      default: ''
    },
  },
};
</script>

<style lang="scss" scoped></style>
