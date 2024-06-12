<script setup>
defineProps({
  className: String,
  placeholder: String
})
const model = defineModel()
</script>

<template>
  <!-- модификатор lazy для v-model -->
  <input v-model.lazy="model" :class="className" type="text" :placeholder="placeholder" />
</template>

<style></style>
