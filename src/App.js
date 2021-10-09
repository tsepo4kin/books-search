import "./App.css";
import AppHeader from "./components/AppHeader";
import BooksList from "./components/BooksList";
import React, { useState, useEffect } from "react";
function App() {
  const [books, setBook] = useState([]);
  const [totalItems, setTotalItems] = useState(0);
  const [searchParams, setSearchParams] = useState(0);

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
      console.log(searchParams)
      fetch(
        `https://www.googleapis.com/books/v1/volumes?q="${searchParams.inputValue}"&maxResults=30&orderBy=${searchParams.sortingValue}&subject=${searchParams.categoriesValue}&printType=books&key=AIzaSyDqSD1ikizFCnZNTB4eEtf_udpdHc_ZpDs`
      )
        .then((r) => r.json())
        .then((r) => {
          console.log(r);
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

  return (
    <div className="App">
      <AppHeader searchBooks={searchBooks} />

      <BooksList
        books={books}
        totalItems={totalItems}
        addMoreBooks={addBooks}
      />
    </div>
  );
}

export default App;
