import { screen } from '@testing-library/dom';
import '@testing-library/jest-dom';
import { Footer } from './footer';

describe('Given the class Footer', () => {
  describe('When we instantiate it with a valid selector', () => {
    document.body.innerHTML = '<div class="root"></div>';

    const footer = new Footer('.root', [{ path: '/', label: 'Test' }]);

    test('The component should be in the document', () => {
      expect(footer).toBeInstanceOf(Footer);

      const element = screen.getByRole('contentinfo');
      expect(element).toBeInTheDocument();
    });
  });
});
