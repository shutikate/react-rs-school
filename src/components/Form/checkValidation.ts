import { Errors } from './Form';

interface Values {
  select: string | undefined;
  name: string | undefined;
  date: string | undefined;
  time: string | undefined;
  address: string | undefined;
  minimumPrice: string | undefined;
  maximumPrice: string | undefined;
  photo: string;
  checkBox: boolean | undefined;
  payMethod: string | null | undefined;
}

export const checkValidation = (values: Values, errors: Errors) => {
  // const { values, errors } = { ...props };
  errors.nameEvent = !values.name
    ? 'Name of event is required'
    : values.name && !/^[А-ЯЁA-Z]+$/.test(values.name[0])
    ? 'Name of event must start with a capital letter'
    : '';
  errors.date = !values.date
    ? 'Date of event is required'
    : values.date && Date.parse(values.date) < Date.now()
    ? 'Enter a date no older than today'
    : '';
  errors.time = !values.time ? 'Time of event is required' : '';
  errors.address = !values.address ? 'Address of event is required' : '';
  errors.agree = !values.checkBox ? 'Please, check this' : '';
  errors.payMethod = !values.payMethod ? 'Please, check one of this' : '';
  errors.photo = values.photo.length === 0 ? 'Select file to upload' : '';
  errors.price =
    values.payMethod === 'Free' &&
    (Number(values.minimumPrice) !== 0 || Number(values.maximumPrice) !== 0)
      ? 'Your event is free, please leave these fields blank'
      : (values.minimumPrice && Number(values.minimumPrice) <= 0) ||
        (values.minimumPrice && Number(values.maximumPrice) <= 0)
      ? 'Please enter an amount greater than zero'
      : values.payMethod === 'Pay online' && (!values.minimumPrice || !values.maximumPrice)
      ? 'Please enter the min and max amount'
      : Number(values.minimumPrice) > Number(values.maximumPrice)
      ? 'The minimum amount is greater than the maximum'
      : '';
  return errors;
};
