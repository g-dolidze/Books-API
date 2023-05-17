import React from "react";
import { Link } from "react-router-dom";
import { updateFavourites } from "../redux/actions";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import "./bookItem.scss";
import Like from "./Like";

type BookProps = { book: BookItem };

const Book: React.FC<BookProps> = ({ book }) => {
  const { favouriteBooks }: GlobalState = useAppSelector((state) => state);

  const dispatch = useAppDispatch();

  const isFoundBook = favouriteBooks.find((book) => book.id === book.id);
  return (
    <article className="article">
      <img src={book.volumeInfo.imageLinks.thumbnail} alt="Book Cover" />
      <div>
        <h2>
          <span>Title: </span>
          {book.volumeInfo.title}
        </h2>
        <h3>
          <span>Author:</span>
          {book.volumeInfo.author}
        </h3>
        <h3>
          <span>Book Genre: </span>
          {book.volumeInfo.publisher}
        </h3>
      </div>
      <section>
        <p>{book.searchInfo.textSnippet}</p>
      </section>
      <Like
        isFavourite={!!isFoundBook}
        onClick={() => dispatch(updateFavourites(book))}
      />
      <p className="readmore">
        <Link to={`/Book-API/details/${book.id}`}>Read More </Link>
      </p>
    </article>
  );
};
export default Book;
