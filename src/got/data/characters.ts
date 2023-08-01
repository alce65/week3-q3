import { Advisor } from '../model/advisor.js';
import { Character } from '../model/character.js';
import { Fighter } from '../model/fighter.js';
import { King } from '../model/king.js';
import { Squire } from '../model/squire.js';

export type AllCharacters = King | Fighter | Advisor | Squire;

export const thronesCharacters: Character[] = [
  new King('Joffrey', 'Baratheon', 18, 1),
  new Fighter('Jamie', 'Lannister', 33, 'sword', 10),
  new Fighter('Daenerys', 'Targaryen', 18, 'dragons', 8),
];

thronesCharacters.push(
  new Advisor('Tyrion', 'Lannister', 40, thronesCharacters[2])
);

thronesCharacters.push(
  new Squire('Bronn', 'Nieve', 35, 5, thronesCharacters[1] as Fighter)
);
