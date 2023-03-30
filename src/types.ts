export interface Event {
  id?: string;
  category: string;
  photo?: FileList;
  photoURL: string;
  name: string;
  date: string;
  time: string;
  address: string;
  contact: string;
  payment: string;
  minPrice: string;
  maxPrice: string;
  checkBox: boolean;
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
