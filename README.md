# TypeScript Type Safety Doesn't Guarantee Runtime Type Safety

This example demonstrates a common misconception in TypeScript: type safety during compilation doesn't guarantee runtime type safety.

## The Bug

The `add` function is defined to accept two numbers and return their sum. However, if you pass a string as an argument, TypeScript will not throw an error during compilation.  During runtime, however, the addition results in `NaN` (Not a Number).

## The Solution

To prevent this, you can perform runtime type checking before performing any operation on the input parameters.  This adds a layer of robustness to the function. This approach combines TypeScript's type checking with explicit runtime validations to reduce potential runtime errors.