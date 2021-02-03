<template>
  <div class="auth-layout">
    <div class="light-gradient">
      <transition name="fade" mode="out-in" appear>
        <Carousel :imageArray="imageArray" />
      </transition>
    </div>
    <div class="dark-gradient">
      <slot name="dark-gradient"></slot>
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
}

.fade-enter {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease-in;
}

.fade-leave-to {
  opacity: 0;
}
</style>
