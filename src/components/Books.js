import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBookListThunk } from '../redux/apiThunks';
import Book from './Book';

const Books = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBookListThunk());
  }, []);

  const bookList = useSelector((state) => state.book.books);
  const bookListDisplay = [];
  for (let i = 0; i < bookList.length; i += 1) {
    const newBook = (
      <Book
        title={bookList[i].title}
        author={bookList[i].author}
        id={bookList[i].id}
      />
    );
    bookListDisplay.push(newBook);
  }
  return (
    <>
      <h1>Books</h1>
      <div>
        {bookListDisplay}
      </div>
    </>
  );
};

export default Books;
