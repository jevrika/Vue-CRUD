<template>
  <form @submit.prevent="handleSubmit" class="form">
    <label> Book cover image: </label>
    <input class="input" type="text" required v-model="image" />

    <label> Book title: </label>
    <input class="input" type="text" required v-model="title" />

    <label> Book author: </label>
    <input class="input" type="text" required v-model="author" />

    <label> Book description: </label>
    <textarea required v-model="description" class="input"></textarea>

    <label for="publishing_year"> Book publishing year </label>
    <input class="input" type="number" min="1700" max="2099" step="1" value="2000" name="publishing_year" id="publishing_year" required v-model="publishing_year" />

    <label for="genres"> Book genres (Enter to add genre)</label>
    <input @keydown.enter.prevent="handleKeydown" type="text" v-model="genre" />

    <div v-for="genre in genres" :key="genre">
      {{ genre }}
    </div>
    <button>Add Book</button>
  </form>
</template>

<script>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
export default {
  setup() {
    const image = ref('');
    const title = ref('');
    const author = ref('');
    const description = ref('');
    const genre = ref('');
    const genres = ref([]);
    const publishing_year = ref('');

    const router = useRouter()

    const handleKeydown = () => {
      if (!genres.value.includes(genre.value)) {
        genre.value = genre.value.replace(/\s/, ''); // removes all whitespace
        genres.value.push(genre.value);
      }
      genre.value = '';
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
      const response = await fetch('http://localhost:3000/books', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(book),
      });
      if (!response.ok) {
        throw new Error('Failed to add book');
      }
      router.push('/')
    };

    return { image, title, author, description, genre, genres, publishing_year, handleKeydown, handleSubmit };
  },
};
</script>

<style scoped>
.form {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.input {
  border: 1px solid grey;
  padding: 10px;
}
</style>
