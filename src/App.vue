<script setup>
import { onMounted, ref } from 'vue'
// import { posts } from './data/TestPosts'
import { fetchPosts } from './data/Posts'
import PostsList from './components/PostsList.vue'
import NewPost from './components/NewPost.vue'

const postsListTitle = ref('Список постов')
const showDialog = ref(false)
const posts = ref([])
const isPostsLoaded = ref(false)
const isFetchedPosts = ref(true)

// ==================== fetch ==================== //
onMounted(() => {
  setTimeout(() => {
    fetchPosts(10, 1) //limit = 10, page = 1
      .then((data) => {
        posts.value = data
        isPostsLoaded.value = true
      })
      .catch((error) => {
        isFetchedPosts.value = false
        console.log('Данные не подгрузились', error)
      })
  }, 2000)
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

    <div v-if="isPostsLoaded" class="posts-list">
      <PostsList
        @remove="removePost"
        :postsData="posts"
        :title="postsListTitle"
        :isPostsLoaded="isPostsLoaded"
      />
      <BtnVue :buttonText="'Создать пост'" @click="openDialog" />
    </div>
    <!-- Если данные еще загружаются и ошибка не возникла -->
    <div v-else-if="isFetchedPosts" class="posts-loaded">
      <p>Данные загружаются. Сейчас всё будет ОК.</p>
      <p>Здесь могла быть ваша реклама</p>
    </div>
    <!-- Если возникла ошибка при получении данных -->
    <div v-else-if="!isFetchedPosts" class="posts-loaded">
      <p>Данные проебались. Не будет ОК.</p>
      <p>Здесь могла быть ваша реклама</p>
    </div>
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
.posts-loaded {
  position: relative;
  top: 43vh;
  font-size: 25px;
  color: rgb(245, 245, 245);
  text-align: center;
  & :nth-child(2) {
    margin-top: 20px;
    font-size: 14px;
  }
}
.posts-list {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
