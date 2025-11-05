import { capitalize } from "./capitalize";

test("Happy path (first example)", () => {
  expect(capitalize("sara")).toEqual("Sara");
});

test("Happy path (second example)", () => {
  expect(capitalize("hasan")).toEqual("Hasan");
});

test("Edge case 1: empty string", () => {
  expect(capitalize("")).toEqual("");
});

test("Edge case 2: one letter", () => {
  expect(capitalize("a")).toEqual("A");
});

test("Edge case 3: without input", () => {
  expect(capitalize()).toBeUndefined();
});
