/* eslint-disable no-unused-vars */
import { Task } from '../../model/task.js';
import { Component } from '../component.js';

export class AddTask extends Component {
  addTask!: (task: Task) => void;
  constructor(selector: string, addTask: (task: Task) => void) {
    super(selector);
    this.addTask = addTask;
    this.manageComponent();
  }

  handleSubmitAdd(ev: Event, form: HTMLFormElement) {
    ev.preventDefault();

    const newTask: Task = {
      title: (form.elements.namedItem('title') as HTMLInputElement).value,
      owner: (form.elements.namedItem('owner') as HTMLInputElement).value,
      isCompleted: false,
    };

    console.log(newTask);
    this.addTask(newTask);
  }

  manageComponent() {
    this.template = this.createTemplate();
    this.render();

    const form = this.element as HTMLFormElement;
    form?.addEventListener('submit', (ev: Event) => {
      this.handleSubmitAdd(ev, form);
    });
  }

  createTemplate() {
    return `<form aria-label="add-task">
        <legend>Añadir tarea</legend>
        <input type="text" name="title" placeholder="Describe la tarea" required />
        <input type="text" name="owner" placeholder="Responsable de la tarea" required />
        <button type="submit">Añadir</button>
      </form>`;
  }
}
