import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/scss/main.scss'
import '@popperjs/core';
import 'bootstrap';


createApp(App).use(router).mount('#app')
