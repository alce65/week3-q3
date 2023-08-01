import { King } from './king';

describe('Given the class King', () => {
  describe('When we instantiate it', () => {
    const reignYears = 2;
    const character = new King('', '', 20, reignYears);
    test('Then it should have the property reignYears', () => {
      expect(character).toHaveProperty('reignYears', reignYears);
    });
  });
});
