<template>
    <div class="container">
        <h1 class="mb-2 display-4">MODIFY POST</h1>
        <h4 class="mb-5">작성자: {{ userInfo.username }}</h4>
        <form @submit.prevent="글수정(선택한게시물.id)">
            <div class="form-group">
                <label for="postTitle" class="h3 fw-bold">제목</label>
                <input type="text" class="form-control" id="title" v-model="title">
            </div>
            <div class="form-group">
                <label for="postContent" class="h3 fw-bold mt-4">내용</label>
                <textarea class="form-control" id="content" rows="10" v-model="content"></textarea>
            </div>
            <button type="submit" class="btn-lg my-custom-button mt-4">Upload</button>
        </form>
    </div>
  </template>
  
  <script>
  import { mapActions, mapMutations, mapState } from "vuex";
  import { createToast } from "mosha-vue-toastify";

  export default {
    setup() {
    const errorToast = () => {
      createToast(
        {
          title: "글수정 실패 !",
          description: "오류가 발생했습니다.",
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
          title: "글수정 성공!",
          description: "바른 인터넷 문화 캠페인에 동참합시다."
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
            title: '',
            content: '',
            writer: '', // 'this'를 사용하여 Vuex 스토어의 상태에 접근
        }
    },
    components: {
    },
    computed: {
      ...mapState(["viewStatus", "선택한게시물", "userInfo"]),
    },
    methods: {
      ...mapMutations(["setViewStatus"]),
      ...mapActions(['글수정전송']),
      글수정(post_id) {
        const postData = {
            title: this.title,
            content: this.content,
            writer: this.writer,
        }
        console.log("포스트데이터: ",postData);
        console.log("포스트 번호",post_id);
        this.글수정전송(post_id, postData)
        .then(() => {
            console.log('글수정 성공');
            this.successToast();
        })
        .catch(error => {
          console.log(error);
            this.errorToast();
        })
      }
    },
    created() {
        if (this.userInfo) {
            this.writer = this.userInfo.username;
        }
        if (this.선택한게시물) {
          this.title = this.선택한게시물.title;
          this.content = this.선택한게시물.content;
        }
    },
  };
  </script>
  
  <style>
  
  </style>
  