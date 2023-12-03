<template>
  <div>
    <div class="row">
      <div class="col-sm-3">
        <Sidebar/>
      </div>
      <div class="col-sm-8">
        <div class="container-fluid sidebar d-flex align-items-center justify-content-center">
          <board />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from "../components/Sidebar.vue";
import board from "../components/board.vue";

export default {
  components: {
    Sidebar,
    board,
  },
};
</script>

<style>
.sidebar {
  height: 88vh; /* 뷰포트의 높이만큼만 높이 설정 */
}
</style>
