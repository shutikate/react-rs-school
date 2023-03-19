import fallOutBoy from '../assets/images/fall-out-boy.jpg';
import football from '../assets/images/football.jpg';
import pink from '../assets/images/pink.jpg';
import quiz from '../assets/images/quiz.jpg';
import peppers from '../assets/images/red-hot-chili-peppers.jpg';
import shadow from '../assets/images/shadow.jpg';

export interface Event {
  id: number;
  category: string;
  photo: string;
  name: string;
  date: string;
  timeStart: string;
  address: string;
  contact: string;
  payment: string;
  minPrice?: string;
  maxPrice?: string;
}

export interface CardData {
  events: Array<Event>;
}

const cardData: CardData = {
  events: [
    {
      id: 1,
      category: 'Concerts',
      photo: fallOutBoy,
      name: 'Fall Out Boy',
      date: '17.10.2023',
      timeStart: '21:00',
      address: 'Warsaw Łazienkowska 6A',
      contact: '+48 784563723',
      payment: 'Pay online',
      minPrice: '32',
      maxPrice: '810',
    },
    {
      id: 2,
      category: 'For Children',
      photo: shadow,
      name: 'Alice in Wonderland',
      date: '25.03.2023',
      timeStart: '10:00',
      address: 'Krakow, al.Pokoju 6B',
      contact: '+48 675980786',
      payment: 'Pay online',
      minPrice: '7',
      maxPrice: '12',
    },
    {
      id: 3,
      category: 'For Children',
      photo: football,
      name: 'Master class "I love football"',
      date: '30.03.2023',
      timeStart: '12:00',
      address: 'Krakow, Rynek Glowny',
      contact: '+48 673425416',
      payment: 'Free',
    },
    {
      id: 4,
      category: 'Concerts',
      photo: peppers,
      name: 'Red Hot Chili Peppers',
      date: '21.06.2023',
      timeStart: '18:00',
      address: 'Warsaw PGE Narodowy',
      contact: '+48 673567898',
      payment: 'Pay online',
      minPrice: '28',
      maxPrice: '1000',
    },
    {
      id: 5,
      category: 'For Children',
      photo: quiz,
      name: 'Game program "Super quiz"',
      date: '02.04.2023',
      timeStart: '10:00',
      address: 'Krakow, Donbie, 7',
      contact: '+48 675483467',
      payment: 'Free',
    },
    {
      id: 6,
      category: 'Concerts',
      photo: pink,
      name: 'Pink',
      date: '16.07.2023',
      timeStart: '19:00',
      address: 'Warsaw PGE Narodowy',
      contact: '+48 673567898',
      payment: 'Pay online',
      minPrice: '32',
      maxPrice: '810',
    },
  ],
};

export default cardData;
