<script setup>
import SinglePost from './SinglePost.vue'
defineProps({
  title: String,
  postsData: Array
})
</script>

<template>
  <div class="posts">
    <h2 class="posts__title">{{ title }}</h2>
    <ul class="posts__list">
      <SinglePost v-for="post in postsData" :post="post" :key="post.id" />
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.posts {
  margin: 0 auto;
  &__title {
    font-size: 40px;
    font-weight: 500;
    text-align: center;
    text-transform: uppercase;
    margin: 20px auto 30px;
  }
}

.input {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;

  & h3 {
    font-size: 21px;
    font-weight: 400;
    text-transform: uppercase;
    margin-bottom: 15px;
  }
  & input,
  textarea {
    font-size: 16px;
    outline: none;
    width: 300px;
    padding: 9px 15px;
    margin-bottom: 15px;
    background: whitesmoke;
  }

  & textarea {
    resize: none;
  }
}

.btn {
  padding: 8px 30px;
  margin: 10px 15px;
  border: 1px solid pink;
  color: pink;
  transition:
    color 0.3s,
    border 0.3s;

  &:hover {
    border: 1px solid white;
    color: white;
  }
}
</style>
