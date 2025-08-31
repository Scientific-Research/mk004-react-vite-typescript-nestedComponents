import React from 'react';
import './App.css';
import { books } from './dev/books';

function App() {
  return (
    <div className="App">
      <h1>Nested Components in React</h1>
      <div className="books">
        {books.map((b) => (
          <React.Fragment key={b.id}>
            <div className="book">
              <p className="title">
                <span className="title">Title:</span> {b.title}
              </p>
              <p className="author">
                <span className="author">Author:</span> {b.author}
              </p>
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

export default App;
