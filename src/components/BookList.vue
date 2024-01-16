<template>
  <div v-for="book in books.slice().reverse()" :key="book.id">
    <SingleBook :book="book" />
  </div>
</template>

<script setup>
import SingleBook from './SingleBook.vue';
import { defineProps } from 'vue';
defineProps({
  books: [],
});
</script>

<style></style>
