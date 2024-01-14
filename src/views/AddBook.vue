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

    <label for="genre"> Book genre </label>
    <select required class="input" v-model="genre">
      <option value="">Choose genre</option>
      <option value="Fantasy">Fantasy</option>
      <option value="History">History</option>
      <option value="Horror">Horror</option>
      <option value="Mystery">Mystery</option>
      <option value="Psychology">Psychology</option>
      <option value="Romance">Romance</option>
    </select>

    <label for="publishing_year"> Book publishing year </label>
    <input class="input" type="number" min="1700" max="2099" step="1" value="2000" name="publishing_year" id="publishing_year" required v-model="publishing_year" />

    <button>Add Book</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      image: '',
      title: '',
      author: '',
      description: '',
      genre: '',
      publishing_year: '',
    };
  },
  methods: {
    handleSubmit() {
      let book = {
        image: this.image,
        title: this.title,
        author: this.author,
        description: this.description,
        genre: this.genre,
        publishing_year: this.publishing_year,
      };
      fetch('http://localhost:3000/books', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(book),
      }).then(() => {
        this.$router.push('/');
      }).catch((error) => console.log(error.message))
    },
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
