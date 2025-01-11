function add(a: number, b: number): number {
  return a + b;
}

let result = add(1, "2"); // This line will compile but runtime error will be thrown
console.log(result); // This will be NaN