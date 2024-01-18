import { ref } from 'vue';
import axios from 'axios';

const getBooks = () => {
  const books = ref([]);
  const error = ref<string | null>(null);

  const load = async () => {
    try {
      await axios.get('http://localhost:3000/books').then((response) => (books.value = response.data.reverse()));
    } catch (err) {
      error.value = 'Can\'t fetch book list';
    }
  };

  return { books, error, load };
};

export default getBooks;
