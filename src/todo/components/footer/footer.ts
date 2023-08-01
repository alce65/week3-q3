import { Component } from '../component.js';

export class Footer extends Component {
  brand: string;
  constructor(selector: string, brand = 'ISDI Coders') {
    super(selector);
    this.brand = brand;
    this.template = this.createTemplate();
    this.render();
  }

  createTemplate() {
    return `
    <footer>
      <address>${this.brand}</address>
    </footer>`;
  }
}
