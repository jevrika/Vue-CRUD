import { ref } from 'vue';
import axios from 'axios'

const getBooks = () => {
  const books = ref([]);
  const error = ref<string | null>(null);

  const load =() => {
    try {
      axios.get('http://localhost:3000/books').then((response) => {
        books.value = response.data
      });
    } catch (err) {
      if (err instanceof Error) {
        error.value = err.message;
      }
      console.log(error.value);
    }
  };

  return { books, error, load };
};

export default getBooks;
