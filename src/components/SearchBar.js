import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectSearchItem, setSearch } from '../redux/SearchStore';
import styles from './cryptolist.module.css';

function SearchBar() {
  const dispatch = useDispatch();
  const searchTerm = useSelector(selectSearchItem);
  const formChange = ({ target }) => {
    const { value } = target;
    dispatch(setSearch(value));
  };

  return (
    <div className={styles.Search}>
      <form>
        <input className={styles.Input} value={searchTerm} type="text" placeholder="Search Coin" onChange={formChange} />
      </form>
    </div>
  );
}

export default SearchBar;
