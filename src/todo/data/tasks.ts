import { Task } from '../model/task.js';

export const getTasks = () => {
  const mock: Task[] = [
    { title: 'Tarea 1', owner: 'Pepe', isCompleted: true },
    { title: 'Tarea 2', owner: 'Ernestina', isCompleted: false },
    { title: 'Tarea 3', owner: 'Luis', isCompleted: false },
  ];
  return mock;
};
