<template>
  <div class="container pt-5" style="margin-bottom:320px;" >
    <form-wizard @on-complete="onComplete" ref="wizard" color="#3a98cb">
      <tab-content title="STEP 1. 목소리 데이터셋 선택" icon="fa fa-microphone">
        <Dataset_select v-if="convert_status == 1" />
      </tab-content>

      <tab-content title="STEP 2. 음성 파일 업로드" icon="fa fa-upload">
        <Voice_upload v-if="convert_status === 2" />
      </tab-content>

      <tab-content title="STEP 3. 결과 다운로드!" icon="fa fa-music">
        <Result_download v-if="convert_status === 3" />
      </tab-content>
      <button class="btn-lg" @click="goToNextTab" v-if="convert_status == 1 || convert_status == 2">NEXT STEP</button>
    </form-wizard>
  </div>
</template>

<script>
//local registration
import "vue3-form-wizard/dist/style.css";

import Dataset_select from "@/components/Dataset_select.vue";
import Voice_upload from "@/components/Voice_upload.vue";
import Result_download from "@/components/Result_download.vue";

import { createToast } from "mosha-vue-toastify";
import { mapState, mapMutations } from "vuex";
import { FormWizard, TabContent } from "vue3-form-wizard";

export default {
  setup() {
    const errorToast = (errorMessage) => {
        createToast(
        {
          title: "NEXT STEP 실패!",
          description: errorMessage,
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
    return { errorToast };
  },
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
    goToNextTab() {
      if (this.convert_status === 1) {
        if (Object.keys(this.선택한카드).length === 0) {
          console.log("막힘");
          this.errorToast("목소리 데이터셋을 선택해야 합니다.");
          return;
        } else {
          this.$refs.wizard.nextTab();
          this.upCountConvertStatus();
          console.log("작동");
        }
      } else if (this.convert_status === 2) {
        if (Object.keys(this.업로드한음원).length === 0) {
          console.log("막힘");
          this.errorToast("변환을 원하는 음성 파일을 업로드해야 합니다.");
          return;
        } else {
          this.$refs.wizard.nextTab();
          this.upCountConvertStatus();
          console.log("작동");
        }
      }
    },
  },
  computed: {
    ...mapState(["convert_status", "선택한카드", "업로드한음원"]),
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

.wizard-card-footer {
  display: none;
}

.btn-lg {
  background-color: #3a98cb; /* 부트스트랩 기본 파란색 */
  border-color: #3a98cb; /* 테두리 색상도 동일하게 */
  color: #fff; /* 텍스트 색상은 흰색으로 */
  border-radius: 5px; /* 둥근 모서리 */
  border: 3px;
  padding: 10px 15px;
}
</style>
