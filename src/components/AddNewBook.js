import React from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/bookSlice';
import { addBookThunk } from '../redux/apiThunks';

const AddNewBook = () => {
  const dispatch = useDispatch();

  const createNewBook = (e) => {
    e.preventDefault();
    const form = e.target;
    const newBook = {
      title: form.title.value,
      author: form.author.value,
      item_id: Date.now(),
      category: 'not informed',
    };
    dispatch(addBookThunk(newBook));
    dispatch(addBook(newBook));
    form.title.value = '';
    form.author.value = '';
  };

  return (
    <div className="addNewBook">
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
