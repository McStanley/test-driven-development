/* eslint-env jest */

import { capitalize, reverseString, calculator, caesarCipher } from './tdd';

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

describe('calculator', () => {
  test('adds two numbers', () => {
    expect(calculator.add(1, 2)).toEqual(3);
  });

  test('subtracts two numbers', () => {
    expect(calculator.subtract(7, 1)).toEqual(6);
  });

  test('divides two numbers', () => {
    expect(calculator.divide(36, 4)).toEqual(9);
  });

  test('throws an error when dividing by zero', () => {
    expect(() => calculator.divide(16, 0)).toThrow(/^Cannot divide by zero!$/);
  });

  test('multiplies two numbers', () => {
    expect(calculator.multiply(4, 3)).toEqual(12);
  });
});

describe('caesar cipher', () => {
  test('shifts characters', () => {
    expect(caesarCipher('abc', 5)).toMatch(/^fgh$/);
  });

  test('wraps properly', () => {
    expect(caesarCipher('z', 1)).toMatch(/^a$/);
  });

  test('keeps the same case', () => {
    expect(caesarCipher('ABab', 2)).toMatch(/^CDcd$/);
  });

  test('preserves punctuation', () => {
    expect(caesarCipher('Hello, hello.', 1)).toMatch(/^Olssv, olssv.$/);
  });
});
