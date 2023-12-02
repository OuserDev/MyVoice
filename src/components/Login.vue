<template>
  <!-- <XyzTransition appear xyz="fade up-100%"> -->
    <div class="square" v-if="true">
      <div class="login-page">
        <button type="button" class="customBtn btn-close position-absolute end-0 m-4" style="width: 0.5rem; height: 0.5rem;" aria-label="Close" @click="로그인창열기"></button>
        <div class="form">
            <h3 style="color:black; margin-bottom: 30px;">로그인</h3>
            <form class="login-form">
              <input type="text" placeholder="Username"/>
              <input type="password" placeholder="Password"/>
              <button>login</button>
              <p class="message fw-normal" style="margin-top:30px;">처음 방문하셨나요? <button class="btnCustom" @click.prevent="회원가입창열기();">회원가입</button></p>
            </form>
        </div>
      </div>
    </div>
  <!-- </XyzTransition> -->
</template>


<script>
import { mapMutations } from 'vuex'

export default {
  name: "Login",
  components: {},
  methods : {
    ...mapMutations(['로그인창열기','회원가입창열기'])
  },
};
</script>


<style>
@import "@/assets/login.css";
.customBtn {
    top: 2.5rem; /* 상단에서 1rem만큼 아래로 */
    right: 1rem; /* 우측에서 1rem만큼 안으로 */
    width: 0.5rem; /* 너비 조정 */
    height: 0.5rem; /* 높이 조정 */
  }
  .customBtn {
    top: 2.5rem; /* 상단에서 1rem만큼 아래로 */
    right: 1rem; /* 우측에서 1rem만큼 안으로 */
    width: 0.5rem; /* 너비 조정 */
    height: 0.5rem; /* 높이 조정 */
  }

button.btnCustom {
  font-family: 'IBM Plex Sans KR', serif;
  font-weight: bolder;
  width:60px;
  padding: 0px; /* 내부 여백 */
  background: none;
  color: #3a98cb;
}
</style>