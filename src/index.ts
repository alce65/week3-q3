/* eslint-disable prefer-const */
/* eslint-disable no-unused-vars */
import { User, foo, foo1 } from './functions.js';

console.log('Hola TS');
foo('Soy foo');

// Tipo any => MALA PRÁCTICA

let userName: any;
console.log(typeof userName);
userName = 22;
userName = 'Pepe';

let userSurName;
userSurName = '';
userSurName = 22;

// Tipos implícitos (= inferidos)

let userEmail = '';
// Error userEmail = 22
userEmail = 'pepe@sample.com';

// Tipos explícitos (tipado fuerte y estática)

let age: number;

const bar = (x: number): void => {
  console.log(x * 2);
};

const makeSomething = (
  a: number,
  b: number,
  callback: (x: number, y: number) => number
) => {
  const r = callback(a, b);
};

makeSomething(2, 3, (x, y) => x * y);

// Arrays y Objetos

const numbers: Array<number> = [];
numbers.push(23);
// Error numbers.push(true);

const moreNumbers: number[] = [];

let user: {};

user = { x: 2 };

const realUser: User = {
  name: '',
  age: 22,
};

foo1(realUser);
