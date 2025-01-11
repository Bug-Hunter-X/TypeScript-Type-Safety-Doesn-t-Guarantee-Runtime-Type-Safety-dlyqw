function add(a: number, b: number): number {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Invalid input: Both arguments must be numbers.');
  }
  return a + b;
}

//Example usage
let result1 = add(1, 2); 
console.log(result1); // Output: 3

try {
  let result2 = add(1, "2");
  console.log(result2);
} catch (error) {
  console.error(error.message); //Output: Invalid input: Both arguments must be numbers.
}
