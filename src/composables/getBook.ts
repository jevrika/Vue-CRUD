import { ref } from 'vue';
import axios from 'axios'
import { Book } from '@/Book';

const getBook = (id: number) => {
  const book = ref<Book>();
  const error = ref<string | null>(null);

  const load = async () => {
    try {
      await axios.get(`http://localhost:3000/books/${id}`).then((response) => {
        book.value = response.data
      });
    } catch (err) {
      error.value = 'Can\'t fetch book data';
    }
  };

  return { book, error, load };
};

export default getBook;
