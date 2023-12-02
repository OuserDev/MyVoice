<template>
    <div class="Card" :style="cardStyle" @click="클릭카드선택">
        <!-- 로고에 :style을 사용하여 동적으로 생성된 색상 적용 -->
        <div class="name" :style="{color: 카드정보.selectColor}" >{{ 카드정보.voice_name }}</div>
        <!-- 이미지 -->
        <img :src="getImagePath(카드정보.voice_name)" class="image" :style="{ boxShadow: boxShadowStyle }">
        <!-- 제목에 :style을 사용하여 동적으로 생성된 색상 적용 -->
        <div class="title" :style="{color: 카드정보.selectColor}">MY VOICE</div>
    </div>
</template>
  
  <script>
  export default {
    components: {
    },
    props : {
        카드정보:Object,
    },
    data() {
      return {      
        cardStyle: {},
        boxShadowStyle: '',
      };
    },
    methods: {
      setRandomGradient() {
        this.cardStyle.backgroundImage = `radial-gradient(circle at center, ${this.카드정보.selectColor} 0%, transparent 90%)`;
        this.cardStyle.border = `4px solid ${this.카드정보.selectColor}`; // 테두리에 색상 적용
        this.boxShadowStyle = `0 0px 13px 20px rgba(${parseInt(this.카드정보.selectColor.slice(1, 3), 16)}, ${parseInt(this.카드정보.selectColor.slice(3, 5), 16)}, ${parseInt(this.카드정보.selectColor.slice(5, 7), 16)}, 0.3)`;
      },getImagePath(name) {
        return require(`@/assets/datasets/${name}.png`);
      },
      클릭카드선택() {
        this.$emit('클릭카드선택', this.카드정보, this.카드정보.selectColor);
      }
    },
    mounted() {
      this.setRandomGradient();
    },
  };
  </script>
  <style>
  .Card {
    border-radius: 30px;
    width: 216px; /* 카드의 폭 */
    padding: 20px; /* 카드 내부의 여백 */
    text-align: center; /* 텍스트 가운데 정렬 */
    overflow: hidden; /* 내부 요소가 넘치면 숨김 처리 */
    height: 332px; /* 카드의 높이를 조정 */
    background-color: rgb(41, 39, 39);
  }
  
  .image {
    width: 110px; /* 이미지 크기 */
    height: 110px;
    border-radius: 50%; /* 원형 이미지 */
    top: 15%;
    position: relative; /* 상대적 위치 */
    z-index: 1;
  }
  
  .Card .title {
    font-size: 1em; /* 제목 글꼴 크기 */
    font-weight: bold;
    color: white; /* 제목 색상 */
    z-index: 1; /* 레이어 */
    position: relative; /* 절대 위치 */
    width: 100%; /* 너비 */
    top: 35%; /* 상단에서의 위치 조정 */
    left: 0% ;
    font-family: 'IBM Plex Sans KR', serif;
  }
  
  .Card .name {
    font-size: 2em; /* 제목 글꼴 크기 */
    font-weight: bold;
    color: white; /* 제목 색상 */
    z-index: 10; /* 레이어 */
    position: relative; /* 절대 위치 */
    width: 100%; /* 너비 */
    top: 1%; /* 상단에서의 위치 조정 */
    font-family: 'IBM Plex Sans KR', serif;
  }
  </style>