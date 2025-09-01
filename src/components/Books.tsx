import { Book } from './Book';
import { IBook } from '../interfaces';
import { useState } from 'react';

export interface Iprops {
  books: IBook[];
  // bookNumber: number;
}

// export const Books: React.FC<BooksProps> = ({ books }) => { OR
// export const Books = ({ books }: BooksProps) => { OR
// export const Books = ({ books, bookNumber }: Iprops) => {
export const Books = ({ books }: Iprops) => {
  const [toggleImages, setToggleImages] = useState(false);

  const handleToggleImages = () => {
    console.log('first');
    setToggleImages(true);
  };

  return (
    <>
      <h1>Nested Components in React</h1>
      {/* <Books books={books} bookNumber={bookNumber} /> */}
      <button className="btnToggleImages" onClick={handleToggleImages}>
        Toggle Images
      </button>
      <h2>There are {books.length} books.</h2>
      {/* <h3>{bookNumber}</h3> */}

      {books.map((book: IBook) => (
        <Book book={book} key={book.id} toggleImages={toggleImages} />
      ))}
    </>
  );
};
