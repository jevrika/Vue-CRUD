import { ref } from 'vue';
import axios from 'axios';

const addBook = async (book: any) => {
  const error = ref<string | null>(null);
  try {
    axios.post('http://localhost:3000/books', book);
  } catch (err) {
    if (err instanceof Error) {
      error.value = err.message;
    }
    console.log(error.value);
  }

  return { book, error };
};

export default addBook;
