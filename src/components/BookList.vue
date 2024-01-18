<template>
  <div v-for="book in books" :key="book.id">
    <SingleBook :book="book" @bookDeleted="emits('bookDeleted', book.id)" />
  </div>
</template>

<script setup lang="ts">
import SingleBook from '../components/SingleBook.vue';
import { defineProps, defineEmits } from 'vue';

defineProps({
  books: {
    type: Object,
    required: true,
  },
});

const emits = defineEmits(['bookDeleted']);
</script>

<style></style>
