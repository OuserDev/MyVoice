<template>
  <div class="content mb-5">
    <XyzTransition xyz="fade-100% duration-15" appear-visible="true" :duration="5000">
      <div class="text-dark mb-5" v-if="true">
        <h1 class="fw-bold">반가워요!</h1>

        <h3>일단 원하는 목소리를 선택해볼까요?</h3>

        <nft />
      </div>
    </XyzTransition>
  </div>
</template>

<script>
import nft from "@/components/nft.vue";
import FileUpload from "primevue/fileupload";

export default {
  components: {
    nft,
    FileUpload,
  },
};
</script>

<style></style>
