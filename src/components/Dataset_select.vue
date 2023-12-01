<template>
  <div class="content mb-5" >
    <XyzTransition xyz="fade-100% duration-5">
      <div class="text-dark mb-5" v-if="true">
        <h1 class="fw-bold">환영합니다 !</h1>

        <h3>일단 원하는 목소리를 선택해볼까요 ?</h3>

        <nft />
      </div>
    </XyzTransition>
  </div>
  <div class="card" id="card">
    <img src="logow.png" class="logo" alt="Logo">
    <img src="@/assets/celebrity.png" alt="Celebrity">
  <div class="title">MY VOICE</div>
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
  scripts :{
    
  }
};
</script>

<style>
  .card {
    border-radius: 20px;
    width: 250px;
    padding: 20px;
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
    text-align: center;
    position: relative;
    overflow: hidden;
  }

  .card::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background-image: linear-gradient(120deg, #f6d365 0%, #fda085 100%);
    transition: transform 0.5s ease;
    border-radius: 35%;
    z-index: 0;
  }

  .card:hover::before {
    transform: rotate(60deg);
  }

  .card img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    border: 5px solid white;
    margin-top: 20px;
    z-index: 1;
    position: relative;
  }

  .card .logo {
    width: 50px;
    height: 50px;
    position: absolute;
    top: 10px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 1;
  }

  .card .title {
    margin-top: 20px;
    font-size: 1.5em;
    color: white;
    z-index: 1;
    position: relative;
  }
</style>