import React from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/bookSlice';

const AddNewBook = () => {
  const dispatch = useDispatch();

  const createNewBook = (e) => {
    e.preventDefault();
    const form = e.target;
    const newBook = {
      title: form.title.value,
      author: form.author.value,
      id: Date.now(),
    };
    dispatch(addBook(newBook));
    form.title.value = '';
    form.author.value = '';
  };

  return (
    <div className="AddNewBook">
      <h2>ADD NEW BOOK</h2>
      <form onSubmit={(e) => { createNewBook(e); }}>
        <input type="text" name="title" placeholder="Book title" required />
        <input type="text" name="author" placeholder="Author" required />
        <button type="submit">ADD BOOK</button>
      </form>
    </div>
  );
};

export default AddNewBook;
