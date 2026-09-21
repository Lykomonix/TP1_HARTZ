import { createApp } from 'vue'
import App from './App.vue'
import router from './router.js'
import articleService from './services/articleService.js'
import './style.css'

articleService.seed()

createApp(App).use(router).mount('#app');
