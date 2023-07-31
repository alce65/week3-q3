export const foo = (x: string) => {
  console.log(x);
  return x;
};

export type User = {
  name: string;
  age: number;
};

export const foo1 = ({ name }: User) => {
  console.log(name);
};
