/* eslint-env jest */

import { capitalize } from './tdd';

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

describe('reverse', () => {
  test('a single character', () => {
    expect(reverseString('A')).toMatch(/^A$/);
  });

  test('a single word', () => {
    expect(reverseString('Word')).toMatch(/^droW$/);
  });

  test('a single sentence', () => {
    expect(reverseString('A single sentence.')).toMatch(/^.ecnetnes elgnis A$/);
  });

  test('an empty string', () => {
    expect(reverseString('')).toMatch(/^$/);
  });
});
