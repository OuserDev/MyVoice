<template>
  <div class="bg-dark v">
  <div class="image-overlay-container">
    <img src="@/assets/homeview_back.png" class="img-fluid full-width" alt="Responsive image" >
    <div class="image-dark-overlay"></div>
    <div class="wave-overlay"><wave/></div> 
    <div class="text-overlay"><Animation/></div> 
  </div>

  <!-- 캐러셀 -->
  <div id="myCarousel" class="carousel slide" data-bs-ride="carousel" data-bs-interval="2500">
    <div class="carousel-indicators">
      <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src="@/assets/logo/carousel1.jpg" class="d-block w-100" alt="...">
        <div class="container">
          <div class="carousel-caption text-start ">
            <h1 class="fw-bold">당신의 상상력을 펼쳐보세요!</h1>
            <p>MyVoice에서는 당신의 맞춤형 콘텐츠 제공을 위해 최선을 다하겠습니다.</p>
            <p><router-link class="btn btn-lg btn-primary my-custom-button rounded" to="/voice">Let's MV!</router-link></p>
          </div>
        </div>
      </div>
      <div class="carousel-item">
        <img src="@/assets/logo/carousel2.jpg" class="d-block w-100" alt="...">
        <div class="container">
          <div class="carousel-caption">
            <h1 class="fw-bold">색다른 경험을 시작해보세요!</h1>
            <p>AI XXX 모델을 통한 Deep-Learning 기술을 활용하였습니다.</p>
            <p><a class="btn btn-lg btn-primary my-custom-button rounded" href="#">자세히 보기</a></p>
          </div>
        </div>
      </div>
      <div class="carousel-item">
        <img src="@/assets/logo/carousel3.jpg" class="d-block w-100" alt="...">
        <div class="">
          <div class="carousel-caption text-end">
            <h1 class="fw-bold">어제 보다 더 나은 오늘을 위해.</h1>
            <p>MyVoice는 새로운 디지털 시대의 탄생에 앞장서기 위해 꾸준히 도약하겠습니다.</p>
            <p><a class="btn btn-primary btn-lg my-custom-button rounded" href="#">Contact</a></p>
          </div>
        </div>
      </div>
    </div>
    <button class="carousel-control-prev z-3" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next z-3" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>

  <!-- Marketing messaging and featurettes
  ================================================== -->
  <!-- Wrap the rest of the page in another container to center all the content. -->
  

  <div class="container marketing mt-5">
    <div class="container px-5 pt-5 " id="featured-3">
    <h2 class="pb-2 border-bottom fw-bold h1 text-white">이런 분들께 추천드려요!</h2>
    <div class="row g-5 py-5 row-cols-1 row-cols-lg-3">
      <div class="feature col">
        <img style="width: 90px; height: 90px;" class="img-fluid rounded-circle" src="@/assets/logo/학생.png">
        <h3 class="fs-2 fw-bold text-white pt-3">학생 및 강의 수강생</h3>
        <p class="text-white">본인이 좋아하는 목소리로 강의나<br>교재를 듣고자 하는 사람들</p>
      </div>
      <div class="feature col">
        <img style="width: 90px; height: 90px;" src="@/assets/logo/아티스트.png">
        <h3 class="fs-2 fw-bold text-white pt-3">노래, 음악 애호가</h3>
        <p class="text-white">자신의 목소리나 원하는 아티스트의 목소리로<br>노래나 오디오 콘텐츠를 재생성하고자 하는 크리에이터</p>
      </div>
      <div class="feature col">
        <img style="width: 90px; height: 90px;" src="@/assets/logo/발표.png">
        <h3 class="fs-2 fw-bold text-white pt-3">예행 연습</h3>
        <p class="text-white">본인의 목소리를 직접 활용 및 비교하여<br>발표나 녹음의 예행 연습을 준비하려는 사람들</p>
      </div>
    </div>
  </div>

  <hr class="featurette-divider"> 
  

    <div class="px-4 pt-5 mt-5 text-center border-bottom">
    <h1 class="display-4 fw-bold text-white"><p class="gradient-text">상상했던 것들이 현실로!</p></h1>
    <div class="col-lg-8 mx-auto">
      <p class="lead mb-4 text-white">음성은 단순한 소리가 아니라, 감정과 생각의 도화지입니다.<br>단 한 번의 클릭으로 나만의 독특한 음원을 창조하세요!<br>혁신적인 인공지능 기술이 만들어내는 놀라운 음성 변환의 세계로 초대합니다.<br>여러분의 이야기가 예술로 승화되는 순간을 함께하겠습니다!</p>
      <div class="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
        <button type="button" class="btn btn-primary rounded px-4 my-custom-button" @click="회원가입창열기">Sign up</button>
        <button type="button" class="btn btn-outline-secondary rounded px-4">문의하기</button>
      </div>
    </div>
    <div class="overflow-hidden" style="max-height: 40vh;">
      <div class="">
        <img src="@/assets/homeview_2.png" class="img-fluid border rounded-3 shadow-lg mt-5" style="" alt="Example image" width="700" height="500" loading="lazy">
      </div>
    </div>
  </div>
  <!-- <div class="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
      <div class="col-lg-7 p-3 p-lg-5 pt-lg-3">
        <h1 class="display-4 fw-bold lh-1 text-body-emphasis">Border hero with cropped image and shadows</h1>
        <p class="lead">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
        <div class="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
          <button type="button" class="btn btn-primary btn-lg px-4 me-md-2 fw-bold">Primary</button>
          <button type="button" class="btn btn-outline-secondary btn-lg px-4">Default</button>
        </div>
      </div>
      <div class="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">
          <img class="rounded-lg-3" src="@/assets/homeview_2.png" alt="" width="720">
      </div>
    </div> -->
  </div>
    <!-- <hr class="featurette-divider"> -->
    <!-- /END THE FEATURETTES --><!-- /.container -->
  </div>
</template>




<script>
import { mapMutations } from 'vuex'

import Animation from '../components/Animation_main_text.vue';
import wave from '../components/Animation_main_wave.vue';
import Carousel from 'bootstrap/js/dist/carousel';

export default {
  name: "HomeView",
  components: {
    Animation,
    wave,
  },
  mounted() {
    var myCarousel = document.querySelector('#myCarousel')
    var carousel = new Carousel(myCarousel, {
      interval: 2500,
      wrap: true
    });
  },
  methods : {
    ...mapMutations(['회원가입창열기'])
  }
};
</script>




<style>
@import "@/assets/features.css";
@import "@/assets/HomeView_modify.css";
@import "@/assets/carousel.css";
@import 'https://cdn.jsdelivr.net/npm/@docsearch/css@3';
@import "https://getbootstrap.com/docs/5.3/examples/carousel/";
@import "https://getbootstrap.com/docs/5.3/examples/features/";
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css");
a.my-custom-button {
  background-color: #3a98cb; /* 원하는 배경 색상 */
  border-color: #3a98cb; /* 원하는 테두리 색상 */
  padding: 10px 30px;
  font-size: 20px;
}

a.my-custom-button:hover{
  background-color: #2c53a6; /* 마우스 오버 시 색상 */
  border-color: #2c53a6;
  padding: 10px 30px;
  font-size: 20px;
}

button.my-custom-button {
  background-color: #3a98cb; /* 원하는 배경 색상 */
  border-color: #3a98cb; /* 원하는 테두리 색상 */
  padding: 10px 30px;
  font-size: 20px;
}

button.my-custom-button:hover{
  background-color: #2c53a6; /* 마우스 오버 시 색상 */
  border-color: #2c53a6;
  padding: 10px 30px;
  font-size: 20px;
}

.gradient-text {
    background: linear-gradient(to right, #ffffff, #3a98cb);
    -webkit-background-clip: text;
    color: transparent;
}

</style>