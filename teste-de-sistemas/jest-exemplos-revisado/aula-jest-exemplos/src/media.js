export function media(notas) {
  if (notas.length === 0) return 0;
  const soma = notas.reduce((acc, n) => acc + n, 0);
  return soma / notas.length;
}
