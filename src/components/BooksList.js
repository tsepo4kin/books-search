import React, {useEffect, useState} from "react"
import BookCard from './BookCard.js'
import Loader from "./Loader.js"
import {setBooks, addMoreBooks} from '../store/actions'
import { useDispatch, useSelector } from "react-redux"

import '../App.css'

export default function BooksList() {
  const [foundBooks, setFoundBooks] = useState()
  const books = useSelector((state) => state.books)
  const searchParams = useSelector((state) => state.searchParams)
  const dispatch = useDispatch();


  useEffect(() => {
    if (searchParams.inputValue) {
      // setLoading(true)
      fetch(
        `https://www.googleapis.com/books/v1/volumes?q="${searchParams.inputValue}"&maxResults=30&orderBy=${searchParams.sortingValue}&subject=${searchParams.categoriesValue}&printType=books&key=AIzaSyDqSD1ikizFCnZNTB4eEtf_udpdHc_ZpDs`
      )
        .then((r) => r.json())
        .then((r) => {
          setFoundBooks(r.totalItems)
          dispatch(setBooks(r.items));
          // setLoading(false)
        });
    }
  }, [searchParams]);

  function addBooks() {
    // setLoadingMore(true)
    fetch(
      `https://www.googleapis.com/books/v1/volumes?q="${searchParams.inputValue}"&startIndex=${books.length}&maxResults=30&orderBy=${searchParams.sortingValue}&subject=${searchParams.categoriesValue}&printType=books&key=AIzaSyDqSD1ikizFCnZNTB4eEtf_udpdHc_ZpDs`
    )
      .then((r) => r.json())
      .then((r) => {
        dispatch(addMoreBooks(r.items));
        // setLoadingMore(false)
      });
  }

  return (
    <main>
      <div className='container'>
        {books.length ? <p className='books-counter'>Found {foundBooks} results</p> : false}
        {books.map((book, i) => {
          return (
            <BookCard book={book} key={i} />
          )
        })}
        <div className='btn-wrapper'>
            <Loader /> 
            <button onClick={addBooks} className='add-more-btn'>Add more</button> 
        </div>
      </div>
    </main>
  )
}