import {ADD_MORE_BOOKS, SET_BOOKS, CHANGE_SEARCH_PARAMS, TOGGLE_SEARCH_LOADER, TOGGLE_PAGINATION_LOADER} from './types'


export const setBooks = (books) => ({
  type: SET_BOOKS,
  payload: {
    books
  }
})

export const addMoreBooks = (books) => ({
  type: ADD_MORE_BOOKS,
  payload: {
    books
  }
})

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
