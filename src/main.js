import { createApp } from 'vue'

import VueAnimXyz from '@animxyz/vue3'
import '@animxyz/core'

import App from './App.vue'
import router from './router'
import store from './store'

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import Vue3FormWizard from 'vue3-form-wizard'
import 'vue3-form-wizard/dist/style.css'

import PrimeVue from 'primevue/config';

store.dispatch('get보이스셋리스트');

createApp(App).use(store).use(router).use(VueAnimXyz).use(Vue3FormWizard).use(PrimeVue).mount('#app');
