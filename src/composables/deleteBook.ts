import { ref } from 'vue';
import axios from 'axios';

const deleteBook = (id: number) => {
  const error = ref<string | null>(null);
  const deleteBookById = async () => {
    try {
      await axios.delete(`http://localhost:3000/books/${id}`);
    } catch (err) {
      error.value = 'Something get wrong when you trie delete book';
    }
  };
  return { error, deleteBookById };
};

export default deleteBook;
