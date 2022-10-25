export function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

export function reverseString(str) {
  return str.split('').reverse().join('');
}

export const calculator = {
  add(a, b) {
    return a + b;
  },
  subtract(a, b) {
    return a - b;
  },
  divide(a, b) {
    if (b === 0) {
      throw new Error('Cannot divide by zero!');
    }
    return a / b;
  },
  multiply(a, b) {
    return a * b;
  },
};
