const DynamicComponent = {
  mounted() {},
  data() {
    return {
      activeComponentIndex: 0
    };
  },
  methods: {
    moveToNextComponent() {
      this.activeComponentIndex += 1;
    }
  }
};

export default DynamicComponent;
