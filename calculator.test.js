import { calculator } from "./calculator";

test("Add happy path: add two positive integers (1)", () => {
  expect(calculator.add(1, 2)).toBe(3);
});

test("Add happy path: add two positive integers (2)", () => {
  expect(calculator.add(10, 2)).toBe(12);
});

//subtract tests
test("subtract happy path: subtract two positive integers (1)", () => {
  expect(calculator.subtract(4, 3)).toBe(1);
});

test("subtract happy path: subtract two positive integers (2)", () => {
  expect(calculator.subtract(2, 10)).toBe(-8);
});

//divide tests
test("divide happy path: divide two positive integers (1)", () => {
  expect(calculator.divide(4, 2)).toBe(2);
});

test("divide happy path: divide two positive integers (2)", () => {
  expect(calculator.divide(10, 2)).toBe(5);
});

//multiply
test("multiply happy path: multiply two positive integers (1)", () => {
  expect(calculator.multiply(4, 2)).toBe(8);
});

test("multiply happy path: multiply two positive integers (2)", () => {
  expect(calculator.multiply(10, 2)).toBe(20);
});
