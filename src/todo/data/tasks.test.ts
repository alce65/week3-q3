import { getTasks } from './tasks';

describe('Given the function getTask', () => {
  describe('When we call it', () => {
    test('Then it should return a tree items array', () => {
      const expectedLength = 3;
      const result = getTasks();
      expect(result.length).toBe(expectedLength);
    });
  });
});
