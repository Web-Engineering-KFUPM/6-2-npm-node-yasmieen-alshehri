// #TODO 4.1 Add function
export function add(numbers) {
  return numbers.reduce((sum, num) => sum + num, 0);
}

// #TODO 4.2: Subtract function
export function subtract(numbers) {
  return numbers.slice(1).reduce((result, num) => result - num, numbers[0]);
}

// #TODO 4.3: Multiply function
export function multiply(numbers) {
  return numbers.reduce((result, num) => result * num, 1);
}

