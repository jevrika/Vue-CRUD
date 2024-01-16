<template>
  <div v-for="book in books.slice().reverse()" :key="book.id">
    <SingleBook :book="book" @bookDeleted="$emit('booksUpdated', book.id)" />
  </div>
</template>

<script setup lang="ts">
import SingleBook from '../components/SingleBook.vue';
import { defineProps } from 'vue';

defineProps({
  books: {
    type: Object,
    required: true,
  },
});
</script>

<style></style>
