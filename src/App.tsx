import React from 'react';
import './App.css';
import books from './data/books.json';
import { Books } from './components/books';

function App() {
  return (
    <div className="App">
      <h1>Nested Components in React</h1>
      <Books books={books} />
    </div>
  );
}

export default App;
