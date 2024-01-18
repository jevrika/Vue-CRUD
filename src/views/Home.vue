<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="home">
    <div v-if="error" class="error">{{ error }}</div>
    <div class="bookList" v-if="books.length">
      <BookList :books="books" @bookDeleted="fromEmit" />
    </div>
    <div v-else>
      <LoadingSpinner />
    </div>
  </div>
</template>

<script setup lang="ts">
import LoadingSpinner from '../components/LoadingSpinner.vue';
import BookList from '@/components/BookList.vue';

import { onMounted } from 'vue';

import getBooks from '../composables/getBooks';
import deleteBook from '@/composables/deleteBook';

const { books, error, load } = getBooks();

onMounted(() => {
  load();
});

const fromEmit = (params: number) => {
  deleteBookHandler(params);
};

const deleteBookHandler = async (params: number) => {
  const { deleteBookById } = deleteBook(params);
  await deleteBookById();
  load();
  return { error, deleteBookHandler };
};
</script>

<style scoped>
.error {
  color: red;
  font-size: 1.5rem;
}
.bookList {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  flex-direction: column;
  gap: 35px;
  margin: 0 auto;
  flex-grow: 1;
  flex-shrink: 1;
  padding: 50px;
}
</style>
