<script setup>
//============= ПЕРЕДАЧА ДАННЫХ РОДИТЕЛЮ =============//

// Вариант 1 (двустороннего связывания инпута с родителем)
// defineProps({
//   className: String,
//   title: String,
//   placeholder: String
// })
// const emit = defineEmits(['update:title'])
// const newValueInput = (e) => {
//   emit('update:title', e.target.value) // @input="$emit('update:title', $event.target.value)"
// }

// Вариант 2
defineProps({
  className: String,
  placeholder: String
})
const model = defineModel()

//============= /ПЕРЕДАЧА ДАННЫХ РОДИТЕЛЮ ============//
</script>

<template>
  <!-- Вариант 1-1 -->
  <!-- <input @input="newValueInput" :class="className" type="text" :placeholder="placeholder" /> -->

  <!-- Вариант 1-2 -->
  <!-- <input @input="$emit('update:title', $event.target.value)" :class="className" type="text" :placeholder="placeholder" /> -->
  <!-- отпадает необходимость в newValueInput -->

  <!-- Вариант 2  -->
  <input v-model.lazy="model" :class="className" type="text" :placeholder="placeholder" />
  <!-- модификатор lazy для v-model меняет onInput на onChange -->
</template>

<style></style>
