import React from 'react';
import { useSelector } from 'react-redux';
import Crypto from './Crypto';
import styles from './cryptolist.module.css';

function CryptoList() {
  const data = useSelector((state) => state.cryptoData);
  return (
    <div className={styles.cryptolist}>
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
