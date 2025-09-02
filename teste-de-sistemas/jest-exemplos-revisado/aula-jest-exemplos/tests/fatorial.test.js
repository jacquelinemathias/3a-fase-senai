import { fatorial } from "../src/fatorial.js";

test("calcula fatorial de 5", () => {
  expect(fatorial(5)).toBe(120);
});

test("fatorial de 0 é 1", () => {
  expect(fatorial(0)).toBe(1);
});

test("lança erro se negativo", () => {
  expect(() => fatorial(-3)).toThrow("Número negativo não permitido");
});
