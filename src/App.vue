<script setup>
import { onMounted, ref } from 'vue'
// import { posts } from './data/TestPosts'
import { fetchPosts } from './data/Posts'
import PostsList from './components/PostsList.vue'
import NewPost from './components/NewPost.vue'

const postsListTitle = ref('Список постов')
const showDialog = ref(false)
const posts = ref([])
const postsOK = ref(true)

// ==================== fetch ==================== //
onMounted(() => {
  fetchPosts(10, 1) //limit = 10, page = 1
    .then((data) => (posts.value = data))
    .catch((error) => {
      postsOK.value = false
      console.log('Данные не подгрузились', error)
    })
})

// ================= list changes ================ //
const addNewPost = (newpost) => {
  posts.value.push(newpost)
  showDialog.value = false
}

const removePost = (post) => {
  posts.value = posts.value.filter((itm) => itm.id !== post.id)
}

const openDialog = () => {
  showDialog.value = true
}

const hideDialog = (event) => {
  if (showDialog.value && event.key === 'Escape') {
    showDialog.value = false
  }
}
</script>

<template>
  <main class="main" @keydown="hideDialog">
    <MyDialog v-model:show="showDialog">
      <NewPost @newpost="addNewPost" />
    </MyDialog>

    <div v-if="postsOK" class="posts-list">
      <PostsList :postsData="posts" :title="postsListTitle" @remove="removePost" />
      <BtnVue :buttonText="'Создать пост'" @click="openDialog" />
    </div>
    <p v-else class="posts-ok">Произошла ошибка. Перезагрузите страницу.</p>
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
.posts-ok {
  position: relative;
  top: 45vh;
  font-size: 25px;
  color: rgb(245, 245, 245);
  text-align: center;
}
.posts-list {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
