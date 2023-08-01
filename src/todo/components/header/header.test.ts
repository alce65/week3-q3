import { screen } from '@testing-library/dom';
import '@testing-library/jest-dom';

import { Header } from './header';

describe('Given the class Header', () => {
  describe('When we instantiate it with a invalid selector', () => {
    const selector = '.test';
    const header = new Header(selector);
    test('it should have a property with the parameter', () => {
      expect(header).toHaveProperty('selector', selector);
    });
  });

  describe('When we instantiate it with a valid selector', () => {
    document.body.innerHTML = '<div class="root"></div>';
    const header = new Header('.root');
    test('the component should be in the document', () => {
      expect(header).toBeInstanceOf(Header);

      const element = screen.getByRole('heading', { name: 'TODO List' });
      expect(element).toBeInTheDocument();
    });
  });
});
