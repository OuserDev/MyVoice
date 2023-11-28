<template>
  <Header />
  <div class="main-content">
    <router-view/>
  </div>

  <div class="login-content">
    <XyzTransition appear xyz="fade up-100%">
      <Login v-if="login_on == 1"/>
    </XyzTransition>
  </div>  

  <Footer />
</template>

<script>
import { mapState } from 'vuex';
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import Login from './components/Login.vue';
export default {
  data() {
    return {
    }
  },
  components: {
      Header,
      Footer,
      Login
    },
  computed: {
    ...mapState(['login_on']),
  },
  }
</script>

<style>
.login-content {
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: fixed;
  z-index:1000;
}
.main-content {
  position: relative;
  z-index: 500; /* 로그인 컴포넌트보다 낮은 값 */
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>