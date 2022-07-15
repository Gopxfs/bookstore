import React from 'react';
import { useDispatch } from 'react-redux';
import { removeBookThunk } from '../redux/apiThunks';
import { removeBook } from '../redux/bookSlice';

const Book = (props) => {
  const bookProps = props;
  const { title, author, id } = bookProps;
  const dispatch = useDispatch();

  const removeButton = (id) => {
    dispatch(removeBook(id));
    dispatch(removeBookThunk(id));
  };

  return (
    <div className="book">
      <h2 className="title">{title}</h2>
      <p className="author">{author}</p>
      <button className="remove-button" type="button" onClick={() => removeButton(id)}>Remove</button>
    </div>
  );
};

export default Book;
