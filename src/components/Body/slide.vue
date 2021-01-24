<template>
  <div>
    <VueSlickCarousel :arrows="true" :dots="true" v-bind="settings">
      <img
        class="d-block w-100"
        src="@/assets/image/slide-1.png"
        alt="First slide"
      />
      <img
        class="d-block w-100"
        src="@/assets/image/slide-2.png"
        alt="Second slide"
      />
      <img
        class="d-block w-100"
        src="@/assets/image/slide-3.png"
        alt="Third slide"
      />
    </VueSlickCarousel>
  </div>
</template>
<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
// optional style for arrows & dots
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
export default {
  components: {
    VueSlickCarousel,
  },
  name: "slide",
  data(){
    return {
      settings: {
        "dots": true,
  "dotsClass": "slick-dots custom-dot-class",
  "edgeFriction": 0.35,
  "infinite": false,
  "slidesToShow": 1,
  "slidesToScroll": 1,
  "autoplay": true,
  "speed": 2000,
  "autoplaySpeed": 2000,
      },
    };
  }
};
</script>