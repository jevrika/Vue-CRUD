<template>
  <div v-if="error" class="error">{{ error }}</div>
  <div v-if="book">
    <BookDetails :book="book" :id="id" />
  </div>
  <div v-else>
    <LoadingSpinner />
  </div>
</template>

<script setup lang="ts">
import getBook from '../composables/getBook';
import BookDetails from '../components/BookDetails.vue';
import { useRoute } from 'vue-router';
import LoadingSpinner from '@/components/LoadingSpinner.vue';

const route = useRoute();
const id = Number(route.params.id);

const { book, error, load } = getBook(Number(id));

load();

</script>

<style scoped>
.error {
  color: red;
  font-size: 1.5rem;
}
</style>
