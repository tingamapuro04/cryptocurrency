import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { selectSearchItem } from './SearchStore';

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
      day: element.market_data.price_change_24h,
      week: element.market_data.price_change_percentage_24h,
      small: element.image.small,
    }));
    return data1;
  },
);

const cryptoSlice = createSlice({
  name: 'crypto',
  initialState: [],
  reducers: {},
  extraReducers: {
    [getCryptoAsync.fulfilled]: (state, action) => action.payload,
  },
});

export const selectedStockData = (state) => state.cryptoData;
export const filteredCoins = (state) => {
  const allCoins = selectedStockData(state);
  const searchTerm = selectSearchItem(state);
  return allCoins.filter((coin) => coin.name.toLowerCase().includes(searchTerm.toLowerCase()));
};

export default cryptoSlice.reducer;
