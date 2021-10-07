import React from "react"
import './BookCard.css'

export default function BookCard() {
  return (
    <div className="book-card">
      <img className="book-card__img" src="" alt="" />
      <p className="book-card__categories">categories</p>
      <h2 className="book-card__title">Book name</h2>
      <p className="book-card__authors">Authors</p>
    </div>
  )
}