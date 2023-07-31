export class User {
  email;
  userName;
  age;

  static brand = 'ISDI';

  constructor(email: string, userName: string, age: number) {
    this.email = email;
    this.userName = userName;
    this.age = age;
  }

  greetings(name: string) {
    console.log(`Hola soy ${this.userName}, bienvenid@ ${name}`);
  }
}

export class Alumno extends User {
  course;
  constructor(email: string, userName: string, age: number, course: string) {
    super(email, userName, age);
    this.course = course;
  }

  greetings(name: string) {
    super.greetings(name);
    console.log(`Estudio ${this.course}`);
  }
}
