<template>
  <div class="content mb-5">
    <XyzTransition xyz="fade up-50% duration-15" :appear-visible="true">
      <div class="text-dark" v-if="true">
        <div class="mb-5">
          <h2 class="fw-bold">
            방금 선택해주신
            <span :style="`color: ${선택한카드.selectColor}`">{{
              선택한카드.voice_name
            }}</span>
            아티스트 목소리로 음성을 변환해볼까요 ?<br />
          </h2>
          <h3>사람의 목소리가 담겨진 음성 오디오 파일을 올려주세요 !</h3>
          <div class="mt-5">
            <p>MyVoice에서는 현재 오직 순수한 음성 파일만을 지원합니다.</p>
            <p>노래를 부르게 하고 싶다면, 음원에서 배경음악을 제거후 업로드 바랍니다.</p>
            <p>추후 해당 부분에 관하여, 좀 더 나은 서비스로 찾아뵙겠습니다 :)</p>
          </div>
        </div>
        <div class="mb-5">
          <FileUpload
            name="demo[]"
            url="./upload.php"
            @before-upload="onAdvancedUpload($event)"
            @select="choose"
            @remove="삭제"
            accept="audio/*"
            :multiple="false"
            :maxFileSize="100000000"
            auto="true"
            :fileLimit="1"
            :pt="{
              content: { class: 'surface-ground' },
            }"
          >
            <template #empty>
              <p>[Support Drag & Drop]</p>
              <p class="fw-bold">이곳에 PC 파일을 끌어와 놓아보세요!</p>
            </template>
          </FileUpload>
        </div>
      </div>
    </XyzTransition>
  </div>
</template>

<script>
import FileUpload from "primevue/fileupload";
import { mapState } from "vuex";
import { createToast } from "mosha-vue-toastify";

export default {
  data() {
    return {
      파일업로드상태: false,
    }
  },
  setup() {
    const errorToast = (filename) => {
      createToast(
        {
          title: filename + "파일 업로드 실패!",
          description: "이미 한 개의 음성 파일을 업로드 하였습니다.",
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
    const successToast = (fileName) => {
        createToast(
        {
          title: fileName + " 파일 업로드 완료!",
          description: "다음 STEP으로 이동해볼까요? (두근두근)",
        },
        {
          position: "top-center",
          type: "success",
          transition: "bounce",
          timeout: 6000,
          showCloseButton: true,
          swipeClose: true,
          showIcon: true,
        }
      );
    };
    return { errorToast, successToast };
  },
  methods : {
    삭제(event) {
      this.파일업로드상태 = false; // 업로드 상태를 false로 설정합니다.
    },
    choose(event) {
      const fileName = event.files[0].name;
      if (this.파일업로드상태 === true) {
        this.errorToast(fileName);
        return false;
      } else {
        this.파일업로드상태 = true;
        this.successToast(fileName);
      }
    },
  },
  components: {
    FileUpload,
  },
  computed: {
    ...mapState(["선택한카드"]),
  },
};
</script>

<style>
.p-fileupload-file-thumbnail {
  display: none;
}

.p-fileupload {
  background-color: #ffffff; /* 배경색을 흰색으로 변경 */
  border: 1px solid #dddddd; /* 테두리 색상을 연한 회색으로 변경 */
  border-radius: 10px; /* 모서리 둥글기 유지 */
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.1); /* 그림자 효과 유지 */
  padding: 16px; /* 안쪽 여백 유지 */
}

.p-fileupload-buttonbar {
  display: flex;
  flex-wrap: wrap;
  background-color: #f9fafb; /* bg-gray-50 */
  color: #4b5563; /* text-gray-700 */
  padding: 20px; /* p-5 */
  border: 1px solid #e5e7eb; /* border-gray-300 */
  border-radius: 0.5rem 0.5rem 0 0; /* rounded-tr-lg rounded-tl-lg */
  gap: 8px; /* gap-2 */
  border-bottom: none; /* border-b-0 */
}

.p-fileupload-content {
  position: relative;
  background-color: #ffffff; /* bg-white */
  color: #4b5563; /* text-gray-700 */
  padding: 32px; /* p-8 */
  border: 1px solid #e5e7eb; /* border-gray-300 */
  border-radius: 0 0 0.75rem 0.75rem; /* rounded-b-lg */
}

.p-fileupload-file {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  padding: 16px; /* p-4 */
  border: 1px solid #e5e7eb; /* border-gray-300 */
  border-radius: 0.5rem; /* rounded */
  gap: 8px; /* gap-2 */
  margin-bottom: 8px; /* mb-2 */
}

.p-fileupload-file:last-child {
  margin-bottom: 0; /* last:mb-0 */
}

.p-fileupload-file-thumbnail {
  width: 50px; /* 썸네일 너비 설정 유지 */
  height: 50px; /* 썸네일 높이 설정 유지 */
  border-radius: 4px; /* 썸네일 모서리 둥글게 설정 유지 */
  margin-right: 8px; /* 썸네일과 세부 정보 사이 여백 추가 */
}

.p-fileupload-thumbnail {
  flex-shrink: 0; /* shrink-0 */
}

.p-fileupload-file-details {
  flex-grow: 1; /* 남은 공간 채우기 */
  padding-left: 8px; /* 왼쪽 여백 설정 유지 */
}

.p-fileupload-file-name {
  font-weight: bold; /* 글씨 굵게 설정 유지 */
  margin-bottom: 8px; /* 파일 이름 아래쪽 여백 추가 */
}

.p-fileupload-file-size {
  color: #999999; /* 글씨 색상 설정 유지 */
  font-size: 12px; /* 파일 크기 글씨 크기 설정 */
  margin-right: 8px; /* mr-2 */
}

.p-fileupload-file-badge {
  background-color: #eeeeee; /* 배경색 설정 유지 */
  border-radius: 10px; /* 모서리 둥글게 설정 유지 */
  padding: 2px 4px; /* 안쪽 여백 설정 유지 */
  font-size: 12px; /* 배지 글씨 크기 설정 */
  margin-left: 4px; /* 배지와 이름 사이 여백 추가 */
}

.p-fileupload-upload-icon {
  margin-right: 8px; /* mr-2 */
}

.p-fileupload-choose {
  color: #ffffff; /* text-white */
  background-color: #3a98cb; /* bg-blue-500 */
  border: 1px solid #3a98cb; /* border-blue-500 */
  padding: 12px 20px; /* p-3 px-5 */
  border-radius: 0.375rem; /* rounded-md */
  font-size: 1rem; /* text-base */
  position: relative; /* overflow-hidden relative */
}

button.p-button {
  color: #ffffff; /* text-white */
  background-color: #95b9cc; /* bg-blue-500 */
  border: 1px solid #95b9cc; /* border-blue-500 */
  padding: 12px 20px; /* p-3 px-5 */
  border-radius: 0.375rem; /* rounded-md */
  font-size: 1rem; /* text-base */
  position: relative; /* overflow-hidden relative */
}

/* Choose Button Icon */
.p-fileupload-choose {
  margin-right: 8px; /* mr-2 */
  display: inline-block; /* inline-block */
  font-weight: bold;
}

.p-button-icon {
  margin-right: 8px;
}

.p-fileupload-file-remove .p-button-icon {
  margin-right: 0;
}

.p-fileupload-file-actions {
  display: flex; /* 액션 아이템을 일렬로 배열 유지 */
  align-items: center; /* 센터 정렬 유지 */
  padding: 0 8px; /* 액션 아이템 양쪽 여백 설정 */
}

.p-fileupload-file-remove {
  background-color: transparent; /* 배경색 투명하게 설정 유지 */
  border: none; /* 테두리 없애기 설정 유지 */
  cursor: pointer; /* 커서 포인터 모양으로 설정 유지 */
  color: #ff0000; /* 삭제 아이콘 색상을 빨간색으로 설정 */
}

/* 비어있는 슬롯 컨테이너 */
.p-fileupload-empty {
  text-align: center; /* 텍스트 중앙 정렬 유지 */
  color: #999999; /* 글씨 색상 설정 유지 */
  padding: 16px; /* 비어있는 슬롯 안쪽 여백 설정 */
}
</style>
