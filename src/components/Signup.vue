<template>
  <div class="square" v-if="true">
    <div class="signup-page">
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
export default {
  name: "Signup",
  components: {},
};
</script>

<style>
@import "@/assets/login.css";
</style>