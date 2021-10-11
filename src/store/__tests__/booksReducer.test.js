import { booksReducer } from "../booksReducer";
import { setBooks, setFoundBooks, addMoreBooks } from "../actions";

describe("testing booksReducer", () => {
  it("books shoud be set", () => {
    const books = [{}, {}, {}];
    const setBooksAction = setBooks(books);

    const state = {
      booksItems: [{}, {}, {}, {}, {}],
      booksCount: 25,
    };

    const newState = booksReducer(state, setBooksAction);

    expect(newState.booksItems).toEqual(books);
  });

  it("set books count", () => {
    const booksCount = 123;
    const setFoundBooksAction = setFoundBooks(booksCount);

    const state = {
      booksItems: [{}, {}, {}, {}, {}],
      booksCount: 5,
    };

    const newState = booksReducer(state, setFoundBooksAction)

    expect(newState.booksCount).toBe(booksCount)
  })

  it('add more books', () => {
    const books = [{}, {}, {}, {}, {}];
    const addMoreBooksAction = addMoreBooks(books);

    const state = {
      booksItems: [{}, {}, {}, {}, {}],
      booksCount: 25,
    };

    const newState = booksReducer(state, addMoreBooksAction)

    expect(newState.booksItems).toEqual(state.booksItems.concat(books))
  })
});
