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
      <table className={styles.table}>
        <tr className={styles.row}>
          <td><img alt="mobutu" src={coinData[index].small} /></td>
          <td>{coinData[index].name}</td>
        </tr>
        <tr className={styles.row}>
          <td>Current Price</td>
          <td>{coinData[index].currentPrice}</td>
        </tr>
        <tr className={styles.row}>
          <td>Price Change in 24hrs</td>
          <td>{coinData[index].day}</td>
        </tr>
        <tr className={styles.row}>
          <td>Price Change in a Week</td>
          <td>{coinData[index].week}</td>
        </tr>
      </table>
    </div>
  );
}

export default Coin;
