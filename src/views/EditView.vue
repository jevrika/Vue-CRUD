<template>
  <div v-if="book">
    <EditForm :id="Number(id)" :book="book" @bookEdited="fromEmit" />
  </div>
</template>

<script setup lang="ts">
import EditForm from '../components/EditForm.vue';
import getBook from '../composables/getBook';
import editBook from '@/composables/editBook';

import { useRoute } from 'vue-router';
import { Book } from '@/Book';

import router from '@/router';

import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';

const route = useRoute();
const { id } = route.params;

const notify = () => {
  toast('You edited book!', {
    autoClose: 4000,
    theme: 'auto',
  });
};


const { book, load } = getBook(Number(id));
load();

const fromEmit = (id: number, data: Book) => {
  handleSubmit(id, data);
};

const handleSubmit = (id: number, bookData: Book) => {
  editBook(id, bookData);
  router.push('/');
  notify()
};
</script>

<style></style>
