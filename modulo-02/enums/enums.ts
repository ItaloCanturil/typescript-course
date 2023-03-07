// Enums enumeram póssiveis valores para um tipo, mapeiam chaves para valores, basicamente são objetos com chaves fixas.
// O TS suporta enums númericos e baseados em string

// sintaxe:

enum TypeName{
  constant1,
  constant2,
  constant3,
}

// por que usar enums?
// Facilidade em mudar valores
// Reduz erros
// Funciona somente em tempo de compilação, ou seja, não aloca memória
// Tempo de execução é mais preciso
// Permite criar constantes
// Premite criar contantes personalizadas


// existem dois tipos de enums

// Numeric enums:
enum Idioma {
  Portugues,
  Ingles,
  Frances
}

// String enums
enum Linguagem {
  Portugues = 'pt-BR',
  Ingles = 'EN',
  Frances = 'FR',
}