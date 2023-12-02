<template>

  <div class="pb-3">
    <div class="centered-carousel">
      <Carousel :itemsToShow="3" :wrapAround="true" :autoplay="autoplayInterval" :transition="500">
        <Slide v-for="(item,index) in 보이스셋리스트" :key="index" >
          <card :카드정보="item" @click="stopAutoplay" @클릭카드선택="클릭카드정보"/>
        </Slide>
        <template #addons>
          <Pagination />
          <Navigation />
        </template>
      </Carousel>
    </div>
  </div>

  <XyzTransition appear xyz="fade up-50%">
  <div class="container-fluid text-white" v-if="this.selectCardStatus===1">
    <div class="container pb-5 row" style="width: 800px;">
      <div class="customCard row px-0" :style="{ borderColor: selectCard.selectColor }">
        <card class="col-md-4" :카드정보="this.selectCard">
        </card>
        <div class="p-4 col-md fw-bold">
          <div class="row text-black fw-bold">{{ selectCard.info }}</div>
          <hr class="featurette-divider my-3"> 
            <div class="row p-md-3 icon-demo-examples">
              <div class="customColor fs-5 text-black">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-person-down" viewBox="0 0 16 16"><path d="M12.5 9a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7Zm.354 5.854 1.5-1.5a.5.5 0 0 0-.708-.708l-.646.647V10.5a.5.5 0 0 0-1 0v2.793l-.646-.647a.5.5 0 0 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0ZM11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"></path><path d="M8.256 14a4.474 4.474 0 0 1-.229-1.004H3c.001-.246.154-.986.832-1.664C4.484 10.68 5.711 10 8 10c.26 0 .507.009.74.025.226-.341.496-.65.804-.918C9.077 9.038 8.564 9 8 9c-5 0-6 3-6 4s1 1 1 1h5.256Z"></path></svg>
                전체 이용 횟수 <span class="fw-bold fs-4" :style="{color : selectCard.selectColor }">{{ selectCard.count }}</span> <span class="text-black fw-bold">회</span>
              </div>
            </div>
            <div class="fs-6 text-black">
              
              [MV Pick] 이런 곳에 활용을 추천 드려요!
              <p class="mt-1 mb-0 fs-5 fw-bold" :style="{color : selectCard.selectColor }">#노래  #미디어  #엔터테인먼트</p>
            </div>
          </div>
      </div>
    </div>
  </div>
  </XyzTransition>

</template>

<script>
import { defineComponent } from 'vue';
import { Carousel, Navigation, Slide, Pagination } from 'vue3-carousel';
import 'vue3-carousel/dist/carousel.css';
import card from "@/components/card.vue";
import { mapState } from 'vuex';

export default defineComponent({
  name: 'Autoplay',
  data() {
    return {
      selectCard: "",
      selectCardStatus: 0,
      autoplayInterval: 2000,
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
  methods : {
    stopAutoplay() {
      if (this.autoplayInterval == 2000) {
        this.autoplayInterval = 0;
        this.selectCardStatus = 1;
      } else {
        this.autoplayInterval = 2000;
        this.selectCardStatus = 0;
      }
    },
    클릭카드정보(카드정보, color) {
      this.selectCard = 카드정보;
    },
  }
})
</script>

<style>
.customColor {
  color: #3a98cb;
}

.customCard {
  background-color: rgba(255, 255, 255, 0.5);
  border: 4px solid; /* 테두리 스타일 */
  border-radius: 35px;
}

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
