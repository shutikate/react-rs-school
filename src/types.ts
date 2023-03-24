export interface Event {
  id: string;
  category: string | undefined;
  photo: string;
  name: string | undefined;
  date: string | undefined;
  time: string | undefined;
  address: string | undefined;
  contact: string | undefined;
  payment: string | null | undefined;
  minPrice?: string | undefined;
  maxPrice?: string | undefined;
  checkBox?: boolean | undefined;
}

export interface Errors {
  nameEvent: string;
  date: string;
  time: string;
  address: string;
  photo: string;
  agree: string;
  payment: string;
  price: string;
  contact: string;
  category: string;
}
