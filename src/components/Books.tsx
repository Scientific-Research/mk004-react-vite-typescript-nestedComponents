import { Book } from './Book';

export interface IBook {
  id: number;
  title: string;
  author: string;
  bookUrl: string;
  imageUrl: string;
}

export interface Iprops {
  books: IBook[];
  // bookNumber: number;
}

// export const Books: React.FC<BooksProps> = ({ books }) => { OR
// export const Books = ({ books }: BooksProps) => { OR
// export const Books = ({ books, bookNumber }: Iprops) => {
export const Books = ({ books }: Iprops) => {
  return (
    <>
      <h2>There are {books.length} books.</h2>
      {/* <h3>{bookNumber}</h3> */}

      {books.map((book: IBook) => (
        <Book book={book} key={book.id} />
      ))}
    </>
  );
};
