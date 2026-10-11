import './assets/main.css'
import vueRouter from '@/router/index.js'

import { createApp } from 'vue'
import App from './App.vue'
const app = createApp(App)
app.use(vueRouter)
app.mount('#app')

