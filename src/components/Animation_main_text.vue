<template>
    <div>
        <XyzTransition class="item-group" xyz="fade down-100% back-5" mode = "out-in">
        <div class="square" v-if=" message == 0">내 목소리로 된 아이유 노래를 듣고 싶다면 ?</div>
        <div class="square" v-if=" message == 1">남사친 사운드로 라디오를 듣고 싶다면 ?</div>
        <div class="square" v-if=" message == 2">중요한 발표나 녹음을 연습하고 싶다면 ?</div>
        <div class="square" v-if=" message == 3"><p style="font-size: 2.5em">MyVoice !</p></div>
        </XyzTransition>
    </div>
</template>

<!-- appear - 초기 렌더링시, true로 하면 페이지 로드시 요소가 애니메이션과 함께 등장
appear-visible - 요소가 뷰포트 내에 보일 때까지 시작을 지연시킴
IntersectionObserver 옵션 - 동작 조절 가능 -->

<script>
export default {
    data() {
        return {
            message: 0,
        }
    },
    mounted() {
        this.interval = setInterval(() => {
            if (this.message >= 3) {
                this.message = 0
            } else {
                this.message += 1
            }
        }, 3000);
    },
    beforeDestroy() {
        clearInterval(this.interval);
    },
}
</script>

<style>
.square {
    font-family: 'IBM Plex Sans KR', serif;
    font-size: 2.5em;
    font-weight: bolder;
    color: white;
}
</style>


