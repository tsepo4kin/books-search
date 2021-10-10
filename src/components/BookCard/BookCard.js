import React from "react"


export default function BookCard({book, openBookDescription}) {
  function sendBook() {
    openBookDescription(book)
  }

  return (
    <div className="book-card" onClick={sendBook}>
      <img className="book-card__img" src={book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : "#"} alt='book' />
      <p className="book-card__categories">{book.volumeInfo?.categories}</p>
      <h5 className="book-card__title">{book.volumeInfo?.title}</h5>
      <p className="book-card__authors">{book.volumeInfo?.authors}</p>
    </div>
  )
}