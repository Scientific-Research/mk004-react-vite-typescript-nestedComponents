import React from 'react';

interface IBook {
  id: number;
  title: string;
  author: string;
  bookUrl: string;
  imageUrl: string;
}

interface Iprops {
  books: IBook[];
}

// export const Books: React.FC<BooksProps> = ({ books }) => { OR
// export const Books = ({ books }: BooksProps) => { OR
export const Books = ({ books }: Iprops) => {
  return (
    <>
      <h2>There are {books.length} books.</h2>
      <div className="books">
        {books.map((b: IBook) => (
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
    </>
  );
};
