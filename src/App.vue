<script setup>
import { ref } from 'vue'
import { testData } from './data/TestPosts'
import PostsList from './components/PostsList.vue'
import NewPost from './components/NewPost.vue'

const postsListTitle = ref('Список постов')
const createNewPost = (newpost) => testData.push(newpost)
</script>

<template>
  <main class="main">
    <NewPost @response="createNewPost" />
    <PostsList :postsData="testData" :title="postsListTitle" />
  </main>
</template>

<style lang="scss">
.main {
  max-width: 800px;
  padding: 25px 15px;
  margin: 0 auto;
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
