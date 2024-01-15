import { ref } from 'vue';

const deleteBook = (id: number) => {
  const error = ref(null);
  const load = async () => {
    try {
      const response = await fetch(`http://localhost:3000/books/${id}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
      });

      if (!response.ok) {
        throw Error('Failed to delete the book');
      }

      return response;
    } catch (err: any) {
      error.value = err.message;
      console.log(error.value);
    }
  };

  return { error, load };
};

export default deleteBook;