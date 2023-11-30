<template>
  <div class="container-fluid sidebar">
    <div class="row">
      <!-- Sidebar 컴포넌트 -->
      <div class="col-md-3" style="position: fixed; top: 0; left: 0; height: 100vh; overflow-y: auto;">
        <Sidebar/>
      </div>

      <!-- Main Content 영역은 Sidebar의 너비만큼 오른쪽으로 오프셋을 줘야 함 -->
      <div class="col-md-5 offset-md-4">
        <board/>
      </div>
    </div>
  </div>
</template>


<script>
import Sidebar from '../components/Sidebar.vue';
import board from '../components/board.vue';

export default {
  components: {
    Sidebar,
    board,
  },
};
</script>

<style>
.sidebar {
  height: 100vh;     /* 뷰포트의 높이만큼만 높이 설정 */
}
</style>