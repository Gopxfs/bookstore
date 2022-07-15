import React from 'react';
import { useDispatch } from 'react-redux';
import { removeBookThunk } from '../redux/apiThunks';
import { removeBook } from '../redux/bookSlice';

const Book = (props) => {
  const bookProps = props;
  const {
    title, author, id, category,
  } = bookProps;
  const dispatch = useDispatch();

  const removeButton = (id) => {
    dispatch(removeBook(id));
    dispatch(removeBookThunk(id));
  };

  return (
    <div className="book">
      <div className="bookDetails">
        <div className="bookInfo">
          <p className="category">{category}</p>
          <h2>{title}</h2>
          <p className="author">{author}</p>
        </div>
        <div className="bookActions">
          <button type="button" onClick={() => removeButton(id)}>Remove</button>
        </div>
      </div>
    </div>
  );
};

export default Book;
