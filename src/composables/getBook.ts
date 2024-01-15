import { ref } from 'vue';

const getBook = (id:number) => {
  const book = ref(null);
  const error = ref(null);

  const load = async () => {
    try {
      const data = await fetch(`http://localhost:3000/books/${id}`);
      if (!data.ok) {
        throw Error('That book does not exist');
      }
      book.value = await data.json();
    } catch (err: any) {
      error.value = err.message;
      console.log(error.value);
    }
  };

  return { book, error, load };
};

export default getBook;
