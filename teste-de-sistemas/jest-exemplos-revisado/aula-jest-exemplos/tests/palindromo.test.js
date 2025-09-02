import { ePalindromo } from "../src/palindromo.js";

test("'arara' é palíndromo", () => {
  expect(ePalindromo("arara")).toBe(true);
});

test("'ovo' é palíndromo", () => {
  expect(ePalindromo("ovo")).toBe(true);
});

test("'casa' não é palíndromo", () => {
  expect(ePalindromo("casa")).toBe(false);
});

test("ignora espaços", () => {
  expect(ePalindromo("Socorram me subi no onibus em Marrocos")).toBe(true);
});
