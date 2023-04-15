import { useForm } from 'react-hook-form';
import { useAppSelector, useAppDispatch } from '../../hooks/redux';
import { Button } from '../Button/Button';
import { changeValue } from '../../store/slices/searchSlice';
import style from './SearchBar.module.scss';

interface Search {
  searchValue: string;
}

export const SearchBar = () => {
  const searchValue = useAppSelector((state) => state.searchValueReducer.searchValue);
  const dispatch = useAppDispatch();
  const { register, handleSubmit } = useForm<Search>();

  const onSubmit = (data: Search) => {
    dispatch(changeValue(data.searchValue));
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
