import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getCryptoAsync } from './redux/crypto';
import './App.css';
import CryptoList from './components/CryptoList';
import SearchBar from './components/SearchBar';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCryptoAsync());
  }, [dispatch]);

  return (
    <div className="App">
      <SearchBar />
      <CryptoList />
    </div>
  );
}

export default App;
