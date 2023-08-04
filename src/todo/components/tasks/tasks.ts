/* eslint-disable no-negated-condition */
import { ApiTasksRepository, Repository } from '../../data/api.repository.js';
import { FullTask } from '../../model/task.js';
import { AddTask } from '../add.task/add.task.js';
import { Card } from '../card/card.js';
import { Component } from '../component.js';

const urlBase = 'http://localhost:3000/tasks';
export class Tasks extends Component {
  tasks: FullTask[];
  repo: Repository<FullTask>;
  constructor(selector: string) {
    super(selector);
    this.repo = new ApiTasksRepository(urlBase);
    this.tasks = [];
    this.loadTasks();

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

  async loadTasks() {
    this.tasks = await this.repo.getAll();
    this.manageComponent();
  }

  async addTask(task: Omit<FullTask, 'id'>) {
    console.log('Add');
    const fullTask = await this.repo.create(task);
    this.tasks.push(fullTask);
    this.manageComponent();
  }

  async delete(task: FullTask) {
    await this.repo.delete(task.id);
    this.tasks = this.tasks.filter((item) => item.title !== task.title);
    this.manageComponent();
  }

  async update(task: FullTask) {
    task.isCompleted = !task.isCompleted;
    const updatedTask = await this.repo.update(task.id, task);
    this.tasks = this.tasks.map((item) =>
      item.title !== task.title ? item : updatedTask
    );
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
