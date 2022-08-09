import { createSlice } from '@reduxjs/toolkit';

const searchSlice = createSlice({
  name: 'Search',
  initialState: '',
  reducers: {
    setSearch: (state, action) => action.payload,
  },
});

export const { setSearch } = searchSlice.actions;
export const selectSearchItem = (state) => state.search;
export default searchSlice.reducer;
