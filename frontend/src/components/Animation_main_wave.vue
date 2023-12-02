<template>
  <div id="bars" class="bars">
    <!-- 각 막대를 반복해서 생성하고, 높이와 그라데이션 스타일을 적용합니다 -->
    <div v-for="bar in bars" :key="bar.id" class="bar" :style="barStyle(bar.height)"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      numBars: 35, // 막대의 수
      bars: [], // 각 막대의 높이를 저장할 배열
    };
  },
  methods: {
    // 막대의 스타일을 계산하는 메서드입니다
    barStyle(height) {
      return {
        width: '10px',
        height: `${height}px`,
        // 막대의 그라데이션을 설정합니다. 여기서는 검정색에서 투명으로 변하는 그라데이션을 적용합니다.
        backgroundImage: `linear-gradient(to bottom, rgba(255,255,255,0.2), rgba(255,255,255,1))`,
        marginRight: '2px',
      };
    },
    // 막대의 높이를 랜덤하게 변경하는 메서드입니다
    randomizeBarHeights() {
      this.bars = this.bars.map(bar => ({
        id: bar.id,
        height: Math.random() * 150, // 0과 150px 사이의 랜덤한 높이를 생성합니다
      }));
    },
  },
  mounted() {
    // 초기 막대의 ID와 높이를 설정합니다
    for (let i = 0; i < this.numBars; i++) {
      this.bars.push({
        id: i,
        height: Math.random() * 150,
      });
    }

    // 매 150ms마다 막대의 높이를 랜덤하게 변경합니다
    setInterval(this.randomizeBarHeights, 150);
  },
};
</script>

<style>

.bar {
  display: inline-block;
  transition: height 0.5s linear; 
}

.bars {
  display: flex;
  justify-content: center; /* 가로축에 대해 중앙 정렬 */
  align-items: flex-end;
  margin: 0 auto; /* 상하 마진 없이, 좌우 마진 자동 */
  width: 80%; /* 부모 요소의 너비에 대한 비율로 너비 설정 */
  height: 150px; /* 막대의 최대 높이와 일치해야 합니다 */
}
</style>
