import React from 'react';
import { useSelector } from 'react-redux';
import Book from './Book';

const Books = () => {
  const bookList = useSelector((state) => state.book.books);
  const bookListDisplay = [];
  for (let i = 0; i < bookList.length; i += 1) {
    const newBook = <Book title={bookList[i].title} author={bookList[i].author} />;
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
