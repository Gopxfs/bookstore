const baseURL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/8jPJscW2sY5rPxOZDiOs/books';

// add
// remove
// get

export const addBook = async (book) => {
  book.category = book.category ?? 'Fiction';
  await fetch(baseURL, {
    method: 'POST',
    body: { book },
  });
};

export const removeBook = async () => {

};

export const getBookList = async () => {
  const response = await fetch(baseURL);
  const data = await response.json();
  console.log(data);
};

export default addBook();
