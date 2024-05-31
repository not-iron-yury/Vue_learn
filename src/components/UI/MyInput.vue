<script setup>
defineProps({
  className: String
})
const model = defineModel()
</script>

<template>
  <input v-model="model" :class="className" type="text" placeholder="Новый заголовок" />
</template>

<style></style>
