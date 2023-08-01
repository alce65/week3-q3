/* eslint-disable no-unused-vars */
import { Character } from './character.js';

export class Advisor extends Character {
  constructor(
    public name: string,
    public family: string,
    public age: number,
    public adviseTo: Character
  ) {
    super(name, family, age);
    this.message = 'I dunno know why, but I believe I am gonna die soon';
  }
}
