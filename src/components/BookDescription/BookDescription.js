import React from "react";

export default function BookDescription({ book, closeShowBook }) {
  return (
    <div className="book-item-wrapper">
      <div className="book-item__img__wrapper">
        <img
          className="book-item__img"
          src={book.volumeInfo.imageLinks.thumbnail}
          alt=""
        />
      </div>

      <div className="book-item-description-wrapper">
        <p className="book-item__breadcrumbs">
          <span>{book.volumeInfo.categories}</span>
        </p>
        <h2 className="book-item__title">{book.volumeInfo.title}</h2>
        <p className="book-item__authors">{book.volumeInfo.authors}</p>
        <p className="book-item__description">{book.volumeInfo.description}</p>
      </div>
      <button className="book-item__button" onClick={closeShowBook}>
        close
      </button>
    </div>
  );
}
