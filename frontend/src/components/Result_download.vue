<template>
  <div class="content mb-5">

    <XyzTransition appear mode="out-in" :appear-visible="true">

      <div xyz="fade up-50% duration-10" class="text-dark mb-5 pb-5" v-if="result == 0">
        <h2 class="fw-bold">
          <span class="gradient-text">{{ 업로드한음원 }}</span>를
          <span :style="`color: ${선택한카드.selectColor}`">{{선택한카드.voice_name}} 버전</span>으로 AI 변환해볼게요 ! </h2>
        <h2 class="mb-5">잠시만 기다려주세요 :D</h2>
          <div class="spinner-border text-primary mt-5" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
          <div class="mt-5" role="status">
            <span class="h5" v-if="cycle == 1">약 15초 ~ 1분 사이의 소요시간이 필요해요!</span>
            <span class="h5" v-if="cycle == 2">MyVoice는 RVC(Retrieval-based Voice Conversion) Deep-Learning 기술을 적용하였습니다.</span>
            <span class="h5" v-if="cycle == 3">본 서비스 사용으로 인해 발생하는 모든 법적 책임은 사용자에게 있습니다.</span>
          </div>
      </div>

      <div xyz="fade up-100% duration-5" class="text-dark mb-5 pb-5" v-if="result == 1">
        <div>
          <h1 class="fw-bold mb-3">결과가 나왔습니다 !</h1>
          <h2 class="mb-5">기다려주셔서 감사해요 !</h2>
        </div>
        <div class="d-flex align-items-center justify-content-center">
          <img :src="getImagePath(선택한카드.voice_name)" class="custom-img-size img-fluid" alt="...">
        </div>
        <div class="mt-4 gradient-text">
          <span class=" h3 fw-bold">[MyVoice_Result] {{선택한카드.voice_name}}_{{업로드한음원}}</span>
        </div>
        <div class="mt-5">
          <button class="btn-lg fw-bold my-custom-button" @click="파일다운로드">클릭하면 다운로드 돼요!</button>
        </div>
        <div class="mt-3">
          <router-link class="btn-lg my-custom-button" to="/">처음으로</router-link>
        </div>
      </div>    

    </XyzTransition>

  </div>
</template>

<script>
import { mapState,mapMutations,mapActions } from "vuex";

export default {
  data() {
    return {
      cycle: 1,
      result: 0
    }
  },
  methods : {
    ...mapActions(['파일다운로드']),
    ...mapMutations(['set업로드한음원']),
    getImagePath(name) {
        return require(`@/assets/datasets/${name}.jpg`);
    },
  },
  computed: {
    ...mapState(["선택한카드", "업로드한음원", "fileName"]),
  },
  components: {
  },
  mounted() {
    // 3초마다 cycle 값을 변경합니다.
    setInterval(() => {
      if (this.cycle === 3) {
        this.cycle = 1;
      } else {
        this.cycle++;
      }
    }, 4000);
    setTimeout(() => {
      if (this.result === 0) {
        this.result = 1;
      }
    }, 1000); // 3초(3000밀리초)마다 호출 // 3초(3000밀리초)마다 호출
  },
};
</script>

<style>
.custom-img-size {
  width: 300px;  /* 원하는 너비 */
  height: auto;  /* 높이를 auto로 설정하여 이미지의 비율을 유지 */
}

.gradient-text {
    background: linear-gradient(to right, #a1a0a0, #4086e2);
    -webkit-background-clip: text;
    color: transparent;
}
</style>
