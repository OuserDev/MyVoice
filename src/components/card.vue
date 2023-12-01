<template>
    <div class="Card" :style="cardStyle">
      <!-- 로고에 :style을 사용하여 동적으로 생성된 색상 적용 -->
      <div class="name" :style="{ color: logoColor }">아이유</div>
      <!-- 이미지 -->
      <img src="@/assets/celebrity.png" class="image" :style="{ boxShadow: boxShadowStyle }" alt="Celebrity">
      <!-- 제목에 :style을 사용하여 동적으로 생성된 색상 적용 -->
      <div class="title" :style="{ color: logoColor }">MY VOICE</div>
    </div>
  </template>
  
  <script>
  export default {
    components: {
    },
    data() {
      return {
        cardStyle: {},
        logoColor: '', // 로고 및 텍스트 색상
        boxShadowStyle: '',
      };
    },
    methods: {
      getRandomColor() { // #XXXXXX로 6자리 색상값을 결정하는 코드
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
      },
      setRandomGradient() {
        const color = this.getRandomColor();
        this.cardStyle.backgroundImage = `radial-gradient(circle at center, ${color} 0%, transparent 90%)`;
        this.cardStyle.border = `4px solid ${color}`; // 테두리에 색상 적용
        this.boxShadowStyle = `0 0px 13px 20px rgba(${parseInt(color.slice(1, 3), 16)}, ${parseInt(color.slice(3, 5), 16)}, ${parseInt(color.slice(5, 7), 16)}, 0.3)`;
        // 로고와 제목 색상을 동일한 랜덤 색상으로 설정
        this.logoColor = color;
      },
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
    top: 35%;
    left: 23%;
    position: absolute; /* 상대적 위치 */
    z-index: 1;
  }
  
  .Card .title {
    font-size: 1em; /* 제목 글꼴 크기 */
    font-weight: bold;
    color: white; /* 제목 색상 */
    z-index: 1; /* 레이어 */
    position: absolute; /* 절대 위치 */
    width: 100%; /* 너비 */
    top: 85%; /* 상단에서의 위치 조정 */
    left: 0% ;
    font-family: 'IBM Plex Sans KR', serif;
  }
  
  .Card .name {
    font-size: 2em; /* 제목 글꼴 크기 */
    font-weight: bold;
    color: white; /* 제목 색상 */
    z-index: 10; /* 레이어 */
    position: absolute; /* 절대 위치 */
    width: 100%; /* 너비 */
    top: 7%; /* 상단에서의 위치 조정 */
    left: 0% ;
    font-family: 'IBM Plex Sans KR', serif;
  }
  </style>