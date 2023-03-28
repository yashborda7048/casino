import { createApp } from 'vue'
import App from './App.vue'
import router from './router/routers.js'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap'
import '@/assets/sass/main.css'

createApp(App).use(router).mount('#app')
