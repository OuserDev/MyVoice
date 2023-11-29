<template>
  <div class="content mb-5">
    <XyzTransition xyz="fade-100% duration-15" appear-visible="true">
      <div class="text-dark" v-if="true">
        <div class="mb-5">
          <h2 class="fw-bold">방금 선택해주신 목소리로 음원을 변환해볼까요 ?</h2>

          <h3>
            노래, 녹음, 강의 등등 사람의 목소리가 담겨진 목소리를 올려주세요 !
          </h3>
        </div>
        <div class="mb-5">
          <FileUpload
            name="demo[]"
            url="./upload.php"
            @upload="onAdvancedUpload($event)"
            :multiple="true"
            accept="image/*"
            :maxFileSize="100000000"
            :pt="{
              content: { class: 'surface-ground' },
            }"
          >
            <template #empty>
              <p>Drag and drop files to here to upload.</p>
            </template>
          </FileUpload>
        </div>
      </div>
    </XyzTransition>
  </div>
</template>

<script>
import FileUpload from "primevue/fileupload";

export default {
  components: {
    FileUpload,
  },
};
</script>

<style>
.p-fileupload {
  background-color: #ffffff; /* 배경색을 흰색으로 변경 */
  border: 1px solid #dddddd; /* 테두리 색상을 연한 회색으로 변경 */
  border-radius: 10px; /* 모서리 둥글기 유지 */
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.1); /* 그림자 효과 유지 */
  padding: 16px; /* 안쪽 여백 유지 */
}

.p-fileupload-buttonbar {
  display: flex; /* 버튼을 일렬로 배열 */
  justify-content: space-between; /* 버튼 사이의 공간 분배 */
  margin-bottom: 8px; /* 아래쪽 여백 설정 */
  padding: 0; /* 추가된 패딩 제거 */
}

.p-fileupload-content {
  border-top: 1px solid #dddddd; /* 상단 테두리 설정 유지 */
  padding-top: 8px; /* 상단 여백 설정 유지 */
}

.p-fileupload-file {
  display: flex; /* 파일 요소를 일렬로 배열 */
  align-items: center; /* 센터 정렬 */
  margin-bottom: 8px; /* 아래쪽 여백 설정 유지 */
  background-color: #f8f8f8; /* 파일 배경색 추가 */
  border: 1px solid #dddddd; /* 파일 테두리 설정 */
  border-radius: 4px; /* 파일 모서리 둥글게 설정 */
  padding: 8px; /* 파일 요소 안쪽 여백 설정 */
}

.p-fileupload-file-thumbnail {
  width: 50px; /* 썸네일 너비 설정 유지 */
  height: 50px; /* 썸네일 높이 설정 유지 */
  border-radius: 4px; /* 썸네일 모서리 둥글게 설정 유지 */
  margin-right: 8px; /* 썸네일과 세부 정보 사이 여백 추가 */
}

.p-fileupload-file-details {
  flex-grow: 1; /* 남은 공간 채우기 */
  padding-left: 8px; /* 왼쪽 여백 설정 유지 */
}

.p-fileupload-file-name {
  font-weight: bold; /* 글씨 굵게 설정 유지 */
  margin-bottom: 4px; /* 파일 이름 아래쪽 여백 추가 */
}

.p-fileupload-file-size {
  color: #999999; /* 글씨 색상 설정 유지 */
  font-size: 12px; /* 파일 크기 글씨 크기 설정 */
}

.p-fileupload-file-badge {
  background-color: #eeeeee; /* 배경색 설정 유지 */
  border-radius: 10px; /* 모서리 둥글게 설정 유지 */
  padding: 2px 4px; /* 안쪽 여백 설정 유지 */
  font-size: 12px; /* 배지 글씨 크기 설정 */
  margin-left: 4px; /* 배지와 이름 사이 여백 추가 */
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
