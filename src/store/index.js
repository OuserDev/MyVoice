import { createStore } from 'vuex'
import axios from "axios";

export default createStore({
  state(){
		return {
			로그인창상태: 0,
      convert_status: 1,
      회원가입창상태: 0,
      보이스셋리스트: [],
      로그인상태: 0,
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
        });
      },

    로그인전송(context, credentials) {
      // return을 작성하는 이유는, 컴포넌트의 로그인 함수로 전달해줘야하기 때문임.
      return axios
      .post('https://localhost:3000/login', credentials)
      .then(response => {
        context.commit('뮤테이션 처리 작성해야함', response.data);
        // 여기서의 처리가 컴포넌트의 로그인 method 성공 수행보다 이전에 일어남
      })
      .catch(error => {
        console.error('로그인전송 오류',error);
        throw error;
      });
    }
  },
  modules: {
  }
})