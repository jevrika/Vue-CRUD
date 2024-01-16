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

    <!-- <label for="genres"> Book genres (Enter to add genre)</label>
    <input class="input" @keydown.enter.prevent="handleKeydown" type="text" v-model="genre" />

    <div class="genres" v-for="genre in genres" :key="genre">
      {{ genre }}
    </div> -->

    <label for="publishing_year"> Book publishing year </label>
    <input class="input" type="number" min="1700" max="2099" step="1" value="2000" name="publishing_year" id="publishing_year" required v-model="publishing_year" />

    <button class="button">Update Book</button>
    <router-link class="link" :to="{ name: 'Home' }">X</router-link>
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
      genres: '',
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
          (this.genres = data.genres),
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
          genres: this.genres,
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

<style scoped>

.form {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 10px;
  padding:5%;
  position: relative;
}

.input {
  font-size:1rem ;
  padding: 10px;
  border:none;
  border-bottom:2px solid #2d2d2d93;
  margin-bottom: 10px;
  background-color: #eee;
}

textarea{
  resize: vertical;
  width: 100%;
  height: 200px;
}

.input:focus{
  outline: none;
}

label{
  display: flex;
  text-transform:uppercase;
  font-size: 1.2rem;
  font-weight: 500;

}

.genres{
  display:flex;
  font-size: 1rem;
  text-transform: uppercase;
}

.button{
  font-size: 1.2rem;
  margin-top:20px;
  border:none;
  padding:15px 20px;
  background-color: #c5e7fe;
  border-radius: 15px;
  cursor: pointer;
}
.button:hover {
  opacity: 0.5;
}

.link{
  position: absolute;
  top: 0;
  right: 0;
  color: red;
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 600;
}
</style>
