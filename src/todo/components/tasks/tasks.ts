/* eslint-disable no-negated-condition */
import { getTasks, setTasks } from '../../data/tasks.js';
import { Task } from '../../model/task.js';
import { AddTask } from '../add.task/add.task.js';
import { Card } from '../card/card.js';
import { Component } from '../component.js';

export class Tasks extends Component {
  tasks: Task[];
  constructor(selector: string) {
    super(selector);
    this.tasks = getTasks();

    this.manageComponent();
  }

  render() {
    this.clear();
    super.render();
    const add = new AddTask('.add-container', this.addTask.bind(this));
    console.log(add);
    this.tasks.forEach(
      (item) =>
        new Card(
          '.cards-container',
          item,
          this.delete.bind(this),
          this.update.bind(this)
        )
    );
  }

  addTask(task: Task) {
    console.log('Add');
    this.tasks.push(task);
    setTasks(this.tasks);
    this.manageComponent();
  }

  delete(task: Task) {
    this.tasks = this.tasks.filter((item) => item.title !== task.title);
    setTasks(this.tasks);
    this.manageComponent();
  }

  update(task: Task) {
    this.tasks = this.tasks.map((item) =>
      item.title !== task.title
        ? item
        : { ...item, isCompleted: !item.isCompleted }
    );
    setTasks(this.tasks);
  }

  manageComponent() {
    this.template = this.createTemplate();
    this.render();
  }
  // Create
  // Read
  // Update
  // Delete

  createTemplate() {
    return `
    <section id="tasks" class="tasks">
      <h2>Tareas</h2>
      <div class="add-container"></div>
      <ul class="cards-container"></ul>
    </section>
    `;
  }
}
