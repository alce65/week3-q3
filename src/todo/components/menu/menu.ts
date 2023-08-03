import './menu.scss';
import { MenuOption } from '../../types/menu.options.js';
import { Component } from '../component.js';

export class Menu extends Component {
  menuOptions: MenuOption[];
  constructor(selector: string, menuOptions: MenuOption[]) {
    super(selector);
    this.menuOptions = menuOptions;
    this.template = this.createTemplate();
    this.render();
  }

  addItems() {
    return this.menuOptions
      .map((item) => `<li><a href="${item.path}">${item.label}</a></li>`)
      .join('');
  }

  createTemplate() {
    return `
    <nav><ul>
    ${this.addItems()}
    </ul></nav>
    `;
  }
}
