import { configureStore } from '@reduxjs/toolkit';
import cryptoReducer from './crypto';

const store = configureStore({
  reducer: {
    cryptoData: cryptoReducer,
  },
});

export default store;
