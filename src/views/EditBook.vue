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

    <button>Update Book</button>
  </form>
</template>

<script>
export default {
  props: ['id'],
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
  mounted() {
    fetch(`http://localhost:3000/books/${this.id}`)
      .then((response) => response.json())
      .then((data) => {
        (this.image = data.image),
          (this.title = data.title),
          (this.author = data.author),
          (this.description = data.description),
          (this.genre = data.genre),
          (this.publishing_year = data.publishing_year);
      });
  },
  methods: {
    handleSubmit() {
      fetch(`http://localhost:3000/books/${this.id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          image: this.image,
          title: this.title,
          author: this.author,
          description: this.description,
          genre: this.genre,
          publishing_year: this.publishing_year,
        }),
      })
        .then(() => {
          this.$router.push('/');
        })
        .catch((error) => console.log(error.message));
    },
  },
};
</script>

<style></style>
