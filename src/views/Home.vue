<template>
  <div class="home">
    <div class="booksList" v-if="books.length">
      <div v-for="book in books" :key="book.id">
        <SingleBook :book="book" @delete="handleDelete" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Book } from '../Book';
import SingleBook from '../components/SingleBook.vue';

export default defineComponent({
  name: 'HomePage',
  components: { SingleBook },
  data() {
    return {
      books: [] as Book[],
    };
  },
  mounted() {
    fetch('http://localhost:3000/books')
      .then((response) => response.json())
      .then((data) => (this.books = data))
      .catch((error) => console.log(error.message));
  },
  methods: {
    handleDelete(id: number) {
      this.books = this.books.filter((book) => {
        return book.id !== id;
      });
    },
  },
});
</script>

<style scoped>
.booksList {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(420px, 1fr));
  flex-direction: column;
  gap: 35px;
  margin: 0 auto;
  flex-grow: 1;
  flex-shrink: 1;
}
</style>
