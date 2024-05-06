import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import searchSlice from "./searchSlice";
import moviesSlice from "./moviesSlice";

const store = configureStore({
  reducer: {
    app: appSlice,
    search: searchSlice,
    movies: moviesSlice,
  },
});

export default store;
