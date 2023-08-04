import { FullTask } from '../model/task';

export interface Repository<T extends { id: number | string }> {
  get(_id: T['id']): Promise<T>;
  getAll(): Promise<T[]>;
  create(_item: Omit<T, 'id'>): Promise<T>;
  update(_id: T['id'], _item: Partial<T>): Promise<T>;
  delete(_id: T['id']): Promise<void>;
}

export class ApiTasksRepository implements Repository<FullTask> {
  urlBase: string;
  constructor(urlBase: string) {
    this.urlBase = urlBase;
  }

  async getAll(): Promise<FullTask[]> {
    const response = await fetch(this.urlBase);
    const data = await response.json();
    return data;
  }

  async get(id: number): Promise<FullTask> {
    const url = this.urlBase + '/' + id;
    const response = await fetch(url);
    const data = await response.json();
    return data;
  }

  async create(item: Omit<FullTask, 'id'>): Promise<FullTask> {
    const response = await fetch(this.urlBase, {
      method: 'POST',
      body: JSON.stringify(item),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await response.json();
    return data;
  }

  async update(id: number, item: Partial<FullTask>): Promise<FullTask> {
    const url = this.urlBase + '/' + id;
    const response = await fetch(url, {
      method: 'PATCH',
      body: JSON.stringify(item),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await response.json();
    return data;
  }

  async delete(id: number): Promise<void> {
    const url = this.urlBase + '/' + id;
    await fetch(url, {
      method: 'DELETE',
    });
  }
}
