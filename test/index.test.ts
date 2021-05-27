import httpErrors from '../src';

describe('http-errors', () => {
  test('works', () => {
    const entries = Object.entries(httpErrors);
    expect(entries.length).toBeGreaterThan(0);
    entries.forEach(([type, Err]) => {
      const err = new Err();
      ['code', 'type', 'data'].forEach(expect(err).toHaveProperty);
      expect(err.type).toEqual(type);
    });
  });
});
