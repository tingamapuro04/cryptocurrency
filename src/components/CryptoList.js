import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getCryptoAsync, filteredCoins } from '../redux/crypto';
import Crypto from './Crypto';
import styles from './cryptolist.module.css';
import SearchBar from './SearchBar';

function CryptoList() {
  const dispatch = useDispatch();
  const data = useSelector(filteredCoins);
  useEffect(() => {
    dispatch(getCryptoAsync());
  }, [dispatch]);
  return (
    <div className={styles.cryptolist}>
      <SearchBar />
      <ul className={styles.unordered}>
        {data.map((item) => (
          <Crypto
            name={item.name}
            id={item.id}
            symbol={item.symbol}
            image={item.image}
            currentPrice={item.currentPrice}
            key={item.id}
          />
        ))}
      </ul>
    </div>
  );
}

export default CryptoList;
