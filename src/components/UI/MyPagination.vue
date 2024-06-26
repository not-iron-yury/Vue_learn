<script setup>
defineProps({
  totalPages: Number,
  page: Number //для динамического присвоения класса
})

const emit = defineEmits(['changePage'])
</script>

<!-- цикл for in в данном случае итерируется по числу totalPages,
это какой-то сахар vue.js -->
<template>
  <ul class="pagination">
    <li
      v-for="numPage in totalPages"
      :key="numPage"
      class="pagination__item"
      :class="{ 'pagination__item--current': numPage === page ? true : false }"
      @click="emit('changePage', numPage)"
    >
      {{ numPage }}
    </li>
  </ul>
</template>

<style lang="scss"></style>
