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
      photo: '',
      name: 'Fall Out Boy',
      date: '17.10.2023',
      timeStart: '21:00',
      address: 'Warsaw Łazienkowska 6A',
      contact: '+48 784563723',
      payment: 'online',
      minPrice: '32',
      maxPrice: '810',
    },
    {
      id: 2,
      category: 'For Children',
      photo: '',
      name: 'Alice in Wonderland',
      date: '25.03.2023',
      timeStart: '10:00',
      address: 'Krakow, al.Pokoju 6B',
      contact: 'f.monte@poczta.com',
      payment: 'online, on the spot',
      minPrice: '7',
      maxPrice: '12',
    },
    {
      id: 3,
      category: 'For Children',
      photo: '',
      name: 'Master class "I love football"',
      date: '30.03.2023',
      timeStart: '12:00',
      address: 'Krakow, Rynek Glowny',
      contact: 'j.home@poczta.com',
      payment: 'free',
    },
    {
      id: 4,
      category: 'Concerts',
      photo: '',
      name: 'Red Hot Chili Peppers',
      date: '21.06.2023',
      timeStart: '18:00',
      address: 'Warsaw PGE Narodowy',
      contact: '+48 673567898',
      payment: 'pay online',
      minPrice: '28',
      maxPrice: '1000',
    },
    {
      id: 5,
      category: 'For Children',
      photo: '',
      name: 'Game program "Super quiz"',
      date: '02.04.2023',
      timeStart: '10:00',
      address: 'Krakow, Donbie, 7',
      contact: '+48 675483467',
      payment: 'free',
    },
    {
      id: 6,
      category: 'Concerts',
      photo: '',
      name: 'Pink',
      date: '16.07.2023',
      timeStart: '19:00',
      address: 'Warsaw PGE Narodowy',
      contact: '+48 673567898',
      payment: 'online',
      minPrice: '32',
      maxPrice: '810',
    },
  ],
};

export default cardData;
