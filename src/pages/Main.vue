<script setup>
// import Navbar from '@/components/UI/Navbar.vue'
</script>

<template>
  <div class="main">
    <!-- <Navbar /> -->
    <h1 class="main__title">Это главная страница.</h1>
  </div>
</template>

<style lang="scss">
.main {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 800px;
  padding: 25px 15px;
  margin: 0 auto;

  &__title {
    font-size: 40px;
    font-weight: 500;
    text-align: center;
    text-transform: uppercase;
    margin: 20px auto 30px;
  }
  &__menu {
    display: flex;
    width: 100%;
    justify-content: space-between;
    border-bottom: 1px solid rgba(255, 255, 255, 0.3);
    padding: 10px 0;
    margin-bottom: 20px;
  }
}
</style>
