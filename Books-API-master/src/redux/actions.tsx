import ajax from "../axios/axiosAPI";
import { SAVE_BOOKS_ACTION, UPDATE_FAVOURITES_ACTION } from "./actionTypes";

export const SAVE_BOOKS = "SAVE_BOOKS";
export const UPDATE_FAVOURITES = "UPDATE_FAVOURITES";

export const saveBooks = (books: BookItem[]): SAVE_BOOKS_ACTION => ({
  type: SAVE_BOOKS,
  books,
});
export const updateFavourites = (book: BookItem): UPDATE_FAVOURITES_ACTION => ({
  type: UPDATE_FAVOURITES,
  book,
});

export const loadAllBooks = () => {
  return async (dispatch: Function) => {
    try {
      const booksPromise = ajax.get("");
      const data = await booksPromise;
      console.log(data);
      dispatch(saveBooks(data.data.items));
    } catch (er) {
      console.log(er);
    }
  };
};
