import React from "react";
import BookCard from "../BookCard/BookCard.js";
import Loader from "../Loader/Loader.js";
import { fetchMoreBooks } from "../../store/actions";

import { useDispatch, useSelector } from "react-redux";

export default function BooksList({ bookData }) {
  const books = useSelector((state) => state.books);
  const searchParams = useSelector((state) => state.searchParams);
  const paginationLoader = useSelector(
    (state) => state.loading.paginationLoader
  );
  const dispatch = useDispatch();

  function addBooks() {
    if (books.booksCount - books.booksItems.length <= 0) {
      console.log("all books");
    } else if (books.booksCount - books.booksItems.length >= 30) {
      dispatch(fetchMoreBooks(books.booksItems.length, searchParams));
    } else if (books.booksCount - books.booksItems.length < 30) {
      dispatch(
        fetchMoreBooks(
          books.booksItems.length,
          searchParams,
          books.booksCount - books.booksItems.length
        )
      );
    }
  }

  return (
    <main>
      {books.booksCount ? (
        <div className="container">
          <p className="books-counter">Found {books.booksCount} results</p>

          {books.booksItems.map((book, i) => {
            return (
              <BookCard book={book} openBookDescription={bookData} key={i} />
            );
          })}

          <div className="btn-wrapper">
            {paginationLoader ? (
              <Loader />
            ) : (
              <button onClick={addBooks} className="add-more-btn">
                Add more
              </button>
            )}
          </div>
        </div>
      ) : (
        false
      )}
    </main>
  );
}
