<template>
  <div class="auth-input-container">
    <label class="auth-label" v-if="label">{{ label }}</label>
    <input
      class="auth-input"
      :value="value"
      @input="updateValue"
      v-bind="$attrs"
    />
  </div>
</template>

<script>
export default {
  inheritAttrs: false,
  props: {
    label: {
      type: String,
      default: ""
    },
    value: {
      type: [String, Number]
    },
    inputClass: {
      type: String,
      default: ""
    }
  },
  methods: {
    updateValue(event) {
      this.$emit("input", event.target.value);
    }
  }
};
</script>

<style lang="scss" scoped>
.auth-input-container {
  position: relative;
}
.auth-input {
  border: none;
  border-bottom: 1px solid black;
  width: 100%;
  padding-bottom: 1.1rem;
}

.auth-label {
  position: absolute;
  font-size: 14px;
  top: -.5rem;
}
</style>
