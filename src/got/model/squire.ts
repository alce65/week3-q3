/* eslint-disable max-params */
/* eslint-disable no-unused-vars */
import { Character } from './character.js';
import { Fighter } from './fighter.js';

export class Squire extends Character {
  constructor(
    public name: string,
    public family: string,
    public age: number,
    public serveLevel: number,
    public servesTo: Fighter
  ) {
    super(name, family, age);
    this.message = 'I am a real loser';
  }
}
