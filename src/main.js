import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import { components } from './components/UI/index'
import { router } from './router/router'

const app = createApp(App)

components.forEach((comp) => {
  app.component(comp.__name, comp)
})

// app.mount('#app')
app.use(router).mount('#app')
