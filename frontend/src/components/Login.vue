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
import { mapState } from "vuex";

export default {
  name: "Login",
  setup() {
    const errorToast = (errorMessage) => {
      createToast(
        {
          title: "로그인 실패!",
          description: errorMessage,
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
    const successToast = (username) => {
      createToast(
        {
          title: "로그인 성공!",
          description: "환영합니다, "+username+"님.",
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
  computed : {
    ...mapState(["userInfo"]),
  },
  methods: {
    ...mapMutations(["로그인창열기", "회원가입창열기", "로그인창닫기"]),
    ...mapActions(["로그인전송"]),

    로그인() {

      const credentials = {
        username: this.username,
        password: this.password,
      };

      this.로그인전송(credentials)

        .then((userInfo) => {
          console.log("로그인 성공 ",userInfo);
          this.successToast(userInfo.username);
          this.로그인창닫기();
        })

        .catch((error) => {
          if (error.response) {
          // 서버로부터 응답을 받았지만 에러 상태 코드가 있는 경우
          const statusCode = error.response.status;
          if (statusCode === 401) {
            this.errorToast("잘못된 사용자 이름이나 비밀번호입니다.");
          } else if (statusCode === 500) {
            this.errorToast("서버 오류가 발생했습니다. 나중에 다시 시도해주세요.");
          } else {
            this.errorToast("사용자의 아이디가 없습니다.");
          }
        } else if (error.request) {
          // 요청이 이루어졌으나 응답을 받지 못한 경우
          this.errorToast("서버로부터 응답이 없습니다. 인터넷 연결을 확인해주세요.");
        } else {
          // 요청을 설정하는 단계에서 문제가 발생한 경우
          this.errorToast("요청 중 오류가 발생했습니다.");
        }
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
