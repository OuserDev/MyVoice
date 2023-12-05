<template>
  <main class="d-flex">
  <div class="b-example-divider b-example-vr"></div>

  <div class="pt-5 px-5 d-flex flex-column flex-shrink-0 bg-body-tertiary z-1" style="width: 400px;">


    <div v-if="Object.keys(this.userInfo).length === 0">
      로그인 ㄱ
    </div>

    <div v-else>
      <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
        <div class="pt-5">
          <div class="fs-4 text-start">어서오세요,</div>
          <div class="fs-3 text-start fw-bold">{{ userInfo.username }}<span class="fs-5 fw-normal">님!</span></div>
        </div>
      </a>
      <hr>
      <ul class="nav nav-pills flex-column mb-auto">
        <li class="nav-item">
          <a href="#" class="nav-link active fw-bold" aria-current="page">
            글 작성하기
          </a>
        </li>
      </ul>
      <hr>
    </div>
    
</div>

  <div class="b-example-divider b-example-vr"></div>
</main>
</template>

<script>
import { onMounted } from 'vue';
import 'bootstrap/dist/css/bootstrap.min.css';
import { mapState } from "vuex";

export default {
  name: 'YourComponentName',
  setup() {
    onMounted(() => {
      const tooltipTriggerList = Array.from(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
      tooltipTriggerList.forEach(tooltipTriggerEl => {
        new bootstrap.Tooltip(tooltipTriggerEl);
      });
    });
  },
  computed : {
    ...mapState(['userInfo'])
  }
};
</script>

<style>
@import "@/assets/sidebars.css";
@import 'https://cdn.jsdelivr.net/npm/@docsearch/css@3';
@import "https://getbootstrap.com/docs/5.3/examples/sidebars/";
  .bd-placeholder-img {
  font-size: 1.125rem;
  text-anchor: middle;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
  }

  @media (min-width: 768px) {
  .bd-placeholder-img-lg {
      font-size: 3.5rem;
  }
  }

  .b-example-divider {
  width: 100%;
  height: 3rem;
  background-color: rgba(0, 0, 0, .1);
  border: solid rgba(0, 0, 0, .15);
  border-width: 1px 0;
  box-shadow: inset 0 .5em 1.5em rgba(0, 0, 0, .1), inset 0 .125em .5em rgba(0, 0, 0, .15);
  }

  .b-example-vr {
  flex-shrink: 0;
  width: 1.5rem;
  height: 90vh;
  }

  .bi {
  vertical-align: -.125em;
  fill: currentColor;
  }

  .nav-scroller {
  position: relative;
  z-index: 2;
  height: 2.75rem;
  overflow-y: hidden;
  }

  .nav-scroller .nav {
  display: flex;
  flex-wrap: nowrap;
  padding-bottom: 1rem;
  margin-top: -1px;
  overflow-x: auto;
  text-align: center;
  white-space: nowrap;
  -webkit-overflow-scrolling: touch;
  }

  .btn-bd-primary {
  --bd-violet-bg: #712cf9;
  --bd-violet-rgb: 112.520718, 44.062154, 249.437846;

  --bs-btn-font-weight: 600;
  --bs-btn-color: var(--bs-white);
  --bs-btn-bg: var(--bd-violet-bg);
  --bs-btn-border-color: var(--bd-violet-bg);
  --bs-btn-hover-color: var(--bs-white);
  --bs-btn-hover-bg: #6528e0;
  --bs-btn-hover-border-color: #6528e0;
  --bs-btn-focus-shadow-rgb: var(--bd-violet-rgb);
  --bs-btn-active-color: var(--bs-btn-hover-color);
  --bs-btn-active-bg: #5a23c8;
  --bs-btn-active-border-color: #5a23c8;
  }

  .bd-mode-toggle {
  z-index: 1500;
  }

  .bd-mode-toggle .dropdown-menu .active .bi {
  display: block !important;
  }
</style>