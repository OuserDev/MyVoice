<template>
  <div class="content mb-5">
    <XyzTransition xyz="fade up-50% duration-10" :appear-visible="true">
      <div class="text-dark mb-5 pb-5" v-if="true">
        <h2 class="fw-bold">기다려주셔서 감사해요 !</h2>
        <h2>결과가 나왔어요 !</h2>
        <br />
        <h3>짜잔 ~ ! 멋있지 않나요 ?</h3>
        <img src="@/assets/logo/castle_gay.jpg" class="img-fluid border rounded-3 shadow-lg mt-5" alt="Example image" width="700" height="500" loading="lazy">
      </div>
    </XyzTransition>
  </div>
</template>

<script>
export default {
  components: {},
};
</script>

<style></style>
