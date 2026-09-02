const navLinks = [
  {
    id: 'cocktails',
    title: 'Cocktails',
  },
  {
    id: 'about',
    title: 'Sobre nosotros',
  },
  {
    id: 'work',
    title: 'El arte',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const cocktailLists = [
  {
    name: 'Mojito',
    country: 'CU',
    detail: 'Menta · Lima · Refrescante',
    price: '$12',
  },
  {
    name: 'Margarita',
    country: 'MX',
    detail: 'Cítrica · Ácida · Equilibrada',
    price: '$13',
  },

  {
    name: 'Gin Tonic',
    country: 'UK',
    detail: 'Fresco · Herbal · Refrescante',
    price: '$12',
  },

  {
    name: 'Aperol Spritz',
    country: 'IT',
    detail: 'Amargo · Burbujeante · Ligero',
    price: '$11',
  },
];

const mockTailLists = [
  {
    name: 'Passion Mint',
    country: 'MB',
    detail: 'Maracuyá · Menta · Lima',
    price: '$10',
  },
  {
    name: 'Berry Bloom',
    country: 'MB',
    detail: 'Frutos rojos · Hibiscus · Limón',
    price: '$10',
  },
  {
    name: 'Citrus Fizz',
    country: 'MB',
    detail: 'Pomelo · Limón · Ginger Ale',
    price: '$10',
  },
  {
    name: 'Peach Cloud',
    country: 'MB',
    detail: 'Durazno · Vainilla · Limón',
    price: '$10',
  },
];

const profileLists = [
  {
    imgPath: '/images/profile1.png',
  },
  {
    imgPath: '/images/profile2.png',
  },
  {
    imgPath: '/images/profile3.png',
  },
  {
    imgPath: '/images/profile4.png',
  },
];

const featureLists = [
  'Perfectly balanced blends',
  'Garnished to perfection',
  'Ice-cold every time',
  'Expertly shaken & stirred',
];

const goodLists = [
  'Handpicked ingredients',
  'Signature techniques',
  'Bartending artistry in action',
  'Freshly muddled flavors',
];

const storeInfo = {
  heading: 'Where to Find Us',
  address: '456, Raq Blvd. #404, Los Angeles, CA 90210',
  contact: {
    phone: '(555) 987-6543',
    email: 'hello@jsmcocktail.com',
  },
};

const openingHours = [
  { day: 'Mon–Thu', time: '11:00am – 12am' },
  { day: 'Fri', time: '11:00am – 2am' },
  { day: 'Sat', time: '9:00am – 2am' },
  { day: 'Sun', time: '9:00am – 1am' },
];

const socials = [
  {
    name: 'Instagram',
    icon: '/images/insta.png',
    url: '#',
  },
  {
    name: 'X (Twitter)',
    icon: '/images/x.png',
    url: '#',
  },
  {
    name: 'Facebook',
    icon: '/images/fb.png',
    url: '#',
  },
];

const sliderLists = [
  {
    id: 1,
    name: 'Classic Mojito',
    image: '/images/drink1.png',
    title: 'Simple Ingredients, Bold Flavor',
    description:
      'Made with tequila, lime juice, and orange liqueur, the Margarita is easy to make and full of character. Add a salted rim for the perfect drink on summer nights.',
  },
  {
    id: 2,
    name: 'Raspberry Mojito',
    image: '/images/drink2.png',
    title: 'A Zesty Classic That Never Fails',
    description:
      'The Margarita is a classic that balances tangy lime, smooth tequila, and a touch of sweetness. Shaken, frozen, or on the rocks—it’s always crisp & refreshing.',
  },
  {
    id: 3,
    name: 'Violet Breeze',
    image: '/images/drink3.png',
    title: 'Simple Ingredients, Bold Flavor',
    description:
      'Made with tequila, lime juice, and orange liqueur, the Margarita is easy to make and full of character. Add a salted rim for the perfect drink on summer nights.',
  },
  {
    id: 4,
    name: 'Curacao Mojito',
    image: '/images/drink4.png',
    title: 'Crafted With Care, Poured With Love',
    description:
      "Each cocktail is made with fresh ingredients and a passion for perfecting every pour, whether you're celebrating or simply relaxing.",
  },
];

export {
  navLinks,
  cocktailLists,
  mockTailLists,
  profileLists,
  featureLists,
  goodLists,
  openingHours,
  storeInfo,
  socials,
  sliderLists,
};
