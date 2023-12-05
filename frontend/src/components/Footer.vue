<template>
  <footer class="footer-custom py-4 bg-dark text-white"> 
      <ul class="nav justify-content-center border-bottom pb-3 mb-3">
        <li class="nav-item"><a href="#" class="nav-link px-2 text-white">Home</a></li> <!-- 텍스트 색상을 흰색으로 변경 -->
        <li class="nav-item"><a href="#" class="nav-link px-2 text-white">Convert</a></li>
        <li class="nav-item"><a href="#" class="nav-link px-2 text-white">Community</a></li>
        <li class="nav-item"><a href="#" class="nav-link px-2 text-white">Customers</a></li>
      </ul>
      <p class="text-center text-white">&copy; 2023 Department of Multimedia Engineering, Andong University</p> <!-- 텍스트 색상을 흰색으로 변경 -->
    </footer>
  </template>


<script>
export default {
  name: "Footer",
  components: {},
};
</script>


<style>
@import "https://getbootstrap.com/docs/5.3/examples/footers/";
@import "https://cdn.jsdelivr.net/npm/@docsearch/css@3";

.footer-custom {
  position: relative; /* z-index를 적용하기 위해서는 position이 필요합니다 */
  z-index: 5; /* 원하는 z-index 값 */
  /* ...기타 스타일... */
}

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
  height: 100vh;
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
  z-index: 150;
}

.bd-mode-toggle .dropdown-menu .active .bi {
  display: block !important;
}
</style>