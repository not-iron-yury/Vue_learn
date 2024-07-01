import '@/assets/main.css'
import { createApp } from 'vue'
import App from '@/App.vue'
import { components } from '@/components/UI/index'
import { router } from '@/router/router'
import { directives } from '@/directives/index'

const app = createApp(App)

//Глобальная регистрация компонентов
components.forEach((comp) => {
  app.component(comp.__name, comp)
})

//Глобальная регистрация пользовательских директив
directives.forEach((directive) => {
  app.directive(directive.name, directive) // свойство name необходимо задавать руками, в каждой директиве
})

app.use(router).mount('#app')
