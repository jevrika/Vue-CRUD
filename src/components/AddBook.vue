<template>
  <form @submit.prevent="" class="form">
    <label> Book cover image: </label>
    <input class="input" type="text" v-model="book.image"  />
    <div class="error">{{ imageError }}</div>

    <label> Book title: </label>
    <input class="input" type="text" v-model="book.title"  />
    <div class="error">{{ titleError }}</div>

    <label> Book author: </label>
    <input class="input" type="text" v-model="book.author"  />
    <div class="error">{{ authorError }}</div>

    <label> Book description: </label>
    <textarea v-model="book.description" ></textarea>
    <div class="error">{{ descriptionError }}</div>

    <label for="publishing_year"> Book publishing year </label>
    <input class="input" type="number" min="1700" max="2099" step="1" name="publishing_year" id="publishing_year" v-model="book.publishing_year"  />
    <div class="error">{{ publishingYearError }}</div>

    <label for="genres"> Book genres (Enter to add genre)</label>
    <input class="input" @keydown.enter.prevent="handleKeydown" type="text" v-model="book.genre"  />
    <div class="error">{{ genreError }}</div>

    <div class="genres" v-for="genre in book.genres" :key="genre">
      {{ genre }}
    </div>
    <button v-if="!imageError && !titleError && !authorError  && !publishingYearError && !descriptionError" class="button" @click="emits('bookAdded', book)">Add Book</button>

    <router-link class="link" :to="{ name: 'Home' }">X</router-link>
  </form>
</template>

<script setup lang="ts">
import { ref, watch,defineEmits } from 'vue';
import { Book } from '@/Book';

const book = ref<Book>({
  image: '',
  title: '',
  author: '',
  description: '',
  genre: '',
  genres: [],
  publishing_year: '',
});

const emits = defineEmits(['bookAdded']);

const handleKeydown = () => {
  if (book.value && book.value.genre) {
    if (!book.value.genres.includes(book.value.genre)) {
      console.log(book.value.genre);
      book.value.genre = book.value.genre.replace(/\s/, '');
      book.value.genres.push(book.value.genre);
    }
    book.value.genre = '';
  }
};

const validateInput = (value: string, minLength: number, errorRef: any, errorMessage: string) => {
  if (value.length >= minLength) {
    errorRef.value = '';
  } else {
    errorRef.value = errorMessage;
  }
};

const validateImage = (value: string) => {
  const imageRegex = /^https:\/\/.*\.(jpg|jpeg|png|gif).*$/i;

  if (imageRegex.test(value)) {
    imageError.value = '';
  } else {
    imageError.value = 'Invalid image URL.Please enter URL with HTTPS and .jpg, .jpeg, .png, or .gif. inside it, for example - https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1598823299i/42844155.jpg.';
  }
};

const imageError = ref<string>('');
const titleError = ref<string>('');
const authorError = ref<string>('');
const descriptionError = ref<string>('');
const publishingYearError = ref<string>('');
const genreError = ref<string>('');

watch(() => book.value.image,(value) => validateImage(value));
watch(() => book.value.title,(value) => validateInput(value, 4, titleError, 'Title must have at least 4 characters'));
watch(() => book.value.author,(value) => validateInput(value, 4, authorError, 'Author must have at least 4 characters'));
watch(() => book.value.description,(value) => validateInput(value, 150, descriptionError, 'Description must be at least 150 characters long'));
watch(() => book.value.publishing_year,(value) => validateInput(String(value), 4, publishingYearError, 'Publishing year must have at least 4 characters'));
watch(() => book.value.genre,(value) => validateInput(String(value), 4, genreError, 'Genre must have at least 4 characters'));
</script>

<style scoped>
.error {
  color: red;
  display: flex;
  font-size: 1rem;
}
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
