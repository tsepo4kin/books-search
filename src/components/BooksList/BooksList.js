import React from "react";
import BookCard from "../BookCard/BookCard.js";
import Loader from "../Loader/Loader.js";
import {
  addMoreBooks,
  togglePaginationLoader,
} from "../../store/actions";

import { useDispatch, useSelector } from "react-redux";



export default function BooksList({bookData}) {
  const books = useSelector((state) => state.books);
  const searchParams = useSelector((state) => state.searchParams);
  const paginationLoader = useSelector(
    (state) => state.loading.paginationLoader
  );
  const dispatch = useDispatch();


  function addBooks() {
    dispatch(togglePaginationLoader());
    fetch(
      `https://www.googleapis.com/books/v1/volumes?q="${searchParams.inputValue}"&startIndex=${books.booksItems.length}&maxResults=30&orderBy=${searchParams.sortingValue}&subject=${searchParams.categoriesValue}&printType=books&key=AIzaSyDqSD1ikizFCnZNTB4eEtf_udpdHc_ZpDs`
    )
      .then((r) => r.json())
      .then((r) => {
        dispatch(addMoreBooks(r.items));
        dispatch(togglePaginationLoader());
      });
  }

  return (
    <main>
      {books.booksCount ?
      <div className="container">
          <p className="books-counter">Found {books.booksCount} results</p>

        {books.booksItems.map((book, i) => {
          return <BookCard book={book} openBookDescription={bookData} key={i} />;
        })}


        <div className="btn-wrapper">
          {paginationLoader ? <Loader /> : 
          <button onClick={addBooks} className="add-more-btn">
            Add more
          </button>}
        </div>
      </div>
      :false
      }
    </main>
  );
}
