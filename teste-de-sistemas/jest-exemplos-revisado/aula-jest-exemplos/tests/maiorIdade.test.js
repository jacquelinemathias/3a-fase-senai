import { maiorIdade } from "../src/maiorIdade.js";

test("retorna true se idade >= 18", () => {
  expect(maiorIdade(20)).toBe(true);
});

test("retorna false se idade < 18", () => {
  expect(maiorIdade(15)).toBe(false);
});
