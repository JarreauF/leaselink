import Chance from 'chance';
const chance = new Chance();
import amenitiesData  from './amenitiesData';

const randomizeAmenities = () => {
  const shuffled = amenitiesData.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, 10).map(a => ({ ...a, available: Math.random() > 0.5 }));
};

const homesData = new Array(10).fill().map(() => ({
  imageUrls: [
    'https://source.unsplash.com/random?house',
    'https://source.unsplash.com/random?interior',
    'https://source.unsplash.com/random?livingroom',
    'https://source.unsplash.com/random?bedroom',
    'https://source.unsplash.com/random?kitchen',
  ],
  name: chance.name(),
  landlordName: chance.name(),
  landlordProfileImage: 'https://source.unsplash.com/random?person',
  type: chance.pickone(['House', 'Apartment', 'Townhouse']),
  lease: `${chance.integer({ min: 6, max: 24 })} months`,
  cost: `R${chance.integer({ min: 1000, max: 5000 })}/month`,
  rating: chance.floating({ min: 0, max: 5, fixed: 2 }),
  reviews: chance.integer({ min: 1, max: 100 }),
  tenants: chance.integer({ min: 1, max: 6 }),
  bedrooms: chance.integer({ min: 1, max: 5 }),
  beds: chance.integer({ min: 1, max: 5 }),
  bathrooms: chance.integer({ min: 1, max: 3 }),
  noticePeriod: `${chance.integer({ min: 1, max: 6 })} months`,
  city: chance.city(),
  street: chance.street(),
  latitude: chance.latitude(),
  longitude: chance.longitude(),
  amenities: randomizeAmenities(),
  description: `This wonderful home features ${chance.word()} furniture, a beautiful view of the ${chance.city()}, and is located in a very ${chance.word()} neighborhood. It's just a short walk to local shops and restaurants.`,
  cityDescription: `The city is known for its ${chance.word()} vibe and ${chance.word()} atmosphere. It has a diverse population and is a hub of cultural and social activity.`,
}));

export default homesData;
