<script setup>
import SinglePost from './SinglePost.vue'

defineProps({
  title: String,
  postsData: Array,
  isPostsLoaded: Boolean
})
const emit = defineEmits(['remove'])
</script>

<template>
  <div class="posts">
    <h2 class="posts__title">{{ title }}</h2>
    <!-- если массив НЕ пустой -->
    <ul class="posts__list" v-if="postsData.length > 0 && isPostsLoaded">
      <SinglePost
        v-for="post in postsData"
        :post="post"
        :key="post.id"
        @remove="emit('remove', post)"
      />
    </ul>
    <!-- если массив пустой -->
    <h3 class="posts__subtitle" v-else>постов пока нет, напиши первый</h3>
  </div>
</template>

<style lang="scss" scoped>
.posts {
  width: 100%;
  margin: 0 auto;

  &__title {
    font-size: 40px;
    font-weight: 500;
    text-align: center;
    text-transform: uppercase;
    margin: 20px auto 30px;
  }
  &__subtitle {
    font-size: 30px;
    font-weight: 500;
    text-align: center;
    margin-bottom: 30px;
  }
}
</style>
