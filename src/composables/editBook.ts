import { ref } from 'vue';
import axios from 'axios';

const editBook = async (id: number) => {
  const error = ref<string | null>(null);
  const bookData = ref(null)
  try {
    axios.patch(`http://localhost:3000/books/${id}`, bookData);
  } catch (err) {
    if (err instanceof Error) {
      error.value = err.message;
    }
    console.log(error.value);
  }

  return { bookData, error };
};

export default editBook;
