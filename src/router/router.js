import { createRouter, createWebHistory } from 'vue-router'

import Main from '@/pages/Main.vue'
import About from '@/pages/About.vue'
import Blog from '@/pages/Blog.vue'
import PostPage from '@/pages/PostPage.vue'

const routes = [
  {
    path: '/',
    component: Main
  },
  {
    path: '/about',
    component: About
  },
  {
    path: '/blog',
    component: Blog
  },
  {
    path: '/blog/:id',
    component: PostPage
  }
]

export const router = createRouter({
  routes,
  history: createWebHistory()
})
