import React, { useState } from "react"
import './AppHeader.css'


export default function AppHeader({searchBooks}) {
  const [value, setValue] = useState('');

  function onClickHandler() {
    if(value.trim()) {
      searchBooks(value)
    }
  }

  return (
    <header className="header">
      <h1 className="header__title">Search for books</h1>
      <input className="header__input" value={value} onChange={(evt) => {setValue(evt.target.value)}} type="text" />
      <button className="header__search" onClick={onClickHandler} >Search</button>

      <div className="select-wrapper">
        <select className="header__select__categories" size="1" name="" id="">
          <option>Пункт 1</option>
          <option>Пункт 2</option>
        </select>
    
        <select className="header__select__sorting" size="1" name="" id="">
          <option>Пункт 1</option>
          <option>Пункт 2</option>
        </select>
      </div>
    </header>
  )
}