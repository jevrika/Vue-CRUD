<template>
  <div v-if="book" class="imageWrapper">
    <img class="image" :src="book.image" />
    <div class="genreWrapper">
      <div class="genreImageWrapper">
        <!-- <img class="genreImage" src="../assets/{{ book.genre.toLowerCase() }}.png"/> -->
      </div>
      <p class="genreText">{{ book.genre }}</p>
    </div>

    <div class="textWrapper">
      <h2 class="heading">{{ book.title }}</h2>
      <p class="author">{{ book.author }}</p>
      <p class="description">{{ book.description }}</p>

      <p class="publishingYear">
        Publishing year: <b>{{ book.publishing_year }}</b>
      </p>
    </div>
  </div>
  <div v-else>
    <p>Loading job details...</p>
  </div>
</template>

<script>
export default {
  props: ['id'],
  data() {
    return {
      book: null,
    };
  },
  mounted() {
    fetch(`http://localhost:3000/books/${this.id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        this.book = data;
      })
      .catch((error) => {
        console.error('There was a problem with the fetch operation:', error);
      });
  },
};
</script>

<style></style>
