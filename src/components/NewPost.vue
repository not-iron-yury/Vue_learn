<script setup>
import { ref } from 'vue'

const inputTitle = ref('')
const inputText = ref('')
let id = 100
const emit = defineEmits(['response'])

const createNewPost = () => {
  if (!inputTitle.value && !inputText.value) return

  const newPost = { id: id++, title: inputTitle.value, text: inputText.value }
  emit('response', newPost)

  inputTitle.value = ''
  inputText.value = ''
}
</script>

<template>
  <form @submit.prevent="createNewPost" class="input">
    <h3>Добавить новый анонс</h3>
    <input v-model="inputTitle" class="input__title" type="text" placeholder="Новый заголовок" />
    <textarea
      v-model="inputText"
      class="input__text"
      rows="4"
      maxlength="144"
      placeholder="Короткое описание поста"
    />
    <button class="btn">Создать</button>
  </form>
</template>

<style lang="scss" scoped>
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

.btn {
  padding: 8px 30px;
  margin: 10px 15px;
  border: 1px solid pink;
  color: pink;
  transition:
    color 0.3s,
    border 0.3s;

  &:hover {
    border: 1px solid white;
    color: white;
  }
}
</style>
