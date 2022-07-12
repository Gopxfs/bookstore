const ADD_BOOK = 'ADD_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';

export default reducer = (state = [], action) => {
  switch(action) {
    case ADD_BOOK: {
      return {
        ADD_BOOK: true
      }
    }
    case REMOVE_BOOK: {
      return {
        REMOVE_BOOK: true
      }
    }
    default: return state;
  }
}

export const addBook = () => {
  return { type: ADD_BOOK }
};

export const removeBook = () => {
  return { type: REMOVE_BOOK }
};