<template>
  <form @submit.prevent="handleSubmit" class="form">
    <label> Book cover image: </label>
    <input class="input" type="text" required v-model="image" />

    <label> Book title: </label>
    <input class="input" type="text" required v-model="title" />

    <label> Book author: </label>
    <input class="input" type="text" required v-model="author" />

    <label> Book description: </label>
    <textarea required v-model="description"></textarea>

    <label for="publishing_year"> Book publishing year </label>
    <input class="input" type="number" min="1700" max="2099" step="1" name="publishing_year" id="publishing_year" required v-model="publishing_year" />

    <label for="genres"> Book genres (Enter to add genre)</label>
    <input class="input" @keydown.enter.prevent="handleKeydown" type="text" v-model="genre" />

    <div class="genres" v-for="genre in genres" :key="genre">
      {{ genre }}
    </div>
    <button class="button" >Add Book</button>

    <router-link class="link" :to="{ name: 'Home' }">X</router-link>
  </form>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';

import addBook from '@/composables/addBook';

import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';

const image = ref<string>('');
const title = ref<string>('');
const author = ref<string>('');
const description = ref<string>('');
const genre = ref<string>('');
const genres = ref<string[]>([]);
const publishing_year = ref<string>('');

const router = useRouter();

const handleKeydown = () => {
  if (!genres.value.includes(genre.value)) {
    genre.value = genre.value.replace(/\s/, ''); // removes all whitespace
    genres.value.push(genre.value);
  }
  genre.value = '';
};

const notify = () => {
  toast('You added book to book list!', {
    autoClose: 4000,
    theme: 'auto',
  });
};

const handleSubmit = async () => {
  const book = {
    image: image.value,
    title: title.value,
    author: author.value,
    description: description.value,
    genres: genres.value,
    publishing_year: publishing_year.value,
  };

  addBook(book);
  notify();
  router.push('/');
  return { image, title, author, description, genre, genres, publishing_year, handleKeydown, handleSubmit };
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
