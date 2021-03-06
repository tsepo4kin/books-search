import React, { useState } from "react";
import { fetchBooks } from "../../store/actions";
import { useDispatch } from "react-redux";

export default function AppHeader() {
  const [inputValue, setInputValue] = useState("");
  const [categoriesValue, setCategoriesValue] = useState("all");
  const [sortingValue, setSortingValue] = useState("relevance");
  const dispatch = useDispatch();

  function onClickHandler() {
    if (inputValue.trim()) {
      dispatch(fetchBooks({ inputValue, categoriesValue, sortingValue }));
    }
  }

  function changeSelectCategories(e) {
    setCategoriesValue(e.target.value);
  }

  function changeSelectSorting(e) {
    setSortingValue(e.target.value);
  }

  function handleKeyPress(e) {
    if(e.key === 'Enter') {
      onClickHandler()
    }
  }

  return (
    <header className="header" onKeyPress={handleKeyPress}>
      <h1 className="header__title">Search for books</h1>
      <input
        className="header__input"
        value={inputValue}
        onChange={(evt) => {
          setInputValue(evt.target.value);
        }}
        type="text"
      />
      <button className="header__search" onClick={onClickHandler}>
        Search
      </button>

      <div className="select-wrapper">
        <label htmlFor="categories" className="categories-label">
          {" "}
          Categories{" "}
        </label>
        <select
          className="header__select__categories"
          size="1"
          id="categories"
          value={categoriesValue}
          onChange={changeSelectCategories}
        >
          <option value="all">all</option>
          <option value="art">art</option>
          <option value="biography">biography</option>
          <option value="computers">computers</option>
          <option value="history">history</option>
          <option value="medical">medical</option>
          <option value="poetry">poetry</option>
        </select>

        <label htmlFor="sorting" className="sorting-label">
          {" "}
          Sorting{" "}
        </label>
        <select
          className="header__select__sorting"
          size="1"
          name=""
          id="sorting"
          value={sortingValue}
          onChange={changeSelectSorting}
        >
          <option value="relevance">relevance</option>
          <option value="newest">newest</option>
        </select>
      </div>
    </header>
  );
}
