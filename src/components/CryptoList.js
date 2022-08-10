import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
// import { BsFillArrowRightCircleFill } from 'react-icons/bs';
import { getCryptoAsync, filteredCoins } from '../redux/crypto';
import Crypto from './Crypto';
import styles from './cryptolist.module.css';
import SearchBar from './SearchBar';
import Head from './Head';

function CryptoList() {
  const dispatch = useDispatch();
  const data = useSelector(filteredCoins);
  useEffect(() => {
    dispatch(getCryptoAsync());
  }, [dispatch]);
  return (
    <div className={styles.cryptolist}>
      <Head />
      <SearchBar />
      <ul className={styles.unordered}>
        {data.map((item) => (
          <Link
            to={`/coin/${item.id}`}
            key={item.id}
          >
            <Crypto
              name={item.name}
              id={item.id}
              symbol={item.symbol}
              image={item.image}
              currentPrice={item.currentPrice}
              key={item.id}
            />
            {/* <div className={styles.solo}>
              <div className={styles.top}>
                <p className={styles.name}>{item.name}</p>
                <BsFillArrowRightCircleFill className={styles.btn} />
              </div>
              <img className={styles.img} alt="crypto_img" src={item.image} />
              <div className={styles.bottom}>
                <p>{item.symbol}</p>
                <p>
                  $
                  {item.currentPrice}
                  {' '}
                </p>
              </div>
            </div> */}
          </Link>
        ))}
      </ul>
    </div>
  );
}

export default CryptoList;
