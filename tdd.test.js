/* eslint-env jest */

import {
  capitalize,
  reverseString,
  calculator,
  caesarCipher,
  analyzeArray,
} from './tdd';

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
    expect(caesarCipher('Hello, hello.', 7)).toMatch(/^Olssv, olssv.$/);
  });
});

describe('analyze array', () => {
  test('calculates the average value', () => {
    const object = analyzeArray([3, 5, 7, 9]);
    expect(object.average).toEqual(6);
  });

  test('finds the minimum value', () => {
    const object = analyzeArray([7, 2, 3]);
    expect(object.minimum).toEqual(2);
  });

  test('finds the maximum value', () => {
    const object = analyzeArray([11, 3, 50, 4, 18]);
    expect(object.maximum).toEqual(50);
  });

  test('returns the array length', () => {
    const object = analyzeArray([11, 3, 50, 4, 2, 1, 100]);
    expect(object.length).toEqual(7);
  });
});
