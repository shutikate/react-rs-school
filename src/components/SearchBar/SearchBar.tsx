import style from './SearchBar.module.scss';
import { Button } from '../Button/Button';
import { useEffect, useRef, useState } from 'react';

export const SearchBar = () => {
  const [searchValue, setSearchValue] = useState(localStorage.getItem('sk-search-value') || '');

  const searchRef = useRef(searchValue);

  useEffect(() => {
    searchRef.current = searchValue;
  }, [searchValue]);

  const handleBeforeUnload = () => {
    localStorage.setItem('sk-search-value', searchRef.current);
  };

  useEffect(() => {
    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => {
      localStorage.setItem('sk-search-value', searchRef.current);
    };
  }, []);

  const changeInputValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  return (
    <div className={style.container}>
      <input
        aria-label="search"
        type="text"
        placeholder="Search"
        className={style.input}
        value={searchValue}
        onChange={changeInputValue}
      ></input>
      <Button type={'button'} text={'Search'} />
    </div>
  );
};
