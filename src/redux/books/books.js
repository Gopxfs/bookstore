const ADD_BOOK = 'ADD_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';

const initialState = {
  books: [],
};

export default function booksReducer(state = initialState, action) {
  switch (action) {
    case ADD_BOOK: {
      return {
        ADD_BOOK: true,
      };
    }
    case REMOVE_BOOK: {
      return {
        REMOVE_BOOK: true,
      };
    }
    default: return state;
  }
}

export function addBook() { return { type: ADD_BOOK }; }

export function removeBook() { return { type: REMOVE_BOOK }; }
