import { ref } from 'vue';
import axios from 'axios'

const getBook = (id: number) => {
  const book = ref(null);
  const error = ref<string | null>(null);

  const load = async () => {
    try {
      axios.get(`http://localhost:3000/books/${id}`).then((response) => {
        book.value = response.data
      });
    } catch (err) {
      if (err instanceof Error) {
        error.value = err.message;
      }
      console.log(error.value);
    }
  };

  return { book, error, load };
};

export default getBook;
