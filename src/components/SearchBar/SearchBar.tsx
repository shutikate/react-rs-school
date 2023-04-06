import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '../Button/Button';
import style from './SearchBar.module.scss';

type Props = {
  updateCards: (value: string) => void;
};

interface Search {
  searchValue: string;
}

export const SearchBar = ({ updateCards }: Props) => {
  const [searchValue, setSearchValue] = useState(localStorage.getItem('sk-search-value') || '');
  const { register, handleSubmit } = useForm<Search>();

  const onSubmit = (data: Search) => {
    localStorage.setItem('sk-search-value', data.searchValue);
    setSearchValue(data.searchValue);
    updateCards(data.searchValue);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={style.container}>
      <input
        aria-label="search"
        type="text"
        {...register('searchValue')}
        defaultValue={searchValue}
        className={style.input}
      ></input>
      <Button type={'submit'} text={'Search'} />
    </form>
  );
};
