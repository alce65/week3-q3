import { cards } from './card.js';

const ulElement = document.querySelector('#cards') as HTMLUListElement;

// Alt if (!ulElement) throw new Error('Invalid Selector');

ulElement.innerHTML = cards;
