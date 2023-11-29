<template>
    <div style="margin-top: 500px;" class="px-5 py-5">
    <FormWizard @on-complete="onComplete" color="#094899">
      <TabContent title="목소리 데이터셋 선택" icon="fa fa-user">

        <Dataset_select/>

      </TabContent>
      <TabContent title="음원 파일 업로드" icon="fa fa-gear">
        My second tab content
      </TabContent>
      <TabContent title="결과 받기" icon="fa fa-city">
        Yuhuuu! This seems pretty damn simple
      </TabContent>
    </FormWizard>
    </div>
</template>
  
<script>
//local registration
import { FormWizard, TabContent } from "vue3-form-wizard";
import "vue3-form-wizard/dist/style.css";
import Dataset_select from "@/components/Dataset_select.vue";

export default {
components: {
    FormWizard,
    TabContent,
    Dataset_select
},
methods: {
    onComplete() {
    alert("Yay. Done!");
    },
},
};
</script>

<style>
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css");
</style>