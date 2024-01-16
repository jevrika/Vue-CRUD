<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="home">
    <div v-if="error">
      <h1>{{ error }}</h1>
    </div>
    <div class="bookList" v-if="books.length">
      <BookList :books="books" />
    </div>
    <div v-else>
      <LoadingSpinner />
    </div>
  </div>
</template>

<script setup>
import BookList from '../components/BookList.vue';
import getBooks from '../composables/getBooks';
import LoadingSpinner from '../components/LoadingSpinner.vue';
import { onMounted } from 'vue';

const { books, error, load } = getBooks();

load();

onMounted(() => {
  load()
})

{ books, error }

  
</script>


<style>
.bookList {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  flex-direction: column;
  gap: 35px;
  margin: 0 auto;
  flex-grow: 1;
  flex-shrink: 1;
}
</style>
