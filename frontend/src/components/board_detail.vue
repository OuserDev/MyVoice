<template>
  <div>
    <div class="resume-section-content text-center">
      <h1 class="display-5">{{ 선택한게시물.title }}</h1>
      <div class="mb-5 mt-3">
        작성자 <span class="fw-bold mx-1">{{ 선택한게시물.writer }}</span> · 조회수<span
          class="fw-bold mx-1"
          >{{ 선택한게시물.viewCount }}</span
        >
        · 작성일자<span class="fw-bold mx-2">{{ 선택한게시물.createdAt }}</span>
      </div>
      <hr class="feature-divider">
      <p class="lead my-5">
        {{ 선택한게시물.content }}
      </p>
    </div>
    <hr class="featurette-divider">
    <button class="mt-5 mx-3 btn-lg my-custom-button" v-if="userInfo.username == 선택한게시물.writer" @click="setViewStatus">글 수정</button>
    <button class="mt-5 btn-lg my-custom-button" @click="setViewStatus">글 목록</button>
    <button class="mt-5 mx-3 btn-lg my-custom-button" v-if="userInfo.username == 선택한게시물.writer" @click="글삭제요청(선택한게시물.id)">글 삭제</button>
  </div>
</template>

<script>
import { mapActions, mapMutations, mapState } from "vuex";
import board from "../components/board.vue";

export default {
  setup() {
    const successToast = () => {
      createToast(
        {
          title: "글을 삭제하였습니다.",
          description: "",
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
    return { successToast };
  },
  components: {
    board,
  },
  computed: {
    ...mapState(["viewStatus", "선택한게시물", "userInfo"]),
  },
  methods: {
    ...mapMutations(["setViewStatus"]),
    ...mapActions(["글삭제요청"]),
  },
};
</script>

<style>
.btn-lg {
  background-color: #3a98cb; /* 부트스트랩 기본 파란색 */
  border-color: #3a98cb; /* 테두리 색상도 동일하게 */
  color: #fff; /* 텍스트 색상은 흰색으로 */
  border-radius: 5px; /* 둥근 모서리 */
  border: 3px;
  padding: 10px 15px;
}
</style>
