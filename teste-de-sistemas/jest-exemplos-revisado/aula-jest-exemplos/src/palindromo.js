export function ePalindromo(str) {
  const normalizado = str.toLowerCase().replace(/\s/g, "");
  return normalizado === normalizado.split("").reverse().join("");
}
