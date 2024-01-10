/* eslint-disable no-unused-labels */
/* O tipo unknown é usado quando não sabemos qual tipo definir]

  Qual a diferença dele para o tipo any?
  - o tipo unknown vai evitar problemas pois o typescript vai fazer uma verificação de tipo antes de rodar o código, diferente do que acontece com o tipo any que não faz essa verificação e pode causar problemas mais pra frente

  * Todo os tipos podem ser atribuidos ao tipo unknown

  exemplos:
*/

let valorVariavel: unknown;

valorVariavel = 123;
valorVariavel = 'KOEEEEE';
valorVariavel = []

// erros de usar o tipo unknown

let anotherVariable: unknown;

anotherVariable: number = 123;
anotherVariable: string = 'KOEEEEE';
anotherVariable: boolean = true;

