import { Component } from '../component.js';

export class Main extends Component {
  constructor(selector: string) {
    super(selector);
    this.template = this.makeTemplate();
    this.render();
  }

  makeTemplate() {
    return `<main></main>`;
  }
}
