import React from 'react';

const AddNewBook = () => (
  <div className="AddNewBook">
    <h2>ADD NEW BOOK</h2>
    <form>
      <input type="text" placeholder="Book title" />
      <input type="text" placeholder="Author" />
      <button type="submit">ADD BOOK</button>
    </form>
  </div>
);

export default AddNewBook;
