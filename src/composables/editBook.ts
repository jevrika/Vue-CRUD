import { ref } from 'vue';
import axios from 'axios';
import { Book } from '@/Book';

const editBook = async (id: number, data: Book | undefined) => {
  const error = ref<string | null>(null);

  try {
    delete data?.genre;
    await axios.patch(`http://localhost:3000/books/${id}`, data);
  } catch (err) {
    error.value = 'Can\'t load edit form';
  }

  return { error };
};

export default editBook;
