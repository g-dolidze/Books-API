import { SAVE_BOOKS, UPDATE_FAVOURITES } from "./actions";
import { ACTIONS } from "./actionTypes";

const defaultState: GlobalState = {
  books: [],
  favouriteBooks: [],
};

const reducer = (state = defaultState, action: ACTIONS) => {
  switch (action.type) {
    case SAVE_BOOKS:
      return { ...state, books: action.books };

    case UPDATE_FAVOURITES:
      const isFound = state.favouriteBooks.find(
        (book) => book.id === action.book.id
      );
      if (isFound) {
        const newFavourites = state.favouriteBooks.filter(
          (book) => book.id !== action.book.id
        );

        return { ...state, favouriteBooks: newFavourites };
      }

      return {
        ...state,
        favouriteBooks: [...state.favouriteBooks, action.book],
      };

    default:
      return state;
  }
};

export default reducer;
