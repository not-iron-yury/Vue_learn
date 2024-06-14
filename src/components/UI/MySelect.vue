<script setup>
defineProps({
  options: Array
})
</script>

<template>
  <select @change="$emit('sortedPosts', $event.target.value)">
    <option disabled selected value="">Сортировочка</option>
    <option v-for="option in options" :key="option.value" :value="option.value">
      {{ option.name }}
    </option>
  </select>
</template>

<style lang="scss" scoped>
select {
  width: 150px;
  font-family: inherit;
  font-size: 16px;
  color: #8f8f8f;
  background: rgba(255, 255, 255);
  outline: none;
  border-radius: 2px;
  padding: 2px 3px;
}
</style>
