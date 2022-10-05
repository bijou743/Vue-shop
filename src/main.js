import { createApp } from 'vue';
import './assets/styles/style.scss';
import App from './App.vue';
import router from './router';
import store from './vuex/store.js';

const app = createApp(App).use(router).use(store).mount('#app');
