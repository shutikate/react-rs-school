import { v4 as uuid } from 'uuid';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { ErrorField } from '../ErrorField/ErrorField';
import { Button } from '../Button/Button';
import { Select } from '../Select/Select';
import { Input } from '../Input/Input';
import { optionsForSelect, radioData } from './optionsData';
import { Event } from '../../types';
import { validation } from './validationRules';
import style from './Form.module.scss';

type Props = {
  addCard: (card: Event) => void;
};

export const Form = (props: Props) => {
  const [successMessage, setSuccessMessage] = useState(false);
  const [disabledPrice, setDisabledPrice] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    resetField,
    formState: { errors },
    watch,
  } = useForm<Event>({
    reValidateMode: 'onSubmit',
  });

  const paymentValue = watch('payment');
  const minPrice = watch('minPrice');

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
    console.log(data.photo);
    const photoURL = data.photo ? URL.createObjectURL(data.photo[0]) : '';
    setSuccessMessage(true);
    setTimeout(() => setSuccessMessage(false), 2000);
    props.addCard({ ...data, id: uuid(), photoURL: photoURL });
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
              validate: validation.categoryRules,
            })}
          />
          <ErrorField error={errors.category?.message} />
          <Input
            label={'Event name:'}
            type={'text'}
            {...register('name', {
              validate: validation.eventRules,
            })}
          />
          <ErrorField error={errors.name?.message} />
          <Input
            label={'Date:'}
            type={'date'}
            {...register('date', {
              validate: validation.dateRules,
            })}
          />
          <ErrorField error={errors.date?.message} />
          <Input
            label={'Time:'}
            type={'time'}
            {...register('time', {
              validate: validation.timeRules,
            })}
          />
          <ErrorField error={errors.time?.message} />
          <Input
            label={'Address:'}
            type={'text'}
            {...register('address', {
              validate: validation.addressRules,
            })}
          />
          <ErrorField error={errors.address?.message} />
          <Input
            label={'Phone:'}
            type={'text'}
            {...register('contact', {
              validate: validation.phoneRules,
            })}
          />
          <ErrorField error={errors.contact?.message} />
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
                  validate: validation.paymentRules,
                })}
              />
            ))}
            <ErrorField error={errors.payment?.message} />
          </div>
          <Input
            label={'Minimum price:'}
            type={'number'}
            min={'1'}
            disabled={disabledPrice}
            {...register('minPrice', {
              validate: paymentValue !== 'Free' ? validation.priceRules : {},
            })}
          />
          <ErrorField error={errors.minPrice?.message} />
          <Input
            label={'Maximum price:'}
            type={'number'}
            min={'1'}
            disabled={disabledPrice}
            {...register('maxPrice', {
              validate:
                paymentValue !== 'Free'
                  ? {
                      ...validation.priceRules,
                      comparison: (value) =>
                        (value && Number(value) > Number(minPrice)) ||
                        'The minimum amount is greater than the maximum',
                    }
                  : {},
            })}
          />
          <ErrorField error={errors.maxPrice?.message} />
          <Input
            label={'Photo:'}
            type={'file'}
            {...register('photo', {
              validate: validation.photoRules,
            })}
          />
          <ErrorField error={errors.photo?.message} />
          <Input
            label={'I agree with the rules of the site'}
            type={'checkbox'}
            {...register('checkBox', {
              validate: validation.agreementRules,
            })}
          />
          <ErrorField error={errors.checkBox?.message} />
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
