<script setup>
defineProps({
  className: String,
  placeholder: String
})
const model = defineModel()
</script>

<template>
  <input v-model="model" :class="className" type="text" :placeholder="placeholder" />
</template>

<style></style>
