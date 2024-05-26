<script setup>
import { reactive } from 'vue'

const props = defineProps({
  title: String
})

const postsData = reactive([
  { id: 1, title: 'Первый заголовок', text: 'Очень яркое и литературное описание первого поста' },
  { id: 2, title: 'Второй заголовок', text: 'Очень яркое и литературное описание второго поста' },
  { id: 3, title: 'Третий заголовок', text: 'Очень яркое и литературное описание третьего поста' },
  { id: 4, title: 'Четвертый заголовок', text: 'Яркое и литературное описание четвертого поста' }
])
</script>

<template>
  <div class="posts">
    <h2 class="posts__title">{{ title }}</h2>
    <ul class="posts__list">
      <li class="post" v-for="post in postsData" :key="post.id">
        <p class="post__title"><span>Название:</span> {{ post.title }}</p>
        <p class="post__text">
          <span>Описание:</span>
          {{ post.text }}
        </p>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.posts {
  max-width: 800px;
  &__title {
    font-size: 40px;
    font-weight: 500;
    text-align: center;
    text-transform: uppercase;
    margin: 20px auto 30px;
  }
}

.post {
  background: rgba(255, 255, 255, 0.15);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 4px;
  animation: animate-in 1 ease-out forwards;

  margin: 0 auto 20px;
  padding: 16px;

  & span {
    font-weight: 700;
  }
}
</style>
