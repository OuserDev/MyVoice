<template>
  <div>
    <div class="row">
      <div class="col-3">
        <Sidebar />
      </div>
      <XyzTransition appear mode="out-in">

        <div class="col-7" xyz="fade left-50%" v-if="viewStatus == 1">
          <div class="container-fluid sidebar d-flex align-items-center justify-content-center">
            <board_detail />
          </div>
        </div>

        <div class="col-7" xyz="fade left-50%" v-else-if="viewStatus == 0">
          <div class="container-fluid sidebar d-flex align-items-center justify-content-center">
            <board />
          </div>
        </div>

        <div class="col-7" xyz="fade left-50%" v-else-if="viewStatus == 2">
          <div class="container-fluid sidebar d-flex align-items-center justify-content-center">
            <board_write />
          </div>
        </div>

    </XyzTransition>

    </div>
  </div>
</template>

<script>
import Sidebar from "../components/Sidebar.vue";
import board from "../components/board.vue";
import board_detail from "../components/board_detail.vue";
import board_write from "../components/board_write.vue";
import { mapMutations,mapState } from 'vuex'

export default {
  components: {
    Sidebar,
    board,
    board_detail,
    board_write,
  },
  computed : {
    ...mapState(['viewStatus'])
  },
  methods : {
    ...mapMutations(['setViewStatus'])
  }
};
</script>

<style>
.sidebar {
  height: 88vh; /* 뷰포트의 높이만큼만 높이 설정 */
}
</style>
