import React, { useState } from 'react';
import { PropTypes } from 'prop-types';
import css from './SearchBar.module.css';
import { FcSearch } from 'react-icons/fc';
import { useSearchParams } from 'react-router-dom';

const SearchBar = ({ onSubmit }) => {
  const [value, setValue] = useState('');
  const [, setSeacrhParams] = useSearchParams();

  const handleSubmit = event => {
    event.preventDefault();
    if (value.trim() === '') {
      return alert('Please enter a request!');
    }
    onSubmit(value);
    setSeacrhParams(value !== '' ? { query: value } : {});
  };

  const handleValueChange = event => {
    setValue(event.target.value.toLowerCase());
  };

  return (
    <>
      <div className={css.searchbar}>
        <form className={css.searchForm} onSubmit={handleSubmit}>
          <button type="submit" className={css.searchForm__button}>
            <FcSearch size="32px" />
          </button>

          <input
            className={css.searchForm__input}
            type="text"
            name="query"
            placeholder="Search movies"
            value={value}
            onChange={handleValueChange}
          />
        </form>
      </div>
    </>
  );
};

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default SearchBar;
