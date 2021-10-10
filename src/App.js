import "./App.css";
import AppHeader from "./components/AppHeader";
import BooksList from "./components/BooksList";
import React, { useState } from "react";
import BookDescription from "./components/BookDescription";
import Loader from "./components/Loader";

function App({store}) {
  const [bookData, setBookData] = useState(false);
  const [showBookData, setShowBookData] = useState(false)
  const [loading, setLoading] = useState(false)

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
      <AppHeader />

      {showBookData && <BookDescription book={bookData} closeShowBook={closeShowBook}/>}

      {loading && <Loader />}
      {!showBookData && !loading && <BooksList store={store}/>}

    </div>
  );
}

export default App;
