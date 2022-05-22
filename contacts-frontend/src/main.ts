import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { store, key } from './store'
import './assets/scss/main.scss'
import '@popperjs/core';
import 'bootstrap';


createApp(App).use(router).use(store, key).mount('#app')
