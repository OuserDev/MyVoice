<template>
반가워요!

원하는 목소리를 선택해보세요.

<nft/>

<FileUpload mode="basic" name="demo[]" url="/api/upload" accept="image/*" :maxFileSize="1000000" @upload="onUpload" />


</template>

<script>
import nft from "@/components/nft.vue";
import FileUpload from 'primevue/fileupload';

export default {
  components: {
    nft,
    FileUpload,
  },
};
</script>

<style>
</style>