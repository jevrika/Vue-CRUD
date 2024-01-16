<template>
  <div v-if="error">{{ error }}</div>

  <div v-if="book" class="wrapper">
    <div class="top">
      <h2 class="heading">{{ book.title }}</h2>
      <p class="author">{{ book.author }}</p>
      <p class="publishingYear">
        Publishing year: <b>{{ book.publishing_year }}</b>
      </p>
    </div>
    <div class="middle">
      <div class="imageWrapper">
        <img class="image" :src="book.image" />
      </div>

      <div class="textWrapper">
        <p class="description">{{ book.description }}</p>
      </div>
    </div>
    <div class="genresWrapper">
      <span class="genre" v-for="genre in book.genres" :key="genre">{{ genre }}</span>
    </div>
  </div>
  <div v-else>
    <LoadingSpinner />
  </div>
</template>

<script setup lang="ts">
import LoadingSpinner from './LoadingSpinner.vue';
import { defineProps } from 'vue';

defineProps({
  book: {
    type: Object,
    required: true,
  },
  error: String,
  id: Number,
});
</script>

<style scoped>
/* .wrapper {
  display: grid;
  flex-direction: column;
  justify-content: center;
  padding: 100px;
  position: relative;
} */
/* .middle {
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: center;
  gap: 25px;
  padding: 30px;
} */

.image {
  width: 400px;
  border-radius: 15px;
}
/* 
.textWrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 15px;
} */

.heading {
  margin: 0 0 10px 0;
  font-size: 3.7rem;
}

.author {
  font-size: 1.4rem;
  font-style: italic;
}

.description {
  font-size: 1.5rem;
  letter-spacing: 1px;
  text-align: start;
  margin-bottom: 30px;
}

/* .genresWrapper {
  padding: 25px;
  display: flex;
  justify-content: center;
  width: 100vw;
  text-transform: uppercase;
  font-size: 1.2rem;
  gap: 15px;
  position: absolute;
  bottom: 0;
  margin-top: 10px;
} */

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

@media only screen and (max-width: 600px) {
  .wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 25px;
  }

  .image {
    width: 300px;
    border-radius: 15px;
  }
  .middle {
    display: grid;
    grid-template-columns: 1fr;
    justify-content: center;
    gap: 25px;
    padding: 30px;
  }

  .genresWrapper {
    padding: 25px;
    display: grid;
    gap: 10px;
    grid-template-columns: 1fr;
    justify-content: center;
    text-transform: uppercase;
    font-size: 1.2rem;
  }
}

@media only screen and (min-width: 600px) {
  .wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 25px;
    position: relative;
  }

  .middle {
    display: grid;
    grid-template-columns: 1fr;
    justify-content: center;
    gap: 25px;
    padding: 50px;
  }

  .genresWrapper {
    padding: 25px;
    display: flex;
    justify-content: center;
    width: 80vw;
    text-transform: uppercase;
    font-size: 1.2rem;
    gap: 15px;
    position: absolute;
    bottom: 0;
    margin-top: 25px;
  }
}
@media only screen and (min-width: 768px) {
  .wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 25px;
    position: relative;
    margin-bottom: 50px;
  }

  .middle {
    display: grid;
    grid-template-columns: 1fr;
    justify-content: center;
    gap: 25px;
    padding: 30px;
  }

  .genresWrapper {
    padding: 25px;
    display: flex;
    justify-content: center;
    width: 85vw;
    text-transform: uppercase;
    font-size: 1.2rem;
    gap: 15px;
    position: absolute;
    bottom: 0;
    margin-top: 10px;
  }
}

@media only screen and (min-width: 992px) {
  .wrapper {
    display: grid;
    flex-direction: column;
    justify-content: center;
    padding: 100px;
    position: relative;
  }
  .middle {
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-content: center;
    gap: 25px;
    padding: 30px;
  }
  .genresWrapper {
    padding: 25px;
    display: flex;
    justify-content: center;
    width: 100vw;
    text-transform: uppercase;
    font-size: 1.2rem;
    gap: 15px;
    position: absolute;
    bottom: 0;
    margin-top: 10px;
  }

  .textWrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 15px;
  }
}
@media only screen and (min-width: 1550px) {
  .wrapper {
    display: grid;
    flex-direction: column;
    justify-content: center;
    padding: 100px;
    position: relative;
  }
  .middle {
    display: grid;
    grid-template-columns: 400px 1000px;
    justify-content: center;
    gap: 50px;
    padding: 30px;
  }
  .genresWrapper {
    padding: 25px;
    display: flex;
    justify-content: center;
    width: 95vw;
    text-transform: uppercase;
    font-size: 1.2rem;
    gap: 15px;
    position: absolute;
    bottom: 0;
    margin-top: 10px;
  }

  .textWrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 15px;
  }
}

</style>
