<template>
  <div v-if="errorMessage" class="error">
    {{ errorMessage }}
  </div>
  <div class="wrapper">
    <AddBook @bookAdded="fromEmit" />
  </div>
</template>

<script setup lang="ts">
import AddBook from '../components/AddBook.vue';
import addBook from '@/composables/addBook';

import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';

import { Book } from '@/Book';

import { useRouter } from 'vue-router';
import { ref } from 'vue';

const router = useRouter();

let errorMessage = ref<string>('');

const notify = () => {
  toast('You added book to book list!', {
    autoClose: 4000,
    theme: 'auto',
  });
};

const fromEmit = (data: Book) => {
  handleSubmit(data);
};

const handleSubmit = async (data: Book) => {
  if (data.image !== '' && data.title !== '' && data.author !== '' && data.description && data.genres.length > 0 && data.publishing_year !== '') {
    const book = {
      image: data.image,
      title: data.title,
      author: data.author,
      description: data.description,
      genres: data.genres,
      publishing_year: data.publishing_year,
    };

    addBook(book);
    notify();
    router.push('/');
  } else {
    errorMessage.value = 'You need to fill all form fields';
  }
};
</script>

<style>
.error {
  color: red;
  font-size: 1.5rem;
}
@media only screen and (min-width: 600px) {
  .wrapper {
    padding: 10px;
  }
}

@media only screen and (min-width: 768px) {
  .wrapper {
    padding: 30px;
  }
}
</style>
