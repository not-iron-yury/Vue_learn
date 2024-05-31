<script setup>
defineProps({
  buttonText: String
})
</script>

<template>
  <button class="btn-remove">{{ buttonText }}</button>
</template>

<style lang="scss" scoped>
.btn-remove {
  font-size: 14px;
  color: whitesmoke;
  width: 30px;
  height: 30px;
  opacity: 0.3;
  transition: opacity 0.3s;

  &:hover {
    opacity: 0.6;
  }
}
</style>
