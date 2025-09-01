import { useState } from 'react';
import { IBook } from '../interfaces';

interface Iprops {
  book: IBook;
  // bookNumber: number;
}

export const Book = ({ book: b }: Iprops) => {
  return (
    <div className="book">
      <a href={b.bookUrl} target="_blank">
        {/* <img className="cover" src={b.imageUrl} alt="" /> */}
        {<img className="cover" src={b.imageUrl} alt="" />}
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
