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

export function caesarCipher(input, offset) {
  return input
    .split('')
    .map((char) => {
      if (!/^[A-Za-z]$/.test(char)) {
        return char;
      }

      let charCode = char.charCodeAt(0) + offset;
      const maxCode = /^[A-Z]$/.test(char) ? 90 : 122;

      while (charCode > maxCode) {
        charCode -= 26;
      }

      return String.fromCharCode(charCode);
    })
    .join('');
}

export function analyzeArray(arr) {
  let minimum = Infinity;
  let maximum = -Infinity;
  let sum = 0;

  for (const num of arr) {
    if (num < minimum) minimum = num;
    if (num > maximum) maximum = num;

    sum += num;
  }

  const average = sum / arr.length;

  return {
    average,
    minimum,
    maximum,
    length: arr.length,
  };
}
