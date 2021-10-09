import React from "react"
import BookCard from './BookCard.js'
import './BookList.css'

export default function BooksList({books, totalItems, addMoreBooks, sendBookName}) {

  return (
    <main>
      <div className='container'>
        {books.length ? <h5 className='books-counter'> {totalItems} </h5> : false}
        {books.map((book, i) => {
          return (
            <BookCard book={book} key={i} openBookDescription={sendBookName}/>
          )
        })}
        {books.length ? <div className='btn-wrapper'> <button onClick={addMoreBooks} className='add-more-btn'>Add more</button> </div> : false}
      </div>
    </main>
  )
}