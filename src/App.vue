<script setup>
import { ref } from 'vue'
import { posts } from './data/TestPosts'
import PostsList from './components/PostsList.vue'
import NewPost from './components/NewPost.vue'

const postsListTitle = ref('Список постов')
const showDialog = ref(false)

const createNewPost = (newpost) => {
  posts.value.push(newpost)
  showDialog.value = false
}
const removePost = (post) => {
  posts.value = posts.value.filter((itm) => itm.id !== post.id)
}
const openDialog = () => (showDialog.value = true)

const hideDialog = (event) => {
  if (showDialog.value && event.key === 'Escape') {
    showDialog.value = false
  }
}
</script>

<template>
  <main class="main" @keydown="hideDialog">
    <MyDialog v-model:show="showDialog">
      <NewPost @newpost="createNewPost" />
    </MyDialog>

    <PostsList :postsData="posts" :title="postsListTitle" @remove="removePost" />
    <BtnVue :buttonText="'Создать пост'" @click="openDialog" />
  </main>
</template>

<style lang="scss">
.main {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 800px;
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
</style>
