/* eslint-disable no-unused-vars */
import { FullTask } from '../../model/task.js';
import { Component } from '../component.js';

export class Card extends Component {
  task: FullTask;
  erase: (task: FullTask) => void;
  update: (task: FullTask) => void;

  constructor(
    selector: string,
    task: FullTask,
    erase: (task: FullTask) => void,
    update: (task: FullTask) => void
  ) {
    super(selector);
    this.task = task;
    this.erase = erase;
    this.update = update;

    this.manageComponent();
  }

  manageComponent() {
    this.template = this.createTemplate();
    this.render();

    const deleteButton = this.element.querySelector('[role="button"]');
    deleteButton!.addEventListener('click', () => this.erase(this.task));

    const check = this.element.querySelector('[type="checkbox"]');
    check!.addEventListener('change', () => {
      this.update(this.task);
    });
  }

  createTemplate() {
    return `
    <li>
      <span>${this.task.title}</span>
      <span>${this.task.owner}</span>
      <span>
        <input type="checkbox" name="is-completed" ${
          this.task.isCompleted ? 'checked' : ''
        }/>
        <span role="button" class="button">🗑️</span>
      </span>
      </li>
    `;
  }
}
