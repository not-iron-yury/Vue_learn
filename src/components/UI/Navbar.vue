<script setup></script>

<template>
  <nav class="nav-link">
    <!-- При такой реализации NavBar достаточно подключить только в корневом компоненте App -->
    <BtnVue :buttonText="'Главная'" @click="$router.push('/')" />
    <BtnVue :buttonText="'Блог'" @click="$router.push('/blog')" />
    <BtnVue :buttonText="'О сайте'" @click="$router.push('/about')" />

    <!-- Кнопки использовать не обязательно. Их можно заменить на любой другой тег. -->
    <!-- Пример 1-->
    <!--
    <p @click="$router.push('/')">Главная</p>
    <p @click="$router.push('/blog')">Блог</p>
    <p @click="$router.push('/about')">О сайте</p>
    -->
    <!-- Пример 2-->
    <!--
    <a @click.prevent="$router.push('/')">Главная</a>
    <a @click.prevent="$router.push('/blog')">Блог</a>
    <a @click.prevent="$router.push('/about')">О сайте</a> 
    -->

    <!-- При следующей реализации Navbar потребуется подключать в каждую страницу отдельно -->
    <!-- 
    <router-link to="/">Главная</router-link>
    <router-link to="/blog">Блог</router-link>
    <router-link to="/about">О сайте</router-link> 
    -->
  </nav>
</template>

<style lang="scss" scoped>
.nav-link {
  align-self: flex-start;
  & :not(:last-child) {
    margin-right: 20px;
  }
}
</style>
