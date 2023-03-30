import { v4 as uuid } from 'uuid';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import { Button } from '../Button/Button';
import { Select } from '../Select/Select';
import { Input } from '../Input/Input';
import { optionsForSelect, radioData } from './optionsData';
import { Event } from '../../types';
import {
  categoryRules,
  eventRules,
  dateRules,
  timeRules,
  addressRules,
  phoneRules,
  paymentRules,
  priceRules,
  photoRules,
  agreementRules,
} from './validationRules';
import style from './Form.module.scss';

type Props = {
  addCard: (card: Event) => void;
};

export const Form = (props: Props) => {
  const [successMessage, setSuccessMessage] = useState(false);
  const [disabledPrice, setDisabledPrice] = useState(false);

  //     photo:
  //       this.photoRef.current?.files && this.photoRef.current?.files.length !== 0
  //         ? URL.createObjectURL(this.photoRef.current.files[0])
  //         : '',
  const {
    register,
    handleSubmit,
    reset,
    resetField,
    formState: { errors },
    watch,
  } = useForm<Event>({ defaultValues: { photo: '' } });

  const paymentValue = watch('payment');

  useEffect(() => {
    if (paymentValue === 'Free') {
      setDisabledPrice(true);
      resetField('minPrice');
      resetField('maxPrice');
    } else {
      setDisabledPrice(false);
    }
  }, [paymentValue, resetField]);

  const onSubmit = (data: Event) => {
    setSuccessMessage(true);
    setTimeout(() => setSuccessMessage(false), 2000);
    props.addCard({ ...data, id: uuid() });
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={style.form}>
      <div className={style.wrapper}>
        <div className={style.wrapperColumn}>
          <Select
            label={'Event category'}
            options={optionsForSelect}
            {...register('category', {
              validate: categoryRules,
            })}
          />
          <ErrorMessage errors={errors} name="category" />
          <Input
            label={'Event name:'}
            type={'text'}
            {...register('name', {
              validate: eventRules,
            })}
          />
          <ErrorMessage errors={errors} name="name" />
          <Input
            label={'Date:'}
            type={'date'}
            {...register('date', {
              validate: dateRules,
            })}
          />
          <ErrorMessage errors={errors} name="date" />
          <Input
            label={'Time:'}
            type={'time'}
            {...register('time', {
              validate: timeRules,
            })}
          />
          <ErrorMessage errors={errors} name="time" />
          <Input
            label={'Address:'}
            type={'text'}
            {...register('address', {
              validate: addressRules,
            })}
          />
          <ErrorMessage errors={errors} name="address" />
          <Input
            label={'Phone:'}
            type={'text'}
            {...register('contact', {
              validate: phoneRules,
            })}
          />
          <ErrorMessage errors={errors} name="contact" />
        </div>
        <div className={style.wrapperColumn}>
          <div>
            {radioData.map((radio) => (
              <Input
                key={radio.value}
                type={'radio'}
                label={radio.label}
                value={radio.value}
                {...register('payment', {
                  validate: paymentRules,
                })}
              />
            ))}
            <ErrorMessage errors={errors} name="payment" />
          </div>
          <Input
            label={'Minimum price:'}
            type={'number'}
            min={'1'}
            disabled={disabledPrice}
            {...register('minPrice', {
              validate: paymentValue !== 'Free' ? priceRules : {},
            })}
          />
          <ErrorMessage errors={errors} name="minPrice" />
          <Input
            label={'Maximum price:'}
            type={'number'}
            min={'1'}
            disabled={disabledPrice}
            {...register('maxPrice', {
              validate: paymentValue !== 'Free' ? priceRules : {},
            })}
          />
          <ErrorMessage errors={errors} name="maxPrice" />
          <Input
            label={'Photo:'}
            type={'file'}
            {...register('photo', {
              validate: photoRules,
            })}
          />
          <ErrorMessage errors={errors} name="photo" />
          <Input
            label={'I agree with the rules of the site'}
            type={'checkbox'}
            {...register('checkBox', {
              validate: agreementRules,
            })}
          />
          <ErrorMessage errors={errors} name="checkBox" />
        </div>
      </div>
      {successMessage ? (
        <div className={style.message}>Card created successfully</div>
      ) : (
        <Button type={'submit'} text="Create card" />
      )}
    </form>
  );
};
