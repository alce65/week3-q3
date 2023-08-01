/* eslint-disable max-params */
/* eslint-disable no-unused-vars */

import { Character } from './character.js';

export class Fighter extends Character {
  weapon: string;
  skillLevel: number;

  constructor(
    name: string,
    family: string,
    age: number,
    weapon: string,
    skillLevel: number
  ) {
    super(name, family, age);
    this.weapon = weapon;
    this.skillLevel = skillLevel;
    this.message = 'I hit first and ask later';
  }
}
