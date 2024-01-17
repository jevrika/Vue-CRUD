<template>
  <form class="form">
    <label> Book cover image: </label>
    <input class="input" type="text" required v-model="book.image" />

    <label> Book title: </label>
    <input class="input" type="text" required v-model="book.title" />

    <label> Book author: </label>
    <input class="input" type="text" required v-model="book.author" />

    <label> Book description: </label>
    <textarea required v-model="book.description"></textarea>

    <label for="publishing_year"> Book publishing year </label>
    <input class="input" type="number" min="1700" max="2099" step="1" name="publishing_year" id="publishing_year" required v-model="book.publishing_year" />

    <label for="genres"> Book genres (Enter to add genre)</label>
    <input class="input" @keydown.enter.prevent="handleKeydown" type="text" v-model="book.genre" />

    <div class="genres" v-for="genre in book.genres" :key="genre">
      {{ genre }}
    </div>
    <button @click="$emit('bookAdded', book)" class="button">Add Book</button>

    <router-link class="link" :to="{ name: 'Home' }">X</router-link>
  </form>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Book } from '@/Book';

const book= ref<Book>({
  image: '',
  title: '',
  author: '',
  description: '',
  genre: '',
  genres: [],
  publishing_year: '',
});

const handleKeydown = () => {
  if (book.value && book.value.genre) {
    if (!book.value.genres.includes(book.value.genre)) {
      console.log(book.value.genre)
      book.value.genre = book.value.genre.replace(/\s/, ''); // removes all whitespace
      book.value.genres.push(book.value.genre);
    }
    book.value.genre = '';
  }
};
</script>

<style scoped>
.input:focus {
  outline: none;
}

label {
  display: flex;
  text-transform: uppercase;
  font-size: 1.2rem;
  font-weight: 500;
}

.genres {
  display: flex;
  font-size: 1rem;
  text-transform: uppercase;
}

.button {
  font-size: 1.2rem;
  margin-top: 20px;
  border: none;
  padding: 15px 20px;
  background-color: #b8d8be;
  border-radius: 15px;
}

@media only screen and (max-width: 600px) {
  .form {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 10px;
    padding: 10px;
    position: relative;
  }

  .input {
    font-size: 1rem;
    padding: 10px;
    border: none;
    border-bottom: 2px solid #2d2d2d93;
    margin-bottom: 10px;
    background-color: #eee;
  }

  textarea {
    background-color: #eee;
    border: 2px solid #2d2d2d93;
    resize: vertical;
    width: 98%;
    height: 200px;
    font-family: 'Roboto', sans-serif;
  }

  .link {
    position: absolute;
    top: 0;
    right: 0;
    color: red;
    text-decoration: none;
    font-size: 1.5rem;
    font-weight: 600;
    margin-right: 10px;
  }
}

@media only screen and (min-width: 600px) {
  .form {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 10px;
    padding: 10px;
    position: relative;
  }

  .input {
    font-size: 1rem;
    padding: 10px;
    border: none;
    border-bottom: 2px solid #2d2d2d93;
    margin-bottom: 10px;
    background-color: #eee;
  }

  textarea {
    background-color: #eee;
    border: 2px solid #2d2d2d93;
    resize: vertical;
    width: 98%;
    height: 200px;
    font-family: 'Roboto', sans-serif;
  }

  .link {
    position: absolute;
    top: 0;
    right: 0;
    color: red;
    text-decoration: none;
    font-size: 1.5rem;
    font-weight: 600;
    margin-right: 10px;
  }
}

@media only screen and (min-width: 768px) {
  .form {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 10px;
    padding: 10px;
    position: relative;
  }

  .input {
    font-size: 1rem;
    padding: 10px;
    border: none;
    border-bottom: 2px solid #2d2d2d93;
    margin-bottom: 10px;
    background-color: #eee;
  }

  textarea {
    background-color: #eee;
    border: 2px solid #2d2d2d93;
    resize: vertical;
    width: 98%;
    height: 200px;
    font-family: 'Roboto', sans-serif;
  }

  .link {
    position: absolute;
    top: 0;
    right: 0;
    color: red;
    text-decoration: none;
    font-size: 1.5rem;
    font-weight: 600;
    margin-right: 10px;
  }
}

@media only screen and (min-width: 992px) {
  .form {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 10px;
    padding: 100px;
    position: relative;
  }

  .input {
    font-size: 1rem;
    padding: 10px;
    border: none;
    border-bottom: 2px solid #2d2d2d93;
    margin-bottom: 10px;
    background-color: #eee;
  }

  textarea {
    background-color: #eee;
    border: 2px solid #2d2d2d93;
    resize: vertical;
    width: 98%;
    height: 200px;
    font-family: 'Roboto', sans-serif;
  }

  .link {
    position: absolute;
    top: 0;
    right: 0;
    color: red;
    text-decoration: none;
    font-size: 1.5rem;
    font-weight: 600;
    margin-right: 10px;
  }
}

@media only screen and (min-width: 1550px) {
  .form {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 10px;
    padding: 50px 350px;
    position: relative;
  }

  .input {
    font-size: 1rem;
    padding: 10px;
    border: none;
    border-bottom: 2px solid #2d2d2d93;
    margin-bottom: 10px;
    background-color: #eee;
  }

  textarea {
    background-color: #eee;
    border: 2px solid #2d2d2d93;
    resize: vertical;
    width: 98%;
    height: 200px;
    font-family: 'Roboto', sans-serif;
  }

  .link {
    position: absolute;
    top: 0;
    right: 0;
    color: red;
    text-decoration: none;
    font-size: 1.5rem;
    font-weight: 600;
    margin-right: 10px;
  }
}
</style>
