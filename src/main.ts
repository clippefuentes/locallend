import { createApp } from 'vue'
import router from './router'
import store from './store'
import './style.css'
import App from './App.vue'

import UnauthenticatedHeader from './components/Header/UnauthenticatedHeader.vue';

const app = createApp(App);

app
  .use(router)
  .use(store)
  .component('unauthenticated-header', UnauthenticatedHeader)
  .mount('#app')
