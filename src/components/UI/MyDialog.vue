<script setup>
defineProps({
  show: Boolean
})

const emit = defineEmits(['update:show'])

// функцию можно заменить в слушателе на "$emit('update:show', false)"
// пример: @click="$emit('update:show', false)"
const hideDialog = () => {
  emit('update:show', false)
}
</script>

<template>
  <div class="dialog" v-if="show" @click="hideDialog">
    <!-- остановка всплытия @click.stop -->
    <div class="dialog__content" @click.stop>
      <BtnRemove @click="hideDialog" :buttonText="'&#x2715;'" />
      <slot></slot>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.dialog {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(31, 31, 31, 0.9);
  z-index: 5;
  display: flex;
  align-items: center;
  justify-content: center;

  &__content {
    position: relative;
    border: 1px solid rgba(255, 255, 255, 0.25);
    border-radius: 5px;
    padding: 40px;
    margin: 0 auto;
  }
}
</style>
