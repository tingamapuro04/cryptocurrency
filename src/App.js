import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getCryptoAsync } from './redux/crypto';
import './App.css';
import CryptoList from './components/CryptoList';
import Head from './components/Head';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCryptoAsync());
  }, [dispatch]);

  return (
    <div className="App">
      <Head />
      <CryptoList />
    </div>
  );
}

export default App;
