//   errors.price =
//     values.payment === 'Free' && (Number(values.minPrice) !== 0 || Number(values.maxPrice) !== 0)
//       ? 'Your event is free, please leave these fields blank'
//       : (values.minPrice && Number(values.minPrice) <= 0) ||
//         (values.minPrice && Number(values.maxPrice) <= 0)
//       ? 'Please enter an amount greater than zero'
//       : values.payment === 'Pay online' && (!values.minPrice || !values.maxPrice)
//       ? 'Please enter the min and max amount'
//       : Number(values.minPrice) > Number(values.maxPrice)
//       ? 'The minimum amount is greater than the maximum'

export const categoryRules = {
  checked: (value: string) => value !== 'Check category' || 'Please, check category',
};

export const eventRules = {
  required: (value: string) => !!value.replace(/\s/g, '') || 'Name of event is required',
  capitalLetter: (value: string) =>
    /^[А-ЯЁA-Z]+$/.test(value[0]) || 'Name of event must start with a capital letter',
};

export const dateRules = {
  required: (value: string) => !!value || 'Date of event is required',
  older: (value: string) => Date.parse(value) > Date.now() || 'Enter a date no older than today',
};

export const timeRules = {
  required: (value: string) => !!value || 'Time of event is required',
};

export const addressRules = {
  required: (value: string) => !!value.replace(/\s/g, '') || 'Address of event is required',
};

export const phoneRules = {
  required: (value: string) => !!value || 'Contact phone is required',
  onlyNumbers: (value: string) => /^[0-9+]+$/.test(value) || 'Only numbers allowed',
  length: (value: string) => value.length > 9 || 'Phone number must contain at least 9 digits',
  startWithPlus: (value: string) => value[0] === '+' || 'Phone number must start with +',
};

export const paymentRules = {
  required: (value: string) => !!value || 'Please, check one of this',
};

export const priceRules = {
  required: (value: string) => !!value || 'Please enter the amount',
  greaterZero: (value: string) => Number(value) > 0 || 'Please enter an amount greater than zero',
};

export const photoRules = {
  required: (value: FileList | undefined) => value?.length !== 0 || 'Select file to upload',
};

export const agreementRules = {
  required: (value: boolean) => value || 'Please, check this',
};
