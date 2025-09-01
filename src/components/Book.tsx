// import { Iprops } from '../components/books';

interface IBook {
  id: number;
  title: string;
  author: string;
  bookUrl: string;
  imageUrl: string;
}

interface Iprops {
  book: IBook;
  // bookNumber: number;
}

export const Book = ({ book: b }: Iprops) => {
  // export const Book: React.FC<IBook> = ({ book: b }) => {
  return (
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
  );
};
