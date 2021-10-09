import React from "react"
import BookCard from './BookCard.js'
import Loader from "./Loader.js"
import './BookList.css'

export default function BooksList({books, totalItems, addMoreBooks, sendBookName, loadingMore}) { 
  return (
    <main>
      <div className='container'>
        {books.length ? <p className='books-counter'>Found {totalItems} results</p> : false}
        {books.map((book, i) => {
          return (
            <BookCard book={book} key={i} openBookDescription={sendBookName}/>
          )
        })}
        <div className='btn-wrapper'>
          {loadingMore ? <Loader /> : 
            (books.length ?  <button onClick={addMoreBooks} className='add-more-btn'>Add more</button>  : false)
          }
        </div>
      </div>
    </main>
  )
}