<script setup></script>

<template>
  <ul class="pagination">
    <li
      v-for="numPage in totalPages"
      :key="numPage"
      class="pagination__item"
      :class="{ 'pagination__item--current': numPage === page ? true : false }"
      @click="changeNumPage(numPage)"
    >
      {{ numPage }}
    </li>
  </ul>
</template>

<style lang="scss" scoped></style>
