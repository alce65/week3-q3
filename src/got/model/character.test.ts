import { Character } from './character';

describe('Given the class Character', () => {
  describe('When we instantiate it', () => {
    class TestCharacter extends Character {}
    const name = 'Test name';
    const family = 'Family name';
    const age = 20;
    const character = new TestCharacter(name, family, age);
    test('Then it should have the properties name, family, age', () => {
      expect(character).toHaveProperty('name', name);
      expect(character).toHaveProperty('family', family);
      expect(character).toHaveProperty('age', age);
      expect(character).toHaveProperty('isAlive', true);
      expect(character).toHaveProperty('message', '');
    });

    test('The method die should change isAlive to false  ', () => {
      character.die();
      expect(character).toHaveProperty('isAlive', false);
    });

    test('The method talk should return the message', () => {
      const message = 'Test message';
      character.message = message;
      const result = character.talk();
      expect(result).toBe(message);
    });
  });
});
