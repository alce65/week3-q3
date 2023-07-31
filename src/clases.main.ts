/* eslint-disable no-unused-vars */
import { Alumno, User } from './clases.js';

const user1 = new User('pepe@sample.com', 'pepe', 33);
const user2 = new User('ernestina@sample.com', 'erni', 25);

let user3: User;
// eslint-disable-next-line prefer-const
user3 = {
  email: '',
  userName: '',
  age: 12,
  greetings(name: string) {},
};

user1.greetings(user2.userName);
user2.greetings(user1.userName);

// Errores
// user1.height = 180;
// delete user2.age;

console.log(user1);
console.log(user2);

console.log(User.brand);

const a1 = new Alumno('pepe@sample.com', 'pepe', 33, 'Angular');
console.log(a1);

a1.greetings('Luis');
