// #TODO 4.1
export function add(numbers) {
  return numbers.reduce((sum, num) => sum + num, 0);
}

// #TODO 4.2: Subtract function
export function subtract(numbers) {
  return numbers.slice(1).reduce((result, num) => result - num, numbers[0]);
}

