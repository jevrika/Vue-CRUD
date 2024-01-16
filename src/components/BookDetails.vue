<template>
  <div v-if="error">{{ error }}</div>

  <div v-if="book" class="wrapper">
    <div class="leftSide">
      <div class="imageWrapper">
        <img class="image" :src="book.image" />
        <div class="genresWrapper">
          <div class="genresImageWrapper">
            <!-- <img class="genresImage" src="../assets/{{ book.genres.toLowerCase() }}.png" /> -->
          </div>
          <span class="genre" v-for="genre in book.genres" :key="genre">{{ genre }}</span>
        </div>
      </div>
    </div>

    <div class="rightSide">
      <div class="textWrapper">
        <h2 class="heading">{{ book.title }}</h2>
        <p class="author">{{ book.author }}</p>
        <p class="description">{{ book.description }}</p>

        <p class="publishingYear">
          Publishing year: <b>{{ book.publishing_year }}</b>
        </p>
      </div>
    </div>
    <router-link class="link" :to="{ name: 'Home' }">X</router-link>
  </div>
  <div v-else>
    <LoadingSpinner />
  </div>
</template>

<script setup>
import LoadingSpinner from './LoadingSpinner.vue';
import { defineProps } from 'vue';
defineProps({
  book: {},
  error: String,
  id: Number
})

</script>

<style scoped>
.wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr;
  flex-direction: column;
  justify-content: center;
  height: 90vh;
  padding: 10%;
  position: relative;
}
.leftSide {
  display: flex;
  justify-content: center;
}

.image {
  width: 400px;
  border-radius: 15px;
}

.textWrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 15px;
}

.heading {
  font-size: 2.7rem;
}

.author {
  font-size: 1.4rem;
  font-style: italic;
}

.description {
  font-size: 1.5rem;
  letter-spacing: 1px;
  text-align: start;
}

.genresWrapper {
  padding: 25px;
  display: flex;
  justify-content: center;
  text-transform: uppercase;
  font-size: 1.2rem;
  gap: 15px;
}

.genre {
  background-color: #cedadc8d;
  padding: 10px 25px;
  border-radius: 25px;
  border: 1px solid #cedadc8d;
  font-weight: 500;
}

.link {
  position: absolute;
  top: 0;
  right: 0;
  color: red;
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 600;
}

.publishingYear {
  font-size: 1.3rem;
}
</style>
