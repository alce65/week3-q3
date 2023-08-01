/* eslint-disable no-new */
import { Footer } from './components/footer/footer.js';
import { Header } from './components/header/header.js';
import { Main } from './components/main/main.js';

console.log('Loaded index');
const components = [
  new Header('#root'),
  new Main('#root'),
  new Footer('#root'),
];
console.log(components);
