import { ref } from 'vue';
import axios from 'axios'


const deleteBook = (id: number) => {
  const error = ref(null);
  const deleteBookById = async () => {
    try {
      axios.delete(`http://localhost:3000/books/${id}`).then((response) => response)
    } catch (err: any) {
      error.value = err.message;
      console.log(error.value);
    }
  };

  return { error, deleteBookById };
};

export default deleteBook;