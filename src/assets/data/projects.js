import { v4 as uuidv4 } from 'uuid';
import Books1 from '../images/books1.jpeg';
import Books2 from '../images/books2.jpeg';
import Books3 from '../images/books3.jpg';
import Books4 from '../images/books4.jpg';
import Books5 from '../images/books5.webp';

const projects = [
  {
    id: uuidv4(),
    name: 'No Longer Human',

    desc:
      'An application to track your all data from one place. I developed the website and the mobile app',
    img: Books1,
    price:150.99,
  },
  {
    id: uuidv4(),
    name: 'Beyond good and evil',
    desc:
      'An app to help people to get an overview of how they can make the city beautiful.',
    img:Books2,
    price:300,
  },
  {
    id: uuidv4(),
    name: 'Alchemist',
    desc:
      'Using this app you can track any e coin. Also you will get a good advise about investment form the professional',
    img: Books3,
    price:900,
  },
  {
    id: uuidv4(),
    name: "Witchers",
    desc:
      'A portfolio for Cavin jr. A artist from New york city. The portfolio is made using ReactJs and GatsbyJs.',
    img: Books4,
    price:300,
  },
  {
    id: uuidv4(),
    name: 'Aragon',
    desc:
      'A tracking website that will show the performance of the website. Also you will get some useful advice to improve the performance.',
    img: Books5,
    price:100,
  },
];

export default projects;