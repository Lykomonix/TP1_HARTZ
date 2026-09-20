import { createApp } from 'vue'
import App from './App.vue'
import router from './router.js'
import articleService from './services/articleService.js'

articleService.seed()

createApp(App).use(router).mount('#app');
