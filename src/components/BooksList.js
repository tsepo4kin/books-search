import React from "react"
import BookCard from './BookCard.js'
import './BookList.css'

export default function BooksList() {
  return (
    <main>
      <div className='container'>
        <h5 className='books-counter'> 100500 </h5>
        <BookCard />
      </div>
    </main>
  )
}