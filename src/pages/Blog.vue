<script setup>
import { onMounted, watch, computed, ref } from 'vue'
// import { posts } from './data/TestPosts'
//import { fetchPosts } from './data/Posts'
import PostsList from '../components/PostsList.vue'
import NewPost from '../components/NewPost.vue'
// import Navbar from '@/components/UI/Navbar.vue'

const showDialog = ref(false)
//------------------------------------------------//
const posts = ref([])
const isPostsLoaded = ref(false)
const isFetchedPosts = ref(true)

// ==================== select ==================== //
const selectOptions = [
  { name: 'А-Я', value: 'up-down' },
  { name: 'Я-А', value: 'down-up' }
]
const selectedSort = ref('')

// ==================== fetch ==================== //
function fetchPosts() {
  fetch('https://jsonplaceholder.typicode.com/posts' + `?_limit=${limit.value}&_page=${page.value}`)
    .then((response) => {
      totalPages.value = Math.ceil(response.headers.get('X-Total-Count') / limit.value)
      return response.json()
    })
    .then((data) => {
      posts.value = data
      isPostsLoaded.value = true
    })
    .catch((error) => {
      isFetchedPosts.value = false
      console.log('Данные не подгрузились', error)
    })
}

// ============= observer ============= //
function fetchAllPosts() {
  page.value += 1
  fetch('https://jsonplaceholder.typicode.com/posts' + `?_limit=${limit.value}&_page=${page.value}`)
    .then((response) => {
      totalPages.value = Math.ceil(response.headers.get('X-Total-Count') / limit.value)
      return response.json()
    })
    .then((data) => {
      posts.value = [...posts.value, ...data] //подгрузка постов в один массив для вывода в бесконечной ленте
      isPostsLoaded.value = true
    })
    .catch((error) => {
      isFetchedPosts.value = false
      console.log('Данные не подгрузились', error)
    })
}
// const targetObs = ref(null)
// ============= / observer ============= //

onMounted(() => {
  fetchPosts()

  // ============= observer ============= //
  // перенесено в /directives/vIntersection
  //
  // const options = {
  //   rootMargin: '0px',
  //   threshold: 1.0
  // }

  // const callback = (entries, observer) => {
  //   if (entries[0].isIntersecting && page.value < totalPages.value) {
  //     fetchAllPosts()
  //   }
  // }
  // const observer = new IntersectionObserver(callback, options)
  // observer.observe(targetObs.value)
  // ============= /observer ============= //
})
// ================== pagination ================== //
const limit = ref(10)
const page = ref(1)
const totalPages = ref(0)

// переключение номера страницы
// закоментил для того, что бы добавить динамическую подгрузку страниц
const changeNumPage = (numberPage) => {
  page.value = numberPage
  fetchPosts()
}
// можно вызвать fetchPosts() в обработчикее выше, и этим ограничиться
// watch(page, () => {
//   fetchPosts()
// })

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
    <!-- <Navbar /> -->

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

    <!-- Пагинация -->
    <!-- При пользовательском событии передаваемые из дочернего компонента данные сразу попадают в обработчик
    Вызыывать обработчик в пользовательском событии нельзя, как и в стандартных. Поэтому либо оборачиваем стрелочной,
    либо вызываем не передавая данные. Но обработчик обязательно должен иметь параметр 
    принимающий данные от дочернего компонента -->

    <!-- вариант с оберткой -->
    <!-- <MyPagination :totalPages="totalPages" :page="page" @changePage="(val) => changeNumPage(val)" /> -->

    <!-- вариант без обертки (нормальный) -->
    <!-- <MyPagination :totalPages="totalPages" :page="page" @changePage="changeNumPage" /> -->

    <!-- Бесконечная лента. -->
    <!-- Либо бесконечная лента, либо пагинация -->
    <!-- <div ref="targetObs" class="observer"></div> -->
    <div v-intersection="fetchAllPosts" class="observer"></div>
  </main>
</template>

<style lang="scss">
.pagination {
  display: flex;
  padding: 20px;
  margin: 50px 0 0;

  &__item {
    color: pink;
    border: 1px solid rgba(255, 255, 255, 0.5);
    padding: 8px 12px;
    transition: 0.3s all;
    cursor: pointer;

    &--current {
      color: white;
      border: 1px solid white;
    }

    &:hover {
      color: white;
      border: 1px solid white;
    }

    &:not(:last-child) {
      margin-right: 10px;
    }
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

.observer {
  width: 100%;
  height: 1px;
  background-color: rgba(255, 255, 255, 0.5);
}
</style>
