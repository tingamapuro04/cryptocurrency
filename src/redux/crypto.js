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
      image: element.image.small,
      currentPrice: element.market_data.current_price,
    }));
    return data1;
  },
);

const cryptoSlice = createSlice({
  name: 'crypto',
  initialstate: [],
  extraReducers: {
    [getCryptoAsync.fulfilled]: (state, action) => action.payload,
  },
});

export default cryptoSlice.reducer;
