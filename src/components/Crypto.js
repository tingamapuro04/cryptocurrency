import React from 'react';
import PropTypes from 'prop-types';
import { BsFillArrowRightCircleFill } from 'react-icons/bs';
import styles from './cryptolist.module.css';

function Crypto({
  name, image, symbol, currentPrice,
}) {
  return (
    <li className={styles.listItem}>
      <div className={styles.top}>
        <p className={styles.name}>{name.slice(0, 10)}</p>
        <BsFillArrowRightCircleFill className={styles.btn} />
      </div>
      <img className={styles.img} alt="crypto_img" src={image} />
      <div className={styles.bottom}>
        <p>{symbol}</p>
        <p>
          $
          {Math.round(currentPrice)}
          {' '}
        </p>
      </div>
    </li>
  );
}

Crypto.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  symbol: PropTypes.string.isRequired,
  currentPrice: PropTypes.number.isRequired,
};

export default Crypto;
