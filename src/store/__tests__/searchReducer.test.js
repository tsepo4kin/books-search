import { searchReducer } from "../searchReducer"; 
import { changeSearchParams } from "../actions"

describe('testing search reducer', () => {
  it('shoud change search params', () => {
    const newSearchParams = {inputValue: 'testValue', categoriesValue: 'testCategories', sortingValue: 'testSorting'}
    const changeSearchParamsAction = changeSearchParams(newSearchParams);

    const state = {};

    const newState = searchReducer(state, changeSearchParamsAction);

    expect(newState).toEqual(newSearchParams)
  })
})