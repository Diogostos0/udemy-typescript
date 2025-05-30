interface PessoaFisica {
  nome: string;
  cpf: string;
}
interface PessoaJuridica {
  razaoSocial: string;
  cnpj: string;
}
type PessoaCompleta = PessoaFisica & PessoaJuridica;

type Cliente = PessoaFisica | PessoaJuridica | PessoaCompleta;

export function exibirCliente(cliente: Cliente): string {
  if ('cpf' in cliente && 'cnpj' in cliente) return 'Pessoa Completa';
  if ('cpf' in cliente) return 'Pessoa Fisica';
  if ('cnpj' in cliente) return 'Pessoa Juridica';
  return 'Nao Identificado';
}
