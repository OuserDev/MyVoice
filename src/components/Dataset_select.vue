<template>
  <div class="content mb-5">
    <XyzTransition xyz="fade-100% duration-5">
      <div class="text-dark" v-if="true">
        <h1 class="fw-bold">환영합니다 !</h1>
        <h2 class="mb-5">일단 원하는 목소리를 선택해볼까요 ?</h2>
        <div>
          <div class="b-example-divider"></div>
          <div style="background-color: rgb(41, 39, 39)">
            <img src="/logow.png" style="width: 150px; height: 150px" />
            <nft />
          </div>
          <div class="b-example-divider"></div>
        </div>
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
