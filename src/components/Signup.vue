<template>
  <div class="square" v-if="true">
    <div class="signup-page">
      <button type="button" class="customBtn btn-close position-absolute end-0 m-4" style="width: 0.5rem; height: 0.5rem;" aria-label="Close" @click="회원가입창열기"></button>
      <div class="form">
          <h3 style="color:black; margin-bottom: 30px;">회원가입</h3>
          <form class="login-form">
            <input type="text" placeholder="Username"/>
            <input type="password" placeholder="Password"/>
            <input type="password" placeholder="Password 재확인"/>
            <input type="text" placeholder="Email@address"/>
            <button>create</button>
            <p class="message fw-normal">이미 등록된 회원이신가요?　<a class="fw-bold" href="#">Sign In</a></p>
          </form>
      </div>
    </div>
  </div>
</template>


<script>
import { mapMutations } from 'vuex'

export default {
  name: "Signup",
  components: {},
  methods : {
    ...mapMutations(['회원가입창열기'])
  }
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
</style>