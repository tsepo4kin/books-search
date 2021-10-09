import React from "react";
import './BookDescription.css';

export default function BookDescription({book, closeShowBook}) {
  console.log(book)
  return (
    <div className="book-item-wrapper">
      <div className="book-item">
        <div className="book-item__img__wrapper">
          <img className="book-item__img" src={book.volumeInfo.imageLinks.thumbnail} alt="" />
        </div>
        
        <div className="book-item-description-wrapper">
          <p className="book-item__breadcrumbs"><span>{book.volumeInfo.categories}</span></p>
          <h2 className="book-card__title">{book.volumeInfo.title}</h2>
          <p className="book-card__authors">{book.volumeInfo.authors}</p>
          <p className="book-item__description">qweqwe</p>
        </div>
      </div>
      <button onClick={closeShowBook}>close</button>
    </div>
  )
}