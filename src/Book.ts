export type Book = {
  id: number;
  image: string;
  title: string;
  author: string;
  description: string;
  genre?: string;
  genres: string[];
  publishing_year: number | string;
};
