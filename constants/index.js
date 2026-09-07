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
    id: 'art',
    title: 'El arte',
  },
  {
    id: 'contact',
    title: 'Contacto',
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
  'Una identidad propia',
  'Detalles que hacen la diferencia',
  'Distintas formas de vivir Menta',
  'De la idea al espacio',
];

const goodLists = [
  'Un espacio pensado desde cero',
  'Arquitectura que también comunica',
  'Diseño, música y ambiente',
  'Un lugar para quedarse',
];
const storeInfo = {
  heading: 'Vení a Menta',
  address: 'Rosario, Santa Fe, Argentina',
  contact: {
    phone: '(0341) 456-7823',
    email: 'mentabar@gmail.com',
  },
};
const openingHours = [
  { day: 'Lunes – Jueves', time: '18:00 – 01:00' },
  { day: 'Viernes', time: '18:00 – 03:00' },
  { day: 'Sábado', time: '18:00 – 03:00' },
  { day: 'Domingo', time: '18:00 – 01:00' },
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
    name: 'Pink Gin Tonic',
    image: '/images/drink1.png',
    title: 'Fresco, simple y con actitud',
    description:
      'Gin, tónica y un toque frutal que le da su característico color rosado. Fresco, ligero y perfecto para arrancar la noche.',
  },
  {
    id: 2,
    name: 'Raspberry Mojito',
    image: '/images/drink2.png',
    title: 'Un clásico con un giro',
    description:
      'Ron, lima, menta y frambuesas se combinan para darle una vuelta fresca y frutal a uno de los clásicos que nunca falla.',
  },
  {
    id: 3,
    name: 'Aperol Spritz',
    image: '/images/drink3.png',
    title: 'El clásico que siempre invita',
    description:
      'Aperol, espumante y soda en una combinación fresca, amarga y equilibrada. Servido bien frío, como tiene que ser.',
  },
  {
    id: 4,
    name: 'Curacao Mojito',
    image: '/images/drink4.png',
    title: 'Hecho para disfrutar',
    description:
      'Una combinación fresca y vibrante, preparada con ingredientes seleccionados y el toque de Menta que hace la diferencia.',
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
