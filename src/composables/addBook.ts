import { ref } from 'vue';
import axios from 'axios';
import { Book } from '@/Book';

const addBook = async (book: Book) => {
  const error = ref<string | null>(null);
  try {
    axios.post('http://localhost:3000/books', book);
  } catch (err) {
    error.value = 'Can\'t load add book form';
  }

  return { book, error };
};

export default addBook;
