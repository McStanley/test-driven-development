/* eslint-env jest */

describe('capitalize', () => {
  test('all lowercase string', () => {
    expect(capitalize('lowercase')).toMatch(/^Lowercase$/);
  });

  test('all uppercase string', () => {
    expect(capitalize('UPPERCASE')).toMatch(/^Uppercase$/);
  });

  test('mixed case string', () => {
    expect(capitalize('MiXeD')).toMatch(/^Mixed$/);
  });

  test('empty string', () => {
    expect(capitalize('')).toMatch(/^$/);
  });
});
