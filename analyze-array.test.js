import { analyzeArray } from "./analyze-array";

test("Happy path (first example)", () => {
  const output = {
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  };
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual(output);
});

test("Happy path (second example)", () => {
  const output = {
    average: 4.5,
    min: 0,
    max: 10,
    length: 6,
  };
  expect(analyzeArray([0, 8, 3, 4, 2, 10])).toEqual(output);
});
