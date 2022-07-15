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
      <div className="bookCard">
        <Book
          category={bookList[i].category}
          title={bookList[i].title}
          author={bookList[i].author}
          id={bookList[i].item_id}
        />
        <div className="progression">
          <div className="circle" />
          <div>
            <p className="percentage">0%</p>
            <p>Completed</p>
          </div>
        </div>
        <hr />
        <div className="chapters">
          <p>Current Chapter</p>
          <p className="currentChapter">Chapter 1</p>
          <button type="button">UPDATE PROGRESS</button>
        </div>
      </div>
    );
    bookListDisplay.push(newBook);
  }
  return (
    <>
      <div className="bookList">
        {bookListDisplay}
      </div>
    </>
  );
};

export default Books;
