import './App.css';
import { books } from './dev/books';

function App() {
  books.map((b) => console.log(b));

  return (
    <div className="App">
      <h1>Nested Components in React</h1>
    </div>
  );
}

export default App;
