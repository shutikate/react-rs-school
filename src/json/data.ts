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
      photo: 'https://allaboutmusic.pl/wp-content/uploads/2018/08/fall-out-boy.jpg',
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
      photo:
        'https://cs5.livemaster.ru/storage/65/1a/3d4d18adaa758e0c2771f38ed2xg--aktivnyj-otdyh-i-razvlecheniya-alisa-tenevoj-teatr-tenej-igro.jpg',
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
      photo: 'http://tgb2.ru/images/news/2018news/0213_football3.jpg',
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
      photo:
        'https://media.stubcloudstatic.com/stubhub-catalog/image/upload/t_thumb_169/f_auto/v1/performer/7527/8301f321f54f12b681dd71a90bc37bac?_a=AJAJZWI0',
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
      photo:
        'https://ocdn.eu/pulscms-transforms/1/3I9k9kpTURBXy9mYTllZWI1ZDJhZDJkNjRhODNhNThjYWMzNWIxMTZjMi5qcGeTlQMAHs0D6M0CMpMFzQMUzQG8kwmmM2RhOTYzBt4AAaEwBg/.avif',
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
      photo:
        'https://phantom-marca.unidadeditorial.es/79cd2d25244a89478d1af34397338369/resize/828/f/webp/assets/multimedia/imagenes/2023/02/20/16769334094930.jpg',
      name: 'Pink',
      date: '16.07.2023',
      timeStart: '19:00',
      address: 'Warsaw PGE Narodowy',
      contact: '+48 673567898',
      payment: 'Pay online',
      minPrice: '32',
      maxPrice: '810',
    },
    {
      id: 7,
      category: 'Festivals',
      photo:
        'https://www.deephouseamsterdam.com/wp-content/uploads/2014/07/open-air-watergate-deep-house-amsterdam.jpg',
      name: 'Open air Festival',
      date: '20.06.2023',
      timeStart: '20:00',
      address: 'Gdansk, Main Place',
      contact: '+48 836754367',
      payment: 'Pay online',
      minPrice: '20',
      maxPrice: '100',
    },
    {
      id: 8,
      category: 'Sport',
      photo: 'https://marathonec.ru/wp-content/uploads/2020/04/strategiya-na-marafone.jpg',
      name: 'Marathon',
      date: '18.04.2023',
      timeStart: '11:00',
      address: 'Krakow, Jordan park',
      contact: '+48 987567456',
      payment: 'Free',
    },
  ],
};

export default cardData;
