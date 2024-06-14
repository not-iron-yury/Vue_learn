<script setup>
import SinglePost from './SinglePost.vue'

defineProps({
  postsData: Array,
  isPostsLoaded: Boolean
})
const emit = defineEmits(['remove'])
</script>

<template>
  <div class="posts">
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
  &__subtitle {
    font-size: 30px;
    font-weight: 500;
    text-align: center;
    margin-bottom: 30px;
  }
}
</style>
