import { media } from "../src/media.js";

test("calcula média de números", () => {
  expect(media([10, 8, 6])).toBe(8);
});

test("retorna 0 para lista vazia", () => {
  expect(media([])).toBe(0);
});
