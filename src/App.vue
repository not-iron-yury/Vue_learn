<script setup>
import { onMounted, watch, computed, ref } from 'vue'
// import { posts } from './data/TestPosts'
import { fetchPosts } from './data/Posts'
import PostsList from './components/PostsList.vue'
import NewPost from './components/NewPost.vue'
import MyInput from './components/UI/MyInput.vue'

const showDialog = ref(false)
//------------------------------------------------//
const posts = ref([])
const isPostsLoaded = ref(false)
const isFetchedPosts = ref(true)
//------------------------------------------------//
const selectOptions = [
  { name: 'А-Я', value: 'up-down' },
  { name: 'Я-А', value: 'down-up' }
]
const selectedSort = ref('')
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
  }, 0)
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

// ==================== sort posts ==================== //

// watch(selectedSort, (newValue, prevValue) => {
//   console.log(prevValue, newValue) // в .value необходимости нет

//   if (newValue === 'up-down') {
//     posts.value.sort((a, b) => a.title.localeCompare(b.title))
//   } else if (newValue === 'down-up') {
//     posts.value.sort((a, b) => b.title.localeCompare(a.title))
//   }
// })

const sortedPost = computed(() => {
  if (selectedSort.value === 'up-down') {
    return [...posts.value].sort((a, b) => a.title.localeCompare(b.title))
  } else if (selectedSort.value === 'down-up') {
    return [...posts.value].sort((a, b) => b.title.localeCompare(a.title))
  } else return posts.value // вот этот вариант обязателен,
  // т.к. вычисляемое значение sortedPost мы передаем компоненту PostsList вместо исходного списка постов
  // если сортировка не выбрана, то должен возвращаться исходный (не сортированный) вариант списка.
})

// ==================== search ==================== //
const searchQuery = ref('')

// поиск обрабатывает onChange событие, поэтому после ввода критерия поиска, нужно нажать enter
const sortedAndSearchedPost = computed(() => {
  if (searchQuery.value) {
    return sortedPost.value.filter((item) =>
      item.title.toLowerCase().includes(searchQuery.value.toLowerCase())
    )
  } else {
    return sortedPost.value
  }
})

// ================================================ //
</script>

<template>
  <main class="main" @keydown="hideDialog">
    <MyDialog v-model:show="showDialog">
      <NewPost @newpost="addNewPost" />
    </MyDialog>

    <div v-if="isPostsLoaded" class="posts-list">
      <h1 class="main__title">Список постов</h1>
      <div class="main__menu">
        <!-- <MySelect @sortedPosts="(typesort) => sortPosts(typesort)" :options="selectOptions" /> -->
        <MySelect v-model="selectedSort" :options="selectOptions" />
        <MyInput v-model="searchQuery" class="input__search" :placeholder="'Поиск...'" />
      </div>
      <!-- <PostsList @remove="removePost" :postsData="posts" :isPostsLoaded="isPostsLoaded" /> -->
      <PostsList
        @remove="removePost"
        :postsData="sortedAndSearchedPost"
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

  &__title {
    font-size: 40px;
    font-weight: 500;
    text-align: center;
    text-transform: uppercase;
    margin: 20px auto 30px;
  }
  &__menu {
    display: flex;
    width: 100%;
    justify-content: space-between;
    border-bottom: 1px solid rgba(255, 255, 255, 0.3);
    padding: 10px 0;
    margin-bottom: 20px;
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
  &__search {
    font-size: 16px;
    outline: none;
    width: 250px;
    padding: 9px 15px;
    background: whitesmoke;
  }
}
.posts-loaded {
  position: relative;
  top: 30vh;
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
  width: 100%;
}
</style>
