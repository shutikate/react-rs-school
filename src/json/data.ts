interface Event {
  photo: string;
  name: string;
  date: string;
  timeStart: string;
  duration: string;
  address: string;
  contact: string;
  ageCategory: string;
  payment: string;
}

interface CardData {
  events: Array<Event>;
}

const cardData: CardData = {
  events: [
    {
      photo: '',
      name: 'Shadow theater "Alice in Wonderland"',
      date: '25.03.2023',
      timeStart: '10:00',
      duration: '60 min',
      address: 'Krakow, al.Pokoju 6B',
      contact: 'f.monte@poczta.com',
      ageCategory: '3+',
      payment: 'online, on the spot',
    },
  ],
};

export default cardData;
