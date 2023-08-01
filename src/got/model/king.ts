/* eslint-disable no-unused-vars */
import { Character } from './character.js';

export class King extends Character {
  constructor(
    public name: string,
    public family: string,
    public age: number,
    public reignYears: number
  ) {
    super(name, family, age);
    this.message = "You're all to die!";
  }
}
