import { useState } from 'react';
import { IBook } from '../interfaces';

interface Iprops {
  book: IBook;
  toggleImages: boolean;
  // bookNumber: number;
}

export const Book = ({ book: b, toggleImages }: Iprops) => {
  const [toggleLike, setToggleLike] = useState(false);

  const handleToggleLike = () => {
    setToggleLike(!toggleLike);
  };

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
        {/* <p className="isLiked">{b.isLiked ? 'LIKED' : 'Not Liked'}</p> */}
        <p className="isLiked">{toggleLike ? 'LIKED' : 'Not Liked'}</p>
        <button onClick={handleToggleLike} className="btnToggleLike">
          toggle like
        </button>
      </div>
    </div>
  );
};
