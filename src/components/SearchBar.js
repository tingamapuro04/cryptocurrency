import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { filterCrypto } from '../redux/crypto';
import styles from './cryptolist.module.css';

function SearchBar() {
  const dispatch = useDispatch();
  const [value, setValue] = useState({
    name: '',
  });
  const formChange = (e) => {
    dispatch(filterCrypto(value.name));
    setValue({ ...value, name: e.target.value });
  };

  return (
    <div className={styles.Search}>
      <form>
        <input value={value.name} type="text" placeholder="Search" onChange={formChange} />
      </form>
    </div>
  );
}

export default SearchBar;
