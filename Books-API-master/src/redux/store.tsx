import { configureStore } from "@reduxjs/toolkit";

import thunk from "redux-thunk";
import reducer from "./reducer";

const store = configureStore({
  reducer,
  middleware: [thunk],
  devTools: import.meta.env.NODE_ENV !== "production",
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;
