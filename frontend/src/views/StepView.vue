<template>
  <div class="container pt-5">
    <form-wizard
      @on-complete="onComplete"
      @before-change="beforeChange(convert_status)"
      color="#3a98cb"
    >
      <tab-content title="STEP 1. 목소리 데이터셋 선택" icon="fa fa-microphone" >
        <Dataset_select v-if="convert_status == 1" />
      </tab-content>

      <tab-content title="STEP 2. 음성 파일 업로드" icon="fa fa-upload">
        <Voice_upload v-if="convert_status === 2" />
      </tab-content>

      <tab-content title="STEP 3. 결과 다운로드!" icon="fa fa-music">
        <Result_download v-if="convert_status === 3" />
      </tab-content>
    </form-wizard>
  </div>
</template>

<script>
//local registration
import { FormWizard, TabContent } from "vue3-form-wizard";
import "vue3-form-wizard/dist/style.css";

import Dataset_select from "@/components/Dataset_select.vue";
import Voice_upload from "@/components/Voice_upload.vue";
import Result_download from "@/components/Result_download.vue";

import { mapState, mapMutations } from "vuex";

export default {
  components: {
    FormWizard,
    TabContent,
    Dataset_select,
    Voice_upload,
    Result_download,
  },
  methods: {
    ...mapMutations(["upCountConvertStatus"]),
    onComplete() {
      alert("Yay. Done!");
    },
    beforeChange(convert_status) {
        if (convert_status === 1) {
          // 선택한카드 객체에 키가 하나도 없다면 프로미스를 거부한다.
          if (Object.keys(this.선택한카드).length === 0) {
             alert("다음 단계로 넘어가기 전에 목소리 데이터셋을 선택해야 합니다.")
          }
        }
    },
    stepTwo() {
      if (this.convert_status == 1) {
        if (Object.keys(this.선택한카드).length === 0) console.log("ㅎㅇ");
        return;
      }
      this.upCountConvertStatus();
      console.log(this.convert_status);
      console.log("작동");
    },
  },
  computed: {
    ...mapState(["convert_status", "선택한카드"]),
  },
};
</script>

<style>
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css");
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.mt-6 {
  margin-top: 4rem; /* 또는 원하는 크기 */
}
</style>
