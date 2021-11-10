import {createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "tailwindcss/tailwind.css"
import FontAwesomeIcon from './fontawesome-icons'
import './assets/tailwind.css';

createApp(App).component("font-awesome-icon", FontAwesomeIcon).use(store).use(router).mount('#app')
