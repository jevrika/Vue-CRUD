<template>
  <div v-if="error">{{ error }}</div>
  <div v-if="book" class="imageWrapper">
    <img class="image" :src="book.image" />
    <div class="genresWrapper">
      <div class="genresImageWrapper">
        <!-- <img class="genresImage" src="../assets/{{ book.genres.toLowerCase() }}.png" /> -->
      </div>
      <span v-for="genre in book.genres" :key="genre">{{ genre }}</span>
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
    <Spinner />
  </div>
</template>

<script>
import getBook from '../composables/getBook';
import Spinner from '../components/Spinner.vue';
export default {
  props: ['id'],
  components: { Spinner },
  setup(props) {
    const { book, error, load } = getBook(props.id);

    load();

    return { book, error };
  },
};
</script>

<style></style>
