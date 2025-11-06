import { caesarCipher } from "./caesar-cipher";

test("Happy path (first example)", () => {
  expect(caesarCipher("xyz", 3)).toEqual("abc");
});

test("Happy path (second example)", () => {
  expect(caesarCipher("abc", 3)).toEqual("def");
});

test("Case preservation", () => {
  expect(caesarCipher("HeLLo", 3)).toEqual("KhOOr");
});

test("Punctuation", () => {
  expect(caesarCipher("Hello, World!", 3)).toEqual("Khoor, Zruog!");
});
