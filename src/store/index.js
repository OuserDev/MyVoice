import { createStore } from 'vuex'

export default createStore({
  state(){
		return {
			로그인창상태: 0,
      convert_status: 1,
      회원가입창상태: 0
		}
	},
  getters: {
  },
  mutations: {
    로그인창열기(state) {
      if (state.로그인창상태 == 0) {
        state.로그인창상태 = 1
      } else if (state.로그인창상태 == 1) {
        state.로그인창상태 = 0
    }
  },
    회원가입창열기(state) {
      if (state.회원가입창상태 == 0) {
        state.회원가입창상태 = 1
      } else if (state.회원가입창상태 == 1) {
        state.회원가입창상태 = 0
    }
  },
},
  actions: {
  },
  modules: {
  }
})