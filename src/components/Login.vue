<template>
  <!-- <XyzTransition appear xyz="fade up-100%"> -->
    <div class="square" v-if="true">
      <div class="login-page">
        <div class="form">
            <h3 style="color:black; margin-bottom: 30px;">로그인</h3>
            <form class="login-form">
              <input type="text" placeholder="Username"/>
              <input type="password" placeholder="Password"/>
              <button>login</button>
              <p class="message fw-normal" style="margin-top:30px;">처음 방문하셨나요?　<a class="fw-bold" href="#">회원가입</a></p>
            </form>
        </div>
      </div>
    </div>
  <!-- </XyzTransition> -->
</template>


<script>
export default {
  name: "Login",
  components: {},
};
</script>


<style>
@import "@/assets/login.css";
</style>