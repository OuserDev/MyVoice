<template>
  <!-- <XyzTransition appear xyz="fade up-100%"> -->
    <div class="square" v-if="true">
      <div class="login-page">
        <div class="form">
            <h3 style="color:black; margin-bottom: 30px;">로그인</h3>
            <form class="register-form">
              <input type="text" placeholder="name"/>
              <input type="password" placeholder="password"/>
              <input type="text" placeholder="email address"/>
              <button>create</button>
              <p class="message">이미 등록된 회원이신가요? <a href="#">Sign In</a></p>
            </form>
            <form class="login-form">
              <input type="text" placeholder="username"/>
              <input type="password" placeholder="password"/>
              <button>login</button>
              <p class="message" style="margin-top:30px;">처음 방문하셨나요? <a href="#">회원가입</a></p>
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