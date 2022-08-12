import { configureStore } from '@reduxjs/toolkit';
import cryptoReducer from './crypto';
import searchReducer from './SearchStore';

const store = configureStore({
  reducer: {
    cryptoData: cryptoReducer,
    search: searchReducer,
  },
});

export default store;
