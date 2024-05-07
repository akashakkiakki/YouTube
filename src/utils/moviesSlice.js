import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    popularMovies: null,
    relatedVideo: [],
  },
  reducers: {
    addPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
    addRelatedVideo: (state, action) => {
      state.relatedVideo = action.payload;
    },
  },
});

export const { addPopularMovies, addRelatedVideo } = moviesSlice.actions;

export default moviesSlice.reducer;
