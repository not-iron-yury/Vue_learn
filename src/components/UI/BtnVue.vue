<script setup>
defineProps({
  buttonText: String
})
</script>

<template>
  <button class="btn">{{ buttonText }}</button>
</template>

<style lang="scss" scoped>
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
