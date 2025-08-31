import React from 'react';
import './App.css';
import { books } from './dev/books';

function App() {
  return (
    <div className="App">
      <h1>Nested Components in React</h1>
      <h2>There are {books.length} books.</h2>
      <div className="books">
        {books.map((b) => (
          <React.Fragment key={b.id}>
            <div className="book">
              <a href={b.bookUrl} target="_blank">
                <img className="cover" src={b.imageUrl} alt="" />
              </a>
              <div className="allThreeBooks">
                <a href={b.bookUrl} target="_blank">
                  <p className="title">
                    <span className="title">Title:</span> {b.title}
                  </p>
                </a>
                <p className="author">
                  <span className="author">Author:</span> {b.author}
                </p>
              </div>
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

export default App;
