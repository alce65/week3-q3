type InsertPosition = 'afterbegin' | 'afterend' | 'beforebegin' | 'beforeend';

export abstract class Component {
  selector: string;
  template: string;
  constructor(selector: string) {
    this.selector = selector;
    this.template = '';
  }

  render(position: InsertPosition = 'beforeend') {
    const element = document.querySelector(this.selector);
    if (!element) return;

    element.insertAdjacentHTML(position, this.template);
  }
}
