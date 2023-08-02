import { Component } from '../component.js';

export class Header extends Component {
  constructor(selector: string) {
    super(selector);

    this.template = this.createTemplate();
    this.render();
  }

  createTemplate() {
    return `
    <header id="main-header">
      <h1>TODO List</h1>
    </header>
    `;
  }
}
