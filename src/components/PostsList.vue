<script setup>
import SinglePost from './SinglePost.vue'

defineProps({
  title: String,
  postsData: Array
})
const emit = defineEmits(['remove'])
</script>

<template>
  <div class="posts">
    <h2 class="posts__title">{{ title }}</h2>
    <ul class="posts__list" v-if="postsData.length > 0">
      <SinglePost
        v-for="post in postsData"
        :post="post"
        :key="post.id"
        @remove="emit('remove', post)"
      />
    </ul>
    <h3 class="posts__subtitle" v-else>постов пока нет, напиши первый</h3>
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
  &__subtitle {
    font-size: 30px;
    font-weight: 500;
    text-align: center;
  }
}
</style>
