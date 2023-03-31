export const validation = {
  categoryRules: {
    checked: (value: string) => value !== 'Check category' || 'Please, check category',
  },

  eventRules: {
    required: (value: string) => !!value.replace(/\s/g, '') || 'Name of event is required',
    capitalLetter: (value: string) =>
      /^[А-ЯЁA-Z]+$/.test(value[0]) || 'Name of event must start with a capital letter',
  },

  dateRules: {
    required: (value: string) => !!value || 'Date of event is required',
    older: (value: string) => Date.parse(value) > Date.now() || 'Enter a date no older than today',
  },

  timeRules: {
    required: (value: string) => !!value || 'Time of event is required',
  },

  addressRules: {
    required: (value: string) => !!value.replace(/\s/g, '') || 'Address of event is required',
  },

  phoneRules: {
    required: (value: string) => !!value || 'Contact phone is required',
    onlyNumbers: (value: string) => /^[0-9+]+$/.test(value) || 'Only numbers allowed',
    length: (value: string) => value.length > 9 || 'Phone number must contain at least 9 digits',
    startWithPlus: (value: string) => value[0] === '+' || 'Phone number must start with +',
  },

  paymentRules: {
    required: (value: string) => !!value || 'Please, check one of this',
  },

  priceRules: {
    required: (value: string | undefined) => !!value || 'Please enter the amount',
    greaterZero: (value: string | undefined) =>
      Number(value) > 0 || 'Please enter an amount greater than zero',
  },

  photoRules: {
    required: (value: FileList | undefined) => value?.length !== 0 || 'Select file to upload',
    typeImage: (value: FileList | undefined) =>
      (value?.length && value[0].type.startsWith('image')) || 'Please, upload image',
  },

  agreementRules: {
    required: (value: boolean | undefined) => value || 'Please, check this',
  },
};
