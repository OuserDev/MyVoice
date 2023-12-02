<template>
  <!-- <XyzTransition appear xyz="fade up-100%"> -->
  <div class="square" v-if="true">
    <div class="login-page">
      <button
        type="button"
        class="customBtn btn-close position-absolute end-0 m-4"
        style="width: 0.5rem; height: 0.5rem"
        aria-label="Close"
        @click="로그인창열기"
      ></button>
      <div class="form">
        <h3 style="color: black; margin-bottom: 30px">로그인</h3>
        <form class="login-form" @submit.prevent="로그인">
          <input type="text" placeholder="Username" v-model="username" />
          <input type="password" placeholder="Password" v-model="password" />
          <button type="submit">login</button>
          <p class="message fw-normal" style="margin-top: 30px">
            처음 방문하셨나요?
            <button class="btnCustom" @click.prevent="회원가입창열기()">
              회원가입
            </button>
          </p>
        </form>
      </div>
    </div>
  </div>
  <!-- </XyzTransition> -->
</template>

<script>
import { mapMutations, mapActions } from "vuex";
import { createToast } from "mosha-vue-toastify";

export default {
  name: "Login",
  setup() {
    const errorToast = () => {
      createToast(
        {
          title: "로그인 오류!",
          description: "아이디 또는 비밀번호가 일치하지 않습니다.",
        },
        {
          type: "danger",
          position: "top-center",
          transition: "slide",
          timeout: 3000,
          showCloseButton: true,
          swipeClose: true,
          showIcon: true,
        }
      );
    };
    const successToast = () => {
      createToast(
        {
          title: "로그인 성공!",
          description: "환영합니다, 님.",
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
      username: "",
      password: "",
    };
  },
  components: {},
  methods: {
    ...mapMutations(["로그인창열기", "회원가입창열기"]),
    ...mapActions(["로그인전송"]),

    로그인() {
      const credentials = {
        username: this.username,
        password: this.password,
      };
      this.로그인전송(credentials)
        .then(() => {
          console.log("로그인 성공");
          this.successToast();
          // 여기서의 처리는 스토어의 뮤테이션 커밋 이후에 일어남 (찐 성공, 리디렉션이나 UI처리 등등..)
        })
        .catch((error) => {
          console.error("로그인 시도 오류", error);
          this.errorToast();
        });
    },
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
  font-family: "IBM Plex Sans KR", serif;
  font-weight: bolder;
  width: 60px;
  padding: 0px; /* 내부 여백 */
  background: none;
  color: #3a98cb;
}
</style>
