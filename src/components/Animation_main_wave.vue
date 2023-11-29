<template>
<div class="container">
    <div class="circle delay1"></div>
    <div class="circle delay2"></div>
    <div class="circle delay3"></div>
    <div class="circle delay4"></div>
</div>
</template>

<!-- appear - 초기 렌더링시, true로 하면 페이지 로드시 요소가 애니메이션과 함께 등장
appear-visible - 요소가 뷰포트 내에 보일 때까지 시작을 지연시킴
IntersectionObserver 옵션 - 동작 조절 가능 -->

<script>
</script>

<style>
.circle {
  display: block;
  height: 200px;
  width: 200px;
  border-radius: 50%;
  background: #0194c7;
  margin: 10px;
  position: absolute;
  top: 0px;
  -webkit-animation: waves 2.5s linear infinite;
          animation: waves 2.5s linear infinite;
}

.circle.delay1 {
  -webkit-animation-delay: 0.1s;
          animation-delay: 0.1s;
}
.circle.delay2 {
  -webkit-animation-delay: 0.7s;
          animation-delay: 0.7s;
}
.circle.delay3 {
  -webkit-animation-delay: 1.3s;
          animation-delay: 1.3s;
}
.circle.delay4 {
  -webkit-animation-delay: 1.9s;
          animation-delay: 1.9s;
}

.svg-box {
  position: relative;
  z-index: 10;
}

.svg-box:hover {
  -webkit-animation: bloop 1s linear;
          animation: bloop 1s linear;
}

@-webkit-keyframes waves {
  0% {
    transform: scale(1);
    opacity: 1;
  }
  100% {
    transform: scale(4);
    opacity: 0;
  }
}

@-webkit-keyframes bloop {
  0% {
    transform: scale3d(1, 1, 1);
  }
  30% {
    transform: scale3d(1.25, 0.75, 1);
  }
  40% {
    transform: scale3d(0.75, 1.25, 1);
  }
  50% {
    transform: scale3d(1.15, 0.85, 1);
  }
  65% {
    transform: scale3d(0.95, 1.05, 1);
  }
  75% {
    transform: scale3d(1.05, 0.95, 1);
  }
  100% {
    transform: scale3d(1, 1, 1);
  }
}

@keyframes waves {
  0% {
    transform: scale(1);
    opacity: 1;
  }
  100% {
    transform: scale(2.3);
    opacity: 0;
  }
}

@keyframes bloop {
  0% {
    transform: scale3d(1, 1, 1);
  }
  30% {
    transform: scale3d(1.25, 0.75, 1);
  }
  40% {
    transform: scale3d(0.75, 1.25, 1);
  }
  50% {
    transform: scale3d(1.15, 0.85, 1);
  }
  65% {
    transform: scale3d(0.95, 1.05, 1);
  }
  75% {
    transform: scale3d(1.05, 0.95, 1);
  }
  100% {
    transform: scale3d(1, 1, 1);
  }
}


</style>


