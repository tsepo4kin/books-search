import React from "react"
import BookCard from './BookCard.js'
import './BookList.css'

export default function BooksList({books, totalItems, addMoreBooks}) {
  
  return (
    <main>
      <div className='container'>
        <h5 className='books-counter'> {totalItems} </h5>
        {books.map((book, i) => {
          return (
            <BookCard book={book} key={i} />
          )
        })}
        <div className='btn-wrapper'> <button onClick={addMoreBooks} className='add-more-btn'>Add more</button> </div>
      </div>
    </main>
  )
}