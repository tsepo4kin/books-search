import "./App.css";
import AppHeader from "./components/AppHeader";
import BooksList from "./components/BooksList";
import React, { useState } from "react";
function App() {
  const [books, setBook] = useState([]);
  const [totalItems, setTotalItems] = useState(0);
  const [inputValue, setInputValue] = useState('')

  function searchBooks(value) {
    //request
    // inputValue = value
    setInputValue(value)

    fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${inputValue}+intitle&maxResults=30&printType=books&key=AIzaSyDqSD1ikizFCnZNTB4eEtf_udpdHc_ZpDs`
    )
      .then((r) => r.json())
      .then((r) => {
        setTotalItems(r.totalItems);
        setBook(r.items);
      });
  }

  function addBooks() {
    fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${inputValue}+intitle&startIndex=${books.length}&maxResults=30&printType=books&key=AIzaSyDqSD1ikizFCnZNTB4eEtf_udpdHc_ZpDs`
    )
      .then((r) => r.json())
      .then((r) => {
        setBook(books.concat(r.items));
      });
  }

  return (
    <div className="App">
      <AppHeader searchBooks={searchBooks} />

      <BooksList books={books} totalItems={totalItems} addMoreBooks={addBooks}/>
    </div>
  );
}

export default App;
