// Ao adicionar tipo explicito para a função é possivel evitar erros, pois sem isso a função explicitamente seria do tipo any, seus parâmetros também.

function add(a: number, b: number): number {
  return a + b;
}

add(add(3,4), 6)