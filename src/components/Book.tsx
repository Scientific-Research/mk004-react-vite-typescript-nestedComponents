import { IBook } from '../interfaces';

interface Iprops {
  book: IBook;
  toggleImages: boolean;
  // bookNumber: number;
}

export const Book = ({ book: b, toggleImages }: Iprops) => {
  return (
    <div className="book">
      <a href={b.bookUrl} target="_blank">
        {/* <img className="cover" src={b.imageUrl} alt="" /> */}
        {toggleImages && <img className="cover" src={b.imageUrl} alt="" />}
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
        <p className="isLiked">{b.isLiked ? 'LIKED' : 'Not Liked'}</p>
        <button className="btnToggleLike">toggle like</button>
      </div>
    </div>
  );
};
