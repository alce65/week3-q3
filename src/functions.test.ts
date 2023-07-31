import { foo } from './functions';

describe('first', () => {
  test('should first', () => {
    const text = 'Soy foo';
    const r = foo(text);
    expect(r).toBe(text);
  });
});
