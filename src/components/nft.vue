<template>
  <div style="padding-bottom:50px;">
  <div class="centered-carousel">
  <Carousel :itemsToShow="3" :wrapAround="true" :autoplay="3000" :transition="500">
    <Slide v-for="(item,index) in 보이스셋리스트" :key="index" >
  <card :카드정보="item" />
    </Slide>

    <template #addons>
    <Pagination />
    <Navigation />
  </template>
  </Carousel>
  </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import { Carousel, Navigation, Slide, Pagination } from 'vue3-carousel';
import 'vue3-carousel/dist/carousel.css';
import card from "@/components/card.vue";
import { mapActions,mapState } from 'vuex';

export default defineComponent({
  name: 'Autoplay',
  data() {
      return {
          settings: {
          itemsToShow: 1,
          snapAlign: 'center',
  },
      }
  },
  components: {
      Pagination,
      Carousel,
      Slide,
      Navigation,
      card,
  },
  computed : {
    ...mapState(['보이스셋리스트']),
  },
  methods: {
    ...mapActions(['get보이스셋리스트'])
  },
  mounted() {
    this.get보이스셋리스트();
  },
  watch : {
    보이스셋리스트(newVal) {
        console.log("성공", newVal[0].voice_name);
    }
  }
})
</script>

<style>
.centered-carousel {
width: 650px;
margin: 0 auto;
}
.carousel__pagination {
  padding-left: 0px;
}

.carousel__viewport {
  perspective: 2000px;
  overflow: hidden;
}

.carousel__track {
  transform-style: preserve-3d;
}

.carousel__slide--sliding {
  transition: 0.5s;
}

.carousel__slide {
  opacity: 0.9;
  transform: rotateY(-20deg) scale(0.9);
}

.carousel__slide--active ~ .carousel__slide {
  transform: rotateY(50deg) scale(0.95);
}

.carousel__slide--prev {
  transform: rotateY(-50deg) scale(0.95);
}

.carousel__slide--next {
  transform: rotateY(30deg) scale(0.9);
}

.carousel__slide--active {
  transform: rotateY(0) scale(1);
}

.carousel__icon {
  fill: white;
  }

</style>
