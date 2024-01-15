<template>
    <div v-for="book in books" :key="book.id">
      <SingleBook :book="book" />
    </div>
</template>

<script>
import SingleBook from './SingleBook.vue';

export default {
  props: ['books'],
  components: { SingleBook },
};
</script>

<style>
</style>
