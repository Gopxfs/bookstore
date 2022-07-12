const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';

const initialState = {
  books: [],
};

export default function booksReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_BOOK: {
      return state.books.push(action.book);
    }
    case REMOVE_BOOK: {
      return state.books.filter((book) => book.id !== action.id);
    }
    default: return state;
  }
}

export function addBook(book) {
  return {
    type: ADD_BOOK,
    book,
  };
}

export function removeBook(id) {
  return {
    type: REMOVE_BOOK,
    id,
  };
}
