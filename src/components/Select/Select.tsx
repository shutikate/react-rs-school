import { forwardRef } from 'react';
import style from './Select.module.scss';

interface Option {
  label: string;
  value: string;
}

interface SelectProps {
  label: string;
  options: Array<Option>;
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>((SelectProps, ref) => {
  const { label, options, ...rest } = SelectProps;
  return (
    <label>
      {label}
      <select ref={ref} className={style.select} {...rest}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </label>
  );
});
