import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favs: [
    {
      search: "How to play chess?",
      result: 10,
      sort: "relevance",
    },
  ],
};

export const favsSlice = createSlice({
  name: "favs",
  initialState,
  reducers: {
    addFav: (state, action) => {
      state.favs.push({
        search: action.payload.search,
        result: action.payload.result,
        sort: action.payload.sort,
      });
    },
    removeFav: (state, action) => {
      state.favs = state.favs.filter(
        (fav) => fav.search !== action.payload.search
      );
    },
    editFav: (state, action) => {
  const { prevSearch, newSearch, newResult, newSort } = action.payload;
  const existingFav = state.favs.find((fav) => fav.search === prevSearch);
  if (existingFav) {
    existingFav.search = newSearch;
    existingFav.result = newResult;
    existingFav.sort = newSort;
  } else {
    state.favs = state.favs.map((fav) => {
      return fav.search === action.payload.search
        ? { ...fav, search: newSearch, result: newResult, sort: newSort }
        : fav;
    });
  }
    }
  },
});

export const { addFav, removeFav, editFav } = favsSlice.actions;

export default favsSlice.reducer;  



