import { useState } from 'react';
import './App.css';
import books from './data/books.json';
import { Books } from './components/books';

// const bookNumber = 837465;

function App() {
  const [toggleImages, setToggleImages] = useState(true);

  const handleToggleImages = () => {
    console.log('Toggle Images');
    // setToggleImages(true);

    if (toggleImages === false) {
      setToggleImages(true);
    } else {
      setToggleImages(false);
    }
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
