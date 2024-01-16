<template>
  <div class="book">
    <div class="bookImageWrapper">
      <img class="bookImage" :src="book.image" alt="book image" />
    </div>
    <div class="details">
      <h1>{{ book.title }}</h1>
      <p>{{ book.author }}</p>
    </div>

    <div class="genres">
      <span v-for="genre in book.genres" :key="genre">{{ genre }}</span>
    </div>

    <span @click="showButtons = !showButtons" class="material-icons"> keyboard_arrow_down </span>

    <div v-if="showButtons" class="buttonsWrap">
      <router-link class="link" :to="{ name: 'BookDetails', params: { id: book.id } }">
        <span class="material-icons"> import_contacts </span>
      </router-link>

      <span @click="$emit('bookDeleted', book.id)" class="material-icons"> delete </span>

      <router-link class="link" :to="{ name: 'EditBook', params: { id: book.id } }">
        <span class="material-icons"> edit </span>
      </router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, ref } from 'vue';

defineProps({
  book: {
    type: Object,
    required: true,
  },
});

const showButtons = ref(false);
</script>

<style scoped>
.book {
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 25px 35px;
  border: 1px solid grey;
  border-radius: 10px;
}

h1 {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  height: 150px;
}
.bookImageWrapper {
  display: flex;
  justify-content: center;
  align-items: center;
}
.bookImage {
  object-fit: contain;
  height: 100%;
  width: 100%;
  max-height: 400px;
  max-width: 100%;
  border-radius: 10px;
}

.details {
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 10px;
  flex-grow: 1;
  flex-shrink: 1;
}

.buttonsWrap {
  display: flex;
  justify-content: center;
  gap: 25px;
  padding: 10px;
}

.material-icons {
  cursor: pointer;
}
.material-icons:hover {
  opacity: 0.5;
}
.link {
  color: black;
}

.genres {
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 10px;
}
</style>
