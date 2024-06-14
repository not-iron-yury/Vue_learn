<script setup>
import { ref } from 'vue'
import MyInput from './UI/MyInput.vue'

const inputTitle = ref('')
const inputText = ref('')
let id = 100

const emit = defineEmits(['newpost'])

const createNewPost = () => {
  if (!inputTitle.value && !inputText.value) return

  const newPost = { id: id++, title: inputTitle.value, body: inputText.value }
  emit('newpost', newPost)

  inputTitle.value = ''
  inputText.value = ''
}
</script>

<template>
  <form @submit.prevent="createNewPost" class="input">
    <h3>Добавить новый пост</h3>
    <!-- Вариант 1 (двустороннего связывания инпута с родителем) -->
    <!-- <MyInput v-model:title="inputTitle" :className="'input__title'" :placeholder="'Новый заголовок'"/> -->
    <!-- / Вариант 1  -->

    <!-- Вариант 2  -->
    <MyInput v-model="inputTitle" :className="'input__title'" :placeholder="'Новый заголовок'" />
    <!-- / Вариант 2  -->

    <textarea
      v-model="inputText"
      class="input__text"
      rows="4"
      maxlength="144"
      placeholder="Короткое описание поста"
    />
    <BtnVue :buttonText="'Отправить'" />
  </form>
</template>

<style lang="scss">
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
  & .input__title,
  .input__text {
    font-size: 16px;
    outline: none;
    width: 300px;
    padding: 9px 15px;
    margin-bottom: 15px;
    background: whitesmoke;
    border: 3px solid rgba(0, 255, 255, 0.342);

    &:placeholder-shown {
      border: 3px solid pink;
    }
  }

  & .input__text {
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
