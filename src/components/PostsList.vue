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
      <transition-group name="list">
        <SinglePost
          v-for="post in postsData"
          :post="post"
          :key="post.id"
          @remove="emit('remove', post)"
        />
      </transition-group>
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
.list-move, /* применять переход к движущимся элементам */
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>
