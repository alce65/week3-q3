import { Component } from '../component.js';

export class Header extends Component {
  constructor(selector: string) {
    super(selector);
    this.template = this.makeTemplate();
    this.render();
  }

  makeTemplate() {
    return `
    <header>
      <h1>TODO List</h1>
    </header>`;
  }
}
