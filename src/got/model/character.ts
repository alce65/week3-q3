/* eslint-disable no-unused-vars */
export abstract class Character {
  static serie: 'Game of thrones';
  isAlive: boolean;
  message: string;
  name: string;
  family: string;
  age: number;
  constructor(name: string, family: string, age: number) {
    this.name = name;
    this.family = family;
    this.age = age;
    this.isAlive = true;
    this.message = '';
  }

  die() {
    this.isAlive = false;
  }

  talk() {
    return this.message;
  }
}
