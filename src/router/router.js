import Main from '@/pages/Main.vue'
import About from '@/pages/About.vue'

// const routes = {
//   '/': Main,
//   '/about': About
// }

const routes = [
  {
    path: '/',
    component: Main
  }
]

const router = createRouter({
  routes,
  history: createWebHistory(process.env.BASE_URL)
})
