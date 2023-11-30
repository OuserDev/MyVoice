<template>
    <div class="container pt-5 ">
        <FormWizard @on-complete="onComplete" color="#3a98cb">
            <TabContent title="STEP 1. 목소리 데이터셋 선택" icon="fa fa-microphone">
                <Dataset_select v-if="convert_status === 1"/>
            </TabContent>
            <TabContent title="STEP 2. 음원 파일 업로드" icon="fa fa-upload">
                <Voice_upload v-if="convert_status === 1"/>
            </TabContent>
            <TabContent title="STEP 3. 결과 다운로드!" icon="fa fa-music">
                <Result_download v-if="convert_status === 1"/>
            </TabContent>
        </FormWizard>
    </div>
</template>
  
<script>
//local registration
import { FormWizard, TabContent } from "vue3-form-wizard";
import "vue3-form-wizard/dist/style.css";
import Dataset_select from "@/components/Dataset_select.vue";
import Voice_upload from "@/components/Voice_upload.vue";
import Result_download from "@/components/Result_download.vue";
import { mapState } from 'vuex';

export default {
    components: {
        FormWizard,
        TabContent,
        Dataset_select,
        Voice_upload,
        Result_download,
    },
    methods: {
        onComplete() {
        alert("Yay. Done!");
        },
        nextTab() {
        // 탭의 총 수를 확인하고 currentTab 인덱스를 증가
        if (this.convert_status < 4) {
        this.convert_status += 1;
      }
    }
    },
    computed: {
        ...mapState(['convert_status']),
    },
};
</script>

<style>
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css");
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}

.mt-6 {
    margin-top: 4rem; /* 또는 원하는 크기 */
}
</style>