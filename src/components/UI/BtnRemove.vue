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
  position: absolute;
  right: 0;
  top: 0;
  z-index: inherit;

  font-size: 14px;
  width: 30px;
  height: 30px;
  color: whitesmoke;

  opacity: 0.3;
  transition: opacity 0.3s;

  &:hover {
    opacity: 0.6;
  }
}
</style>
