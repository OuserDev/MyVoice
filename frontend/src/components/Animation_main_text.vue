<template>
  <div>
    <XyzTransition class="item-group" xyz="fade down-100% back-5" mode="out-in">
      <div class="square" v-if="message == 0">
        내 목소리로 된 아이유 노래를 듣고 싶다면 ?
      </div>
      <div class="square" v-if="message == 1">
        남사친 사운드로 라디오를 듣고 싶다면 ?
      </div>
      <div class="square" v-if="message == 3">
        최애 아이돌이 가르쳐주는 인강을 듣고 싶다면 ?
      </div>
      <div class="square" v-if="message == 4">
        중요한 발표나 녹음을 연습하고 싶다면 ?
      </div>
      <!-- MyVoice 텍스트 -->
      <div v-if="message == 2" class="square">
        <p class="gradient-teext" style="font-size: 2.5em">MyVoice</p>
      </div>
    </XyzTransition>
    <!-- logow.png 이미지에 대한 XyzTransition -->
  </div>
</template>
<script>
export default {
  data() {
    return {
      message: 0,
    };
  },
  mounted() {
    this.interval = setInterval(() => {
      if (this.message >= 4) {
        this.message = 0;
      } else {
        this.message += 1;
      }
    }, 2000);
  },
  beforeDestroy() {
    clearInterval(this.interval);
  },
};
</script>

<style>
.gradient-teext {
  background: linear-gradient(to right, #ffffff, #2c7ba6);
  -webkit-background-clip: text;
  color: transparent;
}

.square {
  font-family: "IBM Plex Sans KR", serif;
  font-size: 2.5em;
  font-weight: bolder;
  color: white;
}
</style>
