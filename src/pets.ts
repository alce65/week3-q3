/* eslint-disable prefer-const */
/* eslint-disable no-unused-vars */
/* eslint-disable no-useless-constructor */

export class Pet {
  // Atajo name
  // breed
  constructor(public name: string, public breed: string) {
    // Atajo this.name = name
    // this.breed = breed
  }
}

const pet1 = new Pet('pepe', 'perro');

let pet2: Pet;
pet2 = { name: 'fu', breed: 'dragon' };

export interface PetStructure {
  name: string;
  breed: string;
}

let pet3: PetStructure;
pet3 = { name: 'fu', breed: 'dragon' };

export type PetType = {
  name: string;
  breed: string;
};

let pet4: PetType;
pet4 = { name: 'fu', breed: 'dragon' };

class Dog implements PetStructure {
  breed;
  constructor(public name: string) {
    this.breed = 'Dog';
  }
}

class Cat implements PetStructure {
  breed;
  constructor(public name: string) {
    this.breed = 'Cat';
  }
}
