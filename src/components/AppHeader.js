import React, { useState } from "react"
import './AppHeader.css'


export default function AppHeader({searchBooks}) {
  const [value, setValue] = useState('');
  const [categoriesValue, setCategoriesValue] = useState('all')
  const [sortingValue, setSortingValue] = useState('relevance')

  function onClickHandler() {
    if(value.trim()) {
      searchBooks(value, categoriesValue, sortingValue)
    }
  }

  function changeSelectCategories(e) {
    setCategoriesValue(e.target.value)
  }

  function changeSelectSorting(e) {
    setSortingValue(e.target.value)
  }
  

  return (
    <header className="header">
      <h1 className="header__title">Search for books</h1>
      <input className="header__input" value={value} onChange={(evt) => {setValue(evt.target.value)}} type="text" />
      <button className="header__search" onClick={onClickHandler} >Search</button>

      <div className="select-wrapper">
        <select className="header__select__categories" size="1" name="" id="" value={categoriesValue} onChange={changeSelectCategories}>
          <option value='all'>all</option>
          <option value='art'>art</option>
          <option value='biography'>biography</option>
          <option value='computers'>computers</option>
          <option value='history'>history</option>
          <option value='medical'>medical</option>
          <option value='poetry'>poetry</option>
        </select>
    
        <select className="header__select__sorting" size="1" name="" id="" value={sortingValue} onChange={changeSelectSorting}>
          <option value='relevance'>relevance</option>
          <option value='newest'>newest</option>
        </select>
      </div>
    </header>
  )
}