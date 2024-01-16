import { ref } from 'vue';
import axios from 'axios';

const deleteBook = (id: number) => {
  const books = ref([]);
  const error = ref(null);
  const deleteBookById = async () => {
    try {
      await axios.delete(`http://localhost:3000/books/${id}`);
    } catch (err: any) {
      error.value = err.message;
      console.log(error.value);
    }
  };

  return { error, deleteBookById };
};

export default deleteBook;
