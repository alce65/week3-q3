import { Component } from '../component.js';

export class Footer extends Component {
  brand: string;
  constructor(selector: string, brand = 'ISDI Coders') {
    super(selector);
    this.brand = brand;
    this.template = this.makeTemplate();
    this.render();
  }

  makeTemplate() {
    return `
    <footer>
      <address>${this.brand}</address>
    </footer>`;
  }
}
