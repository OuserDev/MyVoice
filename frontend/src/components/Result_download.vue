<template>
  <div class="content mb-5">
    <XyzTransition xyz="fade up-50% duration-10" :appear-visible="true">
      <div class="text-dark mb-5 pb-5" v-if="true">

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
    </XyzTransition>
  </div>
</template>

<script>
import { mapState,mapMutations } from "vuex";

export default {
  data() {
    return {
      cycle: 1,
      result: 0
    }
  },
  methods : {
    ...mapMutations(['set업로드한음원']),
  },
  computed: {
    ...mapState(["선택한카드", "업로드한음원"]),
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
    }, 4000); // 3초(3000밀리초)마다 호출
  },
};
</script>

<style>
.gradient-text {
    background: linear-gradient(to right, #7c7777, #1d73e4);
    -webkit-background-clip: text;
    color: transparent;
}
</style>
