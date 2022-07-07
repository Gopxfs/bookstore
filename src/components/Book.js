import React from 'react';

const Book = (props) => {
  const [title, author] = props;
  return (
    <div className="book">
      <h2>{title}</h2>
      <p>{author}</p>
      <button type="button">Remove</button>
    </div>
  );
};

export default Book;
