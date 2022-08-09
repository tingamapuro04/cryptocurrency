import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const getCryptoAsync = createAsyncThunk(
  'crypto/getCryptoAsync',
  async () => {
    const response = await fetch(
      'https://api.coingecko.com/api/v3/coins',
    );
    const data = await response.json();
    const data1 = data.map((element) => ({
      id: element.id,
      name: element.name,
      image: element.image.large,
      currentPrice: element.market_data.current_price.usd,
      symbol: element.symbol,
    }));
    return data1;
  },
);

const cryptoSlice = createSlice({
  name: 'crypto',
  initialState: [],
  reducers: {
    addCrypto: (state) => {
      const new1 = { id: 1, name: 'tinga', currentPrice: 32 };
      return [...state, new1];
    },
    filterCrypto: (state, action) => {
      const newState = [...state];
      const ororo = newState.filter((item) => item.name.includes(action.payload));
      return ororo;
    },
  },
  extraReducers: {
    [getCryptoAsync.fulfilled]: (state, action) => action.payload,
  },
});

export const { filterCrypto } = cryptoSlice.actions;
export default cryptoSlice.reducer;
