import { getTasks, removeTasks } from './local.repository.tasks';

// Stubs
// - Mocks: jest.fn()
// - Spies

// jest.mock('axios')

describe('Given the function getTask', () => {
  describe('When we call it without localStorage data', () => {
    test('Then it should return a tree items array', () => {
      const expectedLength = 3;
      const result = getTasks();
      expect(result.length).toBe(expectedLength);
    });
  });

  describe('When we call it with localStorage data', () => {
    test('Then it should return an empty array', () => {
      Storage.prototype.getItem = jest.fn().mockReturnValue('[]');
      const result = getTasks();
      expect(result).toEqual([]);
      expect(Storage.prototype.getItem).toHaveBeenCalled();
    });
  });
});

describe('Given the function removeTasks', () => {
  describe('When we call it', () => {
    test('Then it should call localStorage.removeItem', () => {
      Storage.prototype.removeItem = jest.fn();
      removeTasks();
      expect(Storage.prototype.removeItem).toHaveBeenCalled();
    });
  });
});
