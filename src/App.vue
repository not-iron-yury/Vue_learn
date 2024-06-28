<script setup>
import { computed, ref } from 'vue'

import Blog from './pages/Blog.vue'
import Main from './pages/Main.vue'
import About from './pages/About.vue'

const routes = {
  '/': Main,
  '/about': About,
  '/blog': Blog
}

const currentPath = ref(window.location.hash)

window.addEventListener('hashchange', () => {
  currentPath.value = window.location.hash
})

const currentView = computed(() => {
  return routes[currentPath.value.slice(1) || '/'] || NotFound
})
</script>

<template>
  <div class="container">
    <a href="/">Главная страница</a> | <a href="#/about">О нас</a> | <a href="#/blog">Блог</a> |
    <!-- <a href="/non-existent-path">Несуществующая ссылка</a> -->
    <component :is="currentView" />
  </div>
</template>

<style>
.container {
  width: 800px;
  margin: 0 auto;
}
</style>
