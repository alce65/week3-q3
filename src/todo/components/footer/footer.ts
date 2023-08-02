import { MenuOption } from '../../types/menu.options.js';
import { Component } from '../component.js';
import { Menu } from '../menu/menu.js';

export class Footer extends Component {
  brand: string;
  socialOptions: MenuOption[];
  constructor(
    selector: string,
    socialOptions: MenuOption[],
    brand = 'ISDI Coders'
  ) {
    super(selector);
    this.socialOptions = socialOptions;
    this.brand = brand;
    this.template = this.createTemplate();
    this.render();
  }

  render() {
    super.render();
    // eslint-disable-next-line no-new
    new Menu('footer', this.socialOptions);
  }

  createTemplate() {
    return `
    <footer>
      <address>${this.brand}</address>
    </footer>`;
  }
}
