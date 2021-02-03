<template>
  <div>
    <input
      :class="pinInputClass"
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
    pinInputClass: {
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
.vap-pin-input {
  width: 80%;
  height: 6rem;
  border: none;
  background-color: #e5e5e5;
  border-radius: 6px;
  opacity: 0.4;
  font-size: 4rem;
  color: #000;
  text-align: center;
}
</style>
