import { Task } from '../model/task.js';

const storeName = 'Tasks';

export const getTasks = () => {
  const mock: Task[] = [
    { title: 'Tarea 1', owner: 'Pepe', isCompleted: true },
    { title: 'Tarea 2', owner: 'Ernestina', isCompleted: false },
    { title: 'Tarea 3', owner: 'Luis', isCompleted: false },
  ];

  const data = localStorage.getItem(storeName);

  if (data) {
    fetch('http://localhost:3000/tasks')
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((data) => console.log(data));

    return JSON.parse(data) as Task[];
  }

  setTasks(mock);

  return mock;
};

export const setTasks = (tasks: Task[]) => {
  localStorage.setItem(storeName, JSON.stringify(tasks));
};

export const removeTasks = () => {
  localStorage.removeItem(storeName);
};
