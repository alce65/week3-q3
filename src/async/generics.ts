import { Task } from '../todo/model/task';

export const data: number[] = [];
export const dataGenerics: Array<number> = [];

export let p!: Promise<Task>;

p.then((data) => {
  console.log(data.title);
});
