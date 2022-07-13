import { useSelector } from 'react-redux';

const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';

const initialState = {
  books: [
    {
      title: 'book1',
      author: 'author1',
    },
    {
      title: 'book2',
      author: 'author2',
    },
    {
      title: 'book3',
      author: 'author3',
    },
    {
      title: 'book4',
      author: 'author4',
    },
  ],
};

export default function booksReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_BOOK: {
      return [
        ...state,
        action.book,
      ];
    }
    case REMOVE_BOOK: {
      return [
        ...state.slice(0, action.index),
        ...state.slice(action.index + 1, state.length),
      ];
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

export function removeBook(index) {
  return {
    type: REMOVE_BOOK,
    index,
  };
}

export function useBooks() {
  return useSelector(() => initialState.books);
}
