import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { filterCrypto, getCryptoAsync } from '../redux/crypto';
import styles from './cryptolist.module.css';

function SearchBar() {
  const dispatch = useDispatch();
  const [value, setValue] = useState({
    name: '',
  });
  const formChange = (e) => {
    setValue({ ...value, name: e.target.value });
    dispatch(filterCrypto(value.name));
  };

  useEffect(() => {
    dispatch(getCryptoAsync());
  }, [dispatch]);

  return (
    <div className={styles.Search}>
      <form>
        <input value={value.name} type="text" placeholder="Search" onChange={formChange} />
      </form>
    </div>
  );
}

export default SearchBar;
