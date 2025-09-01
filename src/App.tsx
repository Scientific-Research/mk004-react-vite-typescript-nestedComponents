import './App.css';
import books from './data/books.json';
import { Books } from './components/books';

// const bookNumber = 837465;

function App() {
  return (
    <div className="App">
      <Books books={books} />
    </div>
  );
}

export default App;
