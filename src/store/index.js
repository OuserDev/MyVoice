import { createStore } from 'vuex'
import axios from "axios";

export default createStore({
  state(){
		return {
			로그인창상태: 0,
      convert_status: 1,
      회원가입창상태: 0,
      보이스셋리스트: [],
		}
	},
  getters: {
  },
  mutations: {
    로그인창열기(state) {
      if (state.회원가입창상태 === 1) {
        state.회원가입창상태 = 0
        setTimeout(() => {
          if (state.로그인창상태 == 0) {
            state.로그인창상태 = 1
          } 
        }, 500);
      } else {
      if (state.로그인창상태 == 0) {
        state.로그인창상태 = 1
      } else if (state.로그인창상태 == 1) {
        state.로그인창상태 = 0
    }};
  },
    회원가입창열기(state) {
      if (state.로그인창상태 === 1) {
        state.로그인창상태 = 0
        setTimeout(() => {
          if (state.회원가입창상태 == 0) {
            state.회원가입창상태 = 1
          } 
        }, 500);
      } else {
      if (state.회원가입창상태 == 0) {
        state.회원가입창상태 = 1
      } else if (state.회원가입창상태 == 1) {
        state.회원가입창상태 = 0
    }};
  },
    set보이스셋리스트 (state,data) {
      state.보이스셋리스트 = data.data;
      // console.log('set보이스셋리스트가 호출되었습니다:', state.보이스셋리스트);
    }
},
  actions: {
    get보이스셋리스트(context) {
      // actions에서 commit을 사용할거면, context를 parameter로 받아야함
        axios
        .get('/data.json')
        .then(response => {
          // console.log(response.data);
          // console.log("성공");
          context.commit('set보이스셋리스트', response.data);
        })
        .catch(error => {
          console.log("데이터 불러오기 실패");
        })
      }
  },
  modules: {
  }
})