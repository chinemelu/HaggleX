<template>
  <div class="auth-layout">
    <div class="light-gradient">
      <Carousel :imageArray="imageArray" />
    </div>
    <div class="dark-gradient">
      <div class="light-box-top"></div>
      <slot name="dark-gradient"></slot>
      <div class="light-box-bottom"></div>
    </div>
  </div>
</template>

<script>
import Carousel from "@/components/Carousel";
export default {
  components: {
    Carousel
  },
  data() {
    return {
      imageArray: [
        {
          src: require("@/assets/1st_illustration.svg"),
          primaryText: "Trade Globally",
          secondaryText:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur reprehenderit aut fugit laboriosam corporis veritatis quas, officia architecto accusamus itaque id quisquam quae tempora quam accusantium quibusdam veniam quidem. Impedit?"
        },
        {
          src: require("@/assets/2nd_illustration.svg"),
          primaryText: "Safe and Secure Wallet",
          secondaryText:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur reprehenderit aut fugit laboriosam corporis veritatis quas, officia architecto accusamus itaque id quisquam quae tempora quam accusantium quibusdam veniam quidem. Impedit?"
        },
        {
          src: require("@/assets/3rd_illustration.svg"),
          primaryText: "Faster Transactions",
          secondaryText:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur reprehenderit aut fugit laboriosam corporis veritatis quas, officia architecto accusamus itaque id quisquam quae tempora quam accusantium quibusdam veniam quidem. Impedit?"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.auth-layout {
  max-width: 90%;
  margin: 4rem auto 0 auto;
  display: flex;
  height: 80vh;
}

.light-gradient {
  flex: 0 0 59%;
  background-image: linear-gradient(to right, #2e1963, #482e8b);
}

.dark-gradient {
  flex: 1;
  background-color: #2e1963;
  position: relative;
}

.light-box-top {
  width: 10rem;
  height: 10rem;
  background: #b395ff;
  border-radius: 1.9rem;
  opacity: 0.2;
  position: absolute;
  z-index: 0;
  left: 5%;
  top: 4%;
}

.light-box-bottom {
  width: 20rem;
  height: 20rem;
  background: #b395ff;
  border-radius: 1.9rem;
  opacity: 0.2;
  position: absolute;
  z-index: 0;
  right: 5%;
  bottom: 18%;
}
</style>
