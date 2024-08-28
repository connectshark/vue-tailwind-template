import { createApp } from 'vue'
import { pinia } from './stores'
import './index.css'

import App from './App.vue'
import { router } from './router'

createApp(App)
  .use(pinia)
  .use(router)
  .mount('#app')
