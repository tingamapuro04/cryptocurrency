import React from 'react';
import styles from './cryptolist.module.css';

function SearchBar() {
  const formChange = () => {
  };

  return (
    <div className={styles.Search}>
      <form>
        <input type="text" placeholder="Search" onChange={formChange} />
      </form>
    </div>
  );
}

export default SearchBar;
