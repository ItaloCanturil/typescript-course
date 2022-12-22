// As tuplas nos permite armazenar campos com tipos diferentes
// pode ser considerado um array com número fixo de elementos
// pode ser passadas como parâmetros

let pessoa: [string, string, number];

pessoa = ['Italo', 'Front-End', 2001];

// Outra forma de usar Tuplas em Typescript

let pessoa1: [nome: string, posicao:string, idade:number] = ['Italo', 'Front-End', 2001];

// spread operator
let listaFrutas: [string, ...string[]] = ['🍇', '🍍', '🥭', '🍉', '🍈'];
console.log(...listaFrutas)

// Lista Heterogênea de Tupla

let listaFrutas2: [number, boolean, ...string[]] = [3, true, ...listaFrutas];


// Tuplas com funções

function userForm(username: string[], nascimento: string[], idade: number[]) {
  return [...username, ...nascimento, ...idade]
}

// Tuplas com label e spread operator numa função

type Nome = 
  | [primeiroNome: string, sobrenome: string]
  | [primeiroNome: string, nomeDoMeio: string, sobrenome: string]

function criarPessoa(...nome: Nome) {
  return [...nome]
}