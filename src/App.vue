<template>
  <Header />

  <div class="main-content">
    <router-view v-slot="{ Component }">
      <transition name="slide-fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </div>

  <div class="login-content">
    <XyzTransition appear xyz="fade up-50% ease-on">
      <Login v-if="로그인창상태 == 1" />
      <Signup v-if="회원가입창상태 == 1" />
    </XyzTransition>
  </div>
  <Footer />
</template>

<script>
import { mapState } from "vuex";

import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import Login from "./components/Login.vue";
import Signup from "./components/Signup.vue";

export default {
  data() {
    return {};
  },
  components: {
    Header,
    Footer,
    Login,
    Signup,
  },
  computed: {
    ...mapState(["회원가입창상태", "로그인창상태"]),
  },
  methods: {
    run() {
      this.$moshaToast("Hmm..not as easy huh");
    },
  },
};
</script>

<style>
.login-content {
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: fixed;
  z-index: 1000;
}

#app {
  font-family: "IBM Plex Sans KR", serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.3s ease;
}
.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(10px);
  opacity: 0;
}

.main-content {
  margin-top: 80px;
}
</style>
