import React from 'react';
import styles from './cryptolist.module.css';
import head from '../img/Trade.jpeg';

function Head() {
  return (
    <div className={styles.headdiv}>
      <img alt="Head pic" className={styles.Headimage} src={head} />
    </div>
  );
}

export default Head;
