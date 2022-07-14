const baseURL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/8jPJscW2sY5rPxOZDiOs/books';

export const addBookToAPI = async (book) => {
  await fetch(baseURL, {
    method: 'POST',
    body: JSON.stringify(book),
    headers: {
      'Content-type': 'application/json',
    },
  });
};

export const removeBookFromAPI = async (book) => {
  await fetch(`${baseURL}/${book.item_id}`, {
    method: 'DELETE',
    body: { book },
  });
};

export const getBookListFromAPI = async () => {
  const response = await fetch(baseURL);
  const data = await response.json();
  console.log(data);
};
