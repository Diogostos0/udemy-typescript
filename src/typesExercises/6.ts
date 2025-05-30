type FuncionarioBase = {
  nome: string;
  salario: number;
  ativo: boolean;
};

type FuncionarioType = FuncionarioBase;
interface FuncionarioInterface extends FuncionarioBase {}

const objFuncionarioType: FuncionarioType = {
  nome: 'Maria',
  salario: 1000,
  ativo: true,
};

const objFuncionarioInterface: FuncionarioInterface = {
  nome: 'Mario',
  salario: 2000,
  ativo: false,
};

export function exibirFuncionario(funcionario: FuncionarioBase): string {
  return `Nome: ${funcionario.nome}, Salario: ${funcionario.salario}, Ativo: ${funcionario.ativo}`;
}

console.log(exibirFuncionario(objFuncionarioType));
console.log(exibirFuncionario(objFuncionarioInterface));
