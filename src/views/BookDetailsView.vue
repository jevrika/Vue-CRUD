<template>
  <BookDetails :book="book" :error="error" :id="id" />
</template>

<script setup >
import getBook from '../composables/getBook';
import BookDetails from '../components/BookDetails.vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const { id } = route.params;
const { book, error, load } = getBook(Number(id));

load();

</script>

<style></style>
