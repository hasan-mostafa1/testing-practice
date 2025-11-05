import { reverseString } from "./reverse-string";

test("Happy path (first example)", () => {
  expect(reverseString("abcd")).toEqual("dcba");
});

test("Happy path (second example)", () => {
  expect(reverseString("sara")).toEqual("aras");
});

test("Edge case 1: empty string", () => {
  expect(reverseString("")).toEqual("");
});

test("Edge case 2: one letter", () => {
  expect(reverseString("a")).toEqual("a");
});

test("Edge case 3: without input", () => {
  expect(reverseString()).toBeUndefined();
});
