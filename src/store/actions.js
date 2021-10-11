import {ADD_MORE_BOOKS, SET_BOOKS, CHANGE_SEARCH_PARAMS, TOGGLE_SEARCH_LOADER, TOGGLE_PAGINATION_LOADER, SET_BOOKS_COUNT} from './types'


export const setBooks = (books) => ({
  type: SET_BOOKS,
  payload: {
    books
  }
})

export const setFoundBooks = (booksCount) => ({
  type: SET_BOOKS_COUNT,
  payload: {
    booksCount
  }
})

export const fetchBooks = (searchParams) => {
  return function(dispatch) {
    dispatch(toggleSearchLoader());
    dispatch(changeSearchParams(searchParams))
      fetch(
        `https://www.googleapis.com/books/v1/volumes?q="${searchParams.inputValue}"&maxResults=30&orderBy=${searchParams.sortingValue}&subject=${searchParams.categoriesValue}&printType=books&key=AIzaSyDqSD1ikizFCnZNTB4eEtf_udpdHc_ZpDs`
      )
        .then((r) => r.json())
        .then((r) => {
          dispatch(setFoundBooks(r.totalItems));
          dispatch(setBooks(r.items));
          dispatch(toggleSearchLoader());
        });
  }
}

export const addMoreBooks = (books) => ({
  type: ADD_MORE_BOOKS,
  payload: {
    books
  }
})

export const fetchMoreBooks = (length, searchParams) => {
  return function(dispatch) {
    dispatch(togglePaginationLoader());
    fetch(
      `https://www.googleapis.com/books/v1/volumes?q="${searchParams.inputValue}"&startIndex=${length}&maxResults=30&orderBy=${searchParams.sortingValue}&subject=${searchParams.categoriesValue}&printType=books&key=AIzaSyDqSD1ikizFCnZNTB4eEtf_udpdHc_ZpDs`
    )
      .then((r) => r.json())
      .then((r) => {
        dispatch(addMoreBooks(r.items));
        dispatch(togglePaginationLoader());
      });
  }
}

export const changeSearchParams = (searchParams) => ({
  type: CHANGE_SEARCH_PARAMS,
  payload: {
    searchParams
  }
})

export const toggleSearchLoader = () => ({
  type: TOGGLE_SEARCH_LOADER
})

export const togglePaginationLoader = () => ({
  type: TOGGLE_PAGINATION_LOADER
})
