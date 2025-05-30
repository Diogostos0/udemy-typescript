//5.1
type Operacao = (n1: number, n2: number) => number;

//5.2
const somar: Operacao = (n1, n2) => n1 + n2;
const subtrair: Operacao = (n1, n2) => n1 - n2;
const multiplicar: Operacao = (n1, n2) => n1 * n2;

//teste
//console.log(somar(n1, n2), subtrair(n1, n2), multiplicar(n1, n2));

//5.3
export function calcular(n1: number, n2: number, op: Operacao) {
  return op(n1, n2);
}
let n1: number = 1;
let n2: number = 2;
console.log(calcular(n1, n2, somar));
