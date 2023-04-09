import { Event } from '../types';

const URL = 'https://react-json-api.vercel.app';

export const getEvents = async (searchValue: string) => {
  const response = await fetch(`${URL}/events?q=${searchValue}`);
  const data: Event[] = await response.json();
  if (data?.length === 0) {
    throw new Error('Data not found');
  } else {
    return data;
  }
};

export const getEvent = async (id: string) => {
  const response = await fetch(`${URL}/events/${id}`);
  const data: Event = await response.json();
  if (!Object.keys(data || {}).length) {
    throw new Error('Data not found');
  } else {
    return data;
  }
};
