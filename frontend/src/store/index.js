import { createStore } from 'vuex'
import axios from "axios";

export default createStore({
  state(){
		return {
			로그인창상태: 0,
      회원가입창상태: 0,
      convert_status: 1,
      isLoggedIn: false,
      userInfo: {},
      boardList: [],
      보이스셋리스트: [],
      선택한카드: "",
      viewStatus: 0,
      선택한게시물: {},
      업로드한음원: "",
      fileName: "",
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
    },
    로그인창닫기(state, data) {
      state.로그인창상태 = 0
    },
    setLoginState(state, status) {
      state.isLoggedIn = status;
    },
    setUserInfo(state, status) {
      state.userInfo = status;
    },
    setBoardList(state, posts) { 
      const sortedPost = posts.sort((a, b) => b.id - a.id);
      state.boardList = sortedPost;
    },
    upCountConvertStatus(state) { 
      state.convert_status += 1;
    },
    set선택한카드(state, selectCard) { 
      state.선택한카드 = selectCard;
      console.log("선택:", state.선택한카드);
    },
    setViewStatus(state, post) {
      if (state.viewStatus == 0) { // 글목록에서 상세글로
        state.viewStatus = 1;
        state.선택한게시물 = post;
        console.log(post);
      } else {
        state.viewStatus = 0;
        state.선택한게시물 = undefined;
      }
    },
    set업로드한음원(state, 업로드한음원) { 
      state.업로드한음원 = 업로드한음원;
      console.log(state.업로드한음원);
    },
    setFileName(state,fileName) { 
      state.fileName = fileName;
      console.log(state.fileName);
    },
    로그인초기화(state) {
      state.userInfo = {};
    },
    set글작성(state) {
      state.viewStatus = 2;
    },
    convertStatus초기화(state) {
      state.convert_status = 1;
    },
    set글수정(state) {
      state.viewStatus = 3;
    },
},
  actions: {
    로그아웃(context) {
      context.commit('로그인창열기');
      context.commit('로그인초기화');     
    },

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
          console.log("목소리 데이터셋 불러오기 실패");
        });
      },

    get게시물목록(context) {
      // actions에서 commit을 사용할거면, context를 parameter로 받아야함
        axios
        //.get('/example_board.json')
        .get(`${process.env.VUE_APP_BACKEND_URL}/board`)
        .then(response => {
          // console.log(response.data);
          // console.log("성공");
          context.commit('setBoardList', response.data);
        })
        .catch(error => {
          console.log("게시물 목록 데이터 불러오기 실패");
        });
      },
      
    로그인전송(context, credentials) {
      return axios
      .post(`${process.env.VUE_APP_BACKEND_URL}/auth/login`, credentials)
      //.post(`https://19b4a6d6-f894-4563-a86c-2d6760ce7a2d.mock.pstmn.io/auth/login`, credentials)
      .then(response => {
        const userInfo = response.data.user;
        context.commit('setLoginState', true);
        context.commit('setUserInfo', userInfo);
        return userInfo;
      })
      .catch(error => {
        console.error('로그인전송 오류',error);
        throw error;
      });
    },

    회원가입전송(context, userData) {
      return axios
      .post(`${process.env.VUE_APP_BACKEND_URL}/auth/register`, userData)
      //.post(`https://19b4a6d6-f894-4563-a86c-2d6760ce7a2d.mock.pstmn.io/auth/register`, userData)
      .then(response => {
        context.commit('로그인창열기');
      })
      .catch(error => {
        console.error('회원가입전송 오류',error);
        throw error;
      });
    },

    글작성전송(context, postData) {
      return axios
      .post(`${process.env.VUE_APP_BACKEND_URL}/board/write`, postData)
      //.post(`https://19b4a6d6-f894-4563-a86c-2d6760ce7a2d.mock.pstmn.io/auth/register`, userData)
      .then(response => {
        context.dispatch('get게시물목록');
        context.commit('setViewStatus');
      })
      .catch(error => {
        console.error('글작성 오류',error);
        throw error;
      });
    },

    글수정전송(context, post_id, postData) {
      return axios
      .put(`${process.env.VUE_APP_BACKEND_URL}/board/update/${post_id}`, postData, {
      headers: {
        'Content-Type': 'application/json'
      }
      })
      //.post(`https://19b4a6d6-f894-4563-a86c-2d6760ce7a2d.mock.pstmn.io/auth/register`, userData)
      .then(response => {
        console.log("요청은 감")
        context.dispatch('get게시물목록');
        context.commit('setViewStatus');
      })
      .catch(error => {
        console.error('글수정 오류',error);
        throw error;
      });
    },

    글삭제요청(context, post_id) {
      return new Promise((resolve, reject) => {
        axios
          .delete(`${process.env.VUE_APP_BACKEND_URL}/board/delete/${post_id}`)
          .then(response => {
            context.dispatch('get게시물목록');
            context.commit('setViewStatus');
            resolve(response);
          })
          .catch(error => {
            console.log('못삭제했노');
            reject(error);
          });
      });
    },

    파일다운로드(context) {
      console.log(context.state.선택한카드);
      console.log(context.state.업로드한음원);
      const lastDotIndex = context.state.업로드한음원.lastIndexOf('.');
      const transformName = context.state.업로드한음원.substring(0, lastDotIndex);

      axios.get(`${process.env.VUE_APP_BACKEND_URL}/public/voice/${context.state.선택한카드.voice_name}_${transformName}.wav`, {
        responseType: 'blob'
      }).then(response => {
        const file = new Blob(
          [response.data], 
          { type: 'audio/mpeg' } // MIME type for MP3 files
        );
        
        const fileURL = URL.createObjectURL(file);
        const fileName = `[MyVoice_Result] ${context.state.선택한카드.voice_name}_${transformName}.wav`;
        context.commit('setFileName',fileName);

        const fileLink = document.createElement('a');
        fileLink.href = fileURL;
        fileLink.setAttribute('download', fileName);
        document.body.appendChild(fileLink);
        fileLink.click();
        document.body.removeChild(fileLink); // Clean up
      }).catch(error => {
        console.error('Error downloading the file', error);
      });
  }
},
  
  modules: {
  }
})