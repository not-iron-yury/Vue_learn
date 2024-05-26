<script setup>
import { ref } from 'vue'
import PostsList from './components/PostsList.vue'

const postsListTitle = ref('Список постов')
</script>

<template>
  <main class="main">
    <PostsList :title="postsListTitle" />
  </main>
</template>

<style lang="scss">
.main {
  max-width: 1080px;
  padding: 25px 15px;
  margin: 0 auto;
}

.btn {
  padding: 8px 30px;
  margin: 10px 15px;
  color: #fff;

  &.green {
    background-color: green;
  }
  &.red {
    background-color: red;
  }
}
</style>
