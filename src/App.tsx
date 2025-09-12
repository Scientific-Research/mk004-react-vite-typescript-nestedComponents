import { useState } from 'react';
import './App.css';
import rawBooks from './data/books.json';
import { Books } from './components/Books';
import { IBook } from './interfaces';

// const bookNumber = 837465;

const books: IBook[] = [];
rawBooks.forEach((rawBook) => {
  const book: IBook = {
    ...rawBook,
    isLiked: true,
  };
  books.push(book);
});
console.log(books);

function App() {
  const [toggleImages, setToggleImages] = useState(true);

  const handleToggleImages = () => {
    console.log('Toggle Images');
    // setToggleImages(true);

    // First Solution for Toggling:
    // if (toggleImages === false) {
    //   setToggleImages(true);
    // } else {
    //   setToggleImages(false);
    // }

    // Second Solution for Toggling:
    setToggleImages(!toggleImages);
  };

  return (
    <div className="App">
      <h1>Nested Components in React</h1>

      {/* <Books books={books} bookNumber={bookNumber} /> */}

      <button className="btnToggleImages" onClick={handleToggleImages}>
        Toggle Images
      </button>

      <h2>There are {books.length} books.</h2>

      <Books books={books} toggleImages={toggleImages} />
    </div>
  );
}

export default App;
