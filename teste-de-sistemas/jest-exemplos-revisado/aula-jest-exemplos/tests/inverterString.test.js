import { inverterString } from "../src/inverterString.js";

test("inverte uma string simples", () => {
  expect(inverterString("abc")).toBe("cba");
});

test("inverte string com espaços", () => {
  expect(inverterString("oi tudo bem")).toBe("meb odut io");
});
