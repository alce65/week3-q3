/* eslint-disable no-new */
import { Footer } from './components/footer/footer.js';
import { Header } from './components/header/header.js';
import { Main } from './components/main/main.js';
import { Menu } from './components/menu/menu.js';
import { Tasks } from './components/tasks/tasks.js';
import { MenuOption } from './types/menu.options.js';

console.log('Loaded index');

const menuOptions: MenuOption[] = [
  { path: '/', label: 'Home' },
  { path: '/products.html', label: 'Productos' },
  { path: '/about.html', label: 'Acerca de' },
];

const socialOptions: MenuOption[] = [
  { path: '/twitter', label: 'Twitter' },
  { path: '/linkedin', label: 'Linkedin' },
  { path: '/instagram', label: 'Instagram' },
];

const components = [
  new Header('#root'),
  new Menu('#main-header', menuOptions),
  new Main('#root'),
  new Tasks('main'),
  new Footer('#root', socialOptions),
];
console.log(components);
