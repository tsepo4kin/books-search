import { combineReducers } from "redux";
import {ADD_MORE_BOOKS, SET_BOOKS, CHANGE_SEARCH_PARAMS, TOGGLE_SEARCH_LOADER, TOGGLE_PAGINATION_LOADER} from './types'

const booksReducer = (state = [], action) => {
  switch(action.type) {
    case SET_BOOKS :
      return [...action.payload.books]

    case ADD_MORE_BOOKS :
      return [...state, ...action.payload.books]

    default: 
      return state
  }
}

const searchReducer = (state = {}, action) => {
  switch(action.type) {
    case CHANGE_SEARCH_PARAMS :
      const { inputValue, categoriesValue, sortingValue } = action.payload.searchParams;
      return {...state, inputValue, categoriesValue, sortingValue};
    default: 
      return state
  }
}

const loaderReducer = (state = {searchLoader: false, paginationLoader: false}, action) => {
  switch(action.type) {
    case TOGGLE_SEARCH_LOADER:
      return {...state, searchLoader: !state.searchLoader}

    case TOGGLE_PAGINATION_LOADER:
      return {...state, paginationLoader: !state.paginationLoader}

    default: 
      return state
  }
}

export const rootReducer = combineReducers({
  books: booksReducer,
  searchParams: searchReducer,
  loading: loaderReducer
});