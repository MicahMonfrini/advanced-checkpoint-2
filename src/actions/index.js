export const BOOKS_LOADED = "BOOKS_LOADED";

export function loadBooks() {
  return function (dispatch) {
    fetch("/api/books")
      .then(response => {
        return response.json();
      })
      .then(books => {
        dispatch(booksLoaded(books));
      });
  };
}
function booksLoaded(books) {
  return {
    type: BOOKS_LOADED,
    value: books
  };
}

export function createBook(book) {
  return function (dispatch) {
    fetch("/api/books", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(book)
    })
      .then(() => dispatch(loadBooks()));
  };
}
