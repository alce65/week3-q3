/* eslint-disable no-negated-condition */
import { getTasks } from '../../data/tasks.js';
import { Task } from '../../model/task.js';
import { Component } from '../component.js';

export class Tasks extends Component {
  // Decaracion de propiedades
  tasks: Task[];

  constructor(selector: string) {
    super(selector);
    this.tasks = getTasks();

    this.manageComponent();
  }

  render() {
    this.clear();
    super.render();
  }

  handleSubmitAdd(ev: Event, form: HTMLFormElement) {
    ev.preventDefault();

    const newTask: Task = {
      title: (form.elements.namedItem('title') as HTMLInputElement).value,
      owner: (form.elements.namedItem('owner') as HTMLInputElement).value,
      isCompleted: false,
    };

    this.tasks.push(newTask);
    console.log(this.tasks);
    this.manageComponent();
  }

  handleDelete(ev: Event) {
    const elementTitle = (ev.target as HTMLElement).dataset.id;
    console.log('Soy...', elementTitle);
    this.tasks = this.tasks.filter((item) => item.title !== elementTitle);
    console.log(this.tasks);
    this.manageComponent();
  }

  handleCheck(ev: Event) {
    const elementTitle = (ev.target as HTMLElement).dataset.id;
    console.log('Soy...', elementTitle);
    this.tasks = this.tasks.map((item) =>
      item.title !== elementTitle
        ? item
        : { ...item, isCompleted: !item.isCompleted }
    );
    console.log(this.tasks);
  }

  manageComponent() {
    this.template = this.createTemplate();
    this.render();

    const form = this.element.querySelector('form');
    form?.addEventListener('submit', (ev: Event) => {
      this.handleSubmitAdd(ev, form);
    });

    const deleteButtons = this.element.querySelectorAll('[role="button"]');
    deleteButtons.forEach((item) =>
      item.addEventListener('click', (ev: Event) => this.handleDelete(ev))
    );

    const checks = this.element.querySelectorAll('[type="checkbox"]');
    checks.forEach((item) =>
      item.addEventListener('change', this.handleCheck.bind(this))
    );
  }
  // Create
  // Read
  // Update
  // Delete

  readItems() {
    return this.tasks
      .map(
        (item) => `
      <li>
      <span>${item.title}</span>
      <span>${item.owner}</span>
      <span>
        <input type="checkbox" data-id="${item.title}" name="is-completed" ${
          item.isCompleted ? 'checked' : ''
        }/>
        <span role="button" class="button" data-id="${item.title}">🗑️</span>
      </span>
      </li>
    `
      )
      .join('');
  }

  createTemplate() {
    return `
    <section id="tasks" class="tasks">
      <h2>Tareas</h2>
      <form>
        <legend>Añadir tarea</legend>
        <input type="text" name="title" placeholder="Describe la tarea" required />
        <input type="text" name="owner" placeholder="Responsable de la tarea" required />
        <button type="submit">Añadir</button>
      </form>
      <ul>${this.readItems()}</ul>
    </section>
    `;
  }
}
