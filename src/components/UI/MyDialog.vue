<script setup>
defineProps({
  show: Boolean
})

const emit = defineEmits(['update'])

// const hideDialog = () => {         // вместо такой функции можно слушателю сразу передать emit
//   emit('update:show', false)
// }
</script>

<template>
  <div class="dialog" v-if="show" @click="emit('update:show', false)">
    <!-- @click.stop остановка всплытия -->
    <div class="dialog__content" @click.stop>
      <BtnRemove @click="emit('update:show', false)" :buttonText="'&#x2715;'" />
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
