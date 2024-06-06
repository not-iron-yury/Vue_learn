<script setup>
defineProps({
  post: Object
})

const emit = defineEmits(['remove'])
</script>

<template>
  <li class="post">
    <div class="post__body">
      <p class="post__title"><span>Название:</span> {{ post.title }}</p>
      <p class="post__text">
        <span>Описание:</span>
        {{ post.text }}
      </p>
    </div>
    <BtnRemove @click="emit('remove', post)" :buttonText="'&#x2715;'" />
  </li>
</template>

<style lang="scss" scoped>
.post {
  position: relative;
  background: rgba(255, 255, 255, 0.15);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 4px;
  animation: animate-in 1 ease-out forwards;

  word-break: break-all;
  margin: 0 auto 20px;
  padding: 16px;

  & span {
    font-weight: 700;
  }
  &__text {
  }
}
</style>
