<template>
  <div class="square" v-if="true">
    <div class="signup-page">
      <button type="button" class="customBtn btn-close position-absolute end-0 m-4" style="width: 0.5rem; height: 0.5rem;" aria-label="Close" @click="회원가입창열기"></button>
      <div class="form">
          <h3 style="color:black; margin-bottom: 30px;">회원가입</h3>
          <form class="login-form" @submit.prevent="회원가입">
            <input type="text" placeholder="Username" v-model="username"/>
            <input type="password" placeholder="Password" v-model="password"/>
            <input type="password" placeholder="Password 재확인" v-model="passwordReconfirm"/>
            <input type="text" placeholder="Email@address" v-model="email"/>
            <button type="submit">create</button>
            <p class="message fw-normal">이미 등록된 회원이신가요? <button class="btnCustom mb-2" @click.prevent="로그인창열기();">Sign In</button></p>
          </form>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations,mapActions } from 'vuex'
import { createToast } from "mosha-vue-toastify";

export default {
  name: "Signup",
  setup() {
    const errorToast = (errorMessage) => {
      createToast(
        {
          title: "회원가입 실패 !",
          description: errorMessage,
        },
        {
          type: "danger",
          position: "top-center",
          transition: "slide",
          timeout: 4000,
          showCloseButton: true,
          swipeClose: true,
          showIcon: true,
        }
      );
    };
    const successToast = () => {
      createToast(
        {
          title: "회원가입 성공 !",
          description: "환영합니다 :D 로그인을 진행해주세요 !",
        },
        {
          position: "top-right",
          type: "success",
          transition: "bounce",
          timeout: 3000,
          showCloseButton: true,
          swipeClose: true,
          showIcon: true,
        }
      );
    };
    return { errorToast, successToast };
  },
  data() {
    return {
      username: '',
      password: '',
      passwordReconfirm: '',
      email: '',
    }
  },
  components: {},
  methods : {
    ...mapMutations(['회원가입창열기', '로그인창열기']),
    ...mapActions(['회원가입전송']),
    회원가입() {
      const userData = { 
        username: this.username,
        password: this.password,
        passwordReconfirm: this.passwordReconfirm,
        email: this.email
      };
      this.회원가입전송(userData)
      
      .then(() => {
        console.log('회원가입 성공');
        this.successToast();

      })
      .catch(error => {
        console.error('회원가입 시도 오류', error);
        this.errorToast(error.message);
      })
    }
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

button.btnCustom {
  font-family: 'IBM Plex Sans KR', serif;
  font-weight: bolder;
  width:60px;
  padding: 0px; /* 내부 여백 */
  background: none;
  color: #3a98cb;
}
</style>