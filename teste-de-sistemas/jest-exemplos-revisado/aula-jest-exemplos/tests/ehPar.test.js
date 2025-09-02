import { ehPar } from "../src/ehPar.js";

test("retorna true para número par", () => {
  expect(ehPar(4)).toBe(true);
});

test("retorna false para número ímpar", () => {
  expect(ehPar(7)).toBe(false);
});
