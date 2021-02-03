<template>
  <div class="carousel">
    <figure class="carousel-image-container">
      <img :src="activeImage.src" alt="carousel image" class="carousel-image" />
      <h1 class="carousel-primary-text">{{ activeImage.primaryText }}</h1>
      <figcaption class="carousel-secondary-text">
        {{ activeImage.secondaryText }}
      </figcaption>
    </figure>
    <nav
      class="carousel-navigation"
      v-if="conditionForCarouselNavigationToShow"
    >
      <svg class="chevron-left" @click="handlePreviousImageClick">
        <use xlink:href="@/assets/sprite.svg#icon-chevron-thin-left"></use>
      </svg>
      <div
        :class="[
          index === activeCarouselImageIndex ? 'visible' : 'invisible',
          'current-image-indicator'
        ]"
        v-for="(image, index) in imageArray"
        :key="index"
      ></div>

      <svg class="chevron-right" @click="handleNextImageClick">
        <use xlink:href="@/assets/sprite.svg#icon-chevron-thin-right"></use>
      </svg>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      previouslyActiveCarouselImageIndex: 0,
      activeCarouselImageIndex: 0,
      lowestPossibleImageArrayIndex: 0
    };
  },
  computed: {
    maximumImageArrayIndex() {
      return this.imageArray.length - 1;
    },
    activeImage() {
      return this.imageArray[this.activeCarouselImageIndex];
    },
    conditionForCarouselNavigationToShow() {
      return this.imageArray.length > 0;
    }
  },
  methods: {
    handlePreviousImageClick() {
      this.previouslyActiveCarouselImageIndex = this.activeCarouselImageIndex;
      if (
        this.activeCarouselImageIndex === this.lowestPossibleImageArrayIndex
      ) {
        this.activeCarouselImageIndex = this.maximumImageArrayIndex;
      } else {
        this.activeCarouselImageIndex--;
      }
    },
    handleNextImageClick() {
      this.previouslyActiveCarouselImageIndex = this.activeCarouselImageIndex;
      if (this.activeCarouselImageIndex === this.maximumImageArrayIndex) {
        this.activeCarouselImageIndex = 0;
      } else {
        this.activeCarouselImageIndex++;
      }
    }
  },
  props: {
    imageArray: {
      type: Array,
      default: () => []
    }
  }
};
</script>

<style lang="scss" scoped>
.carousel {
  text-align: center;
  color: #fff;
}
.carousel-image-container {
  position: relative;
}
.carousel-image {
  width: 100%;
  height: 40rem;
  margin: 10% 0 3% 0;
}
.carousel-primary-text {
  font-size: 2.5rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
}
.carousel-secondary-text {
  max-width: 30%;
  margin: 0 auto;
  font-weight: 400;
}
.carousel-navigation {
  max-width: 20%;
  margin: 3rem auto;
  display: flex;
  justify-content: center;
  align-items: center;
}
.current-image-indicator {
  border: 1px solid white;
  width: 1.3rem;
  height: 1.3rem;
  margin-right: 1rem;
  margin-left: 1rem;
  border-radius: 100%;
  background-color: #fff;
  &.visible {
    opacity: 1;
  }
  &.invisible {
    opacity: 0.2;
  }
  &:first-of-type {
    margin-left: auto;
  }
  &:last-of-type {
    margin-right: auto;
  }
}
.chevron-left {
  fill: #fff;
  width: 1.5rem;
  height: 1.5rem;
  cursor: pointer;
}
.chevron-right {
  fill: #fff;
  width: 1.5rem;
  height: 1.5rem;
  cursor: pointer;
}
</style>
