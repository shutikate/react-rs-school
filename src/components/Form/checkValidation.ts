import { Event, Errors } from '../../types';

export const checkValidation = (values: Event, errors: Errors) => {
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

  errors.contact = !values.contact
    ? 'Contact phone is required'
    : values.contact && !/^[0-9+]+$/.test(values.contact)
    ? ' Only numbers allowed'
    : values.contact && values.contact.length < 9
    ? 'Phone number must contain at least 9 digits'
    : values.contact && values.contact[0] !== '+'
    ? 'Phone number must start with +'
    : '';

  errors.agree = !values.checkBox ? 'Please, check this' : '';

  errors.payment = !values.payment ? 'Please, check one of this' : '';

  errors.photo = values.photo.length === 0 ? 'Select file to upload' : '';

  errors.price =
    values.payment === 'Free' && (Number(values.minPrice) !== 0 || Number(values.maxPrice) !== 0)
      ? 'Your event is free, please leave these fields blank'
      : (values.minPrice && Number(values.minPrice) <= 0) ||
        (values.minPrice && Number(values.maxPrice) <= 0)
      ? 'Please enter an amount greater than zero'
      : values.payment === 'Pay online' && (!values.minPrice || !values.maxPrice)
      ? 'Please enter the min and max amount'
      : Number(values.minPrice) > Number(values.maxPrice)
      ? 'The minimum amount is greater than the maximum'
      : values.payment !== 'Free' && (!values.minPrice || !values.maxPrice)
      ? 'Please enter the min and max amount'
      : '';

  errors.category = values.category === 'Check category' ? 'Please, check category' : '';

  return errors;
};
