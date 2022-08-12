import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { BsFillArrowLeftCircleFill } from 'react-icons/bs';
import { getCryptoAsync, selectedStockData } from '../redux/crypto';
import styles from './cryptolist.module.css';

function Coin() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCryptoAsync());
  }, [dispatch]);
  const { id } = useParams();
  const coinData = useSelector(selectedStockData);
  const index = coinData.findIndex((item) => item.id === id);
  return (
    <div className={styles.Coin}>
      <Link to="/">
        <button className={styles.Go} type="button">
          <BsFillArrowLeftCircleFill />
          {' '}
        </button>
      </Link>
      <div className={styles.table}>
        <div className={styles.row1}>
          <img alt="mobutu" src={coinData[index].small} />
          <p>{coinData[index].name}</p>
        </div>
        <div className={styles.row2}>
          <p>Current Price</p>
          <p>{coinData[index].currentPrice}</p>
        </div>
        <div className={styles.row1}>
          <p>Price Change in 24hrs</p>
          <p>{Math.trunc(coinData[index].day)}</p>
        </div>
        <div className={styles.row2}>
          <p>Price Change in a Week</p>
          <p>{coinData[index].week.toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
}

export default Coin;
