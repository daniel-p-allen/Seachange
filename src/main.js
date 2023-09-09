import './assets/styles.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from '/src/router/index.js'

const app = createApp(App)

app.use(router)

app.mount('#app')
