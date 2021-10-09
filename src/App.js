import "./App.css";
import AppHeader from "./components/AppHeader";
import BooksList from "./components/BooksList";
import React, { useState, useEffect } from "react";
import BookDescription from "./components/BookDescription";

function App() {
  const [books, setBook] = useState([]);
  const [totalItems, setTotalItems] = useState(0);
  const [searchParams, setSearchParams] = useState(0);
  const [bookData, setBookData] = useState(false);
  const [showBookData, setShowBookData] = useState(false)

  function searchBooks(value, categoriesValue, sortingValue) {
    setSearchParams({
      inputValue: value,
      categoriesValue: categoriesValue,
      sortingValue: sortingValue,
    });
  }

  useEffect(() => {
    if (!searchParams) {
      console.log("start ren");
    } else {
      fetch(
        `https://www.googleapis.com/books/v1/volumes?q="${searchParams.inputValue}"&maxResults=30&orderBy=${searchParams.sortingValue}&subject=${searchParams.categoriesValue}&printType=books&key=AIzaSyDqSD1ikizFCnZNTB4eEtf_udpdHc_ZpDs`
      )
        .then((r) => r.json())
        .then((r) => {
          setTotalItems(r.totalItems);
          setBook(r.items);
        });
    }
  }, [searchParams]);

  function addBooks() {
    fetch(
      `https://www.googleapis.com/books/v1/volumes?q="${searchParams.inputValue}"&startIndex=${books.length}&maxResults=30&orderBy=${searchParams.sortingValue}&subject=${searchParams.categoriesValue}&printType=books&key=AIzaSyDqSD1ikizFCnZNTB4eEtf_udpdHc_ZpDs`
    )
      .then((r) => r.json())
      .then((r) => {
        setBook(books.concat(r.items));
      });
  }

  function sendBookData(e) {
    setShowBookData(true)
    setBookData(e)
  }

  function closeShowBook() {
    setShowBookData(false)
    setBookData(false)
  }

  return (
    <div className="App">
      <AppHeader searchBooks={searchBooks} />

      {showBookData && <BookDescription book={bookData} closeShowBook={closeShowBook}/>}

      {!showBookData && <BooksList
        books={books}
        totalItems={totalItems}
        addMoreBooks={addBooks}
        sendBookName={sendBookData}
      />}

    </div>
  );
}

export default App;
