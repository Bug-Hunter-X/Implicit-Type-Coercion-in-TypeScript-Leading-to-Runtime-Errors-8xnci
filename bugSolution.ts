function add(a: number, b: number): number {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Arguments must be numbers');
  }
  return a + b;
}

let result = add(1, 2); // This will work correctly
let result2 = add(1, '2'); // This will throw an error at runtime