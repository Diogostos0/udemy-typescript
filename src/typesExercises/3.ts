//3.1

interface Usuario {
  nome: string;
  idade: number;
  ativo: boolean;
}

const user: Usuario = { nome: 'Joao', idade: 12, ativo: true };

//3.2

type Produto = {
  nome: string;
  preco: number;
  categoria: 'livro' | 'eletronico' | 'alimento';
};

export function productDetails(produto: Produto): string {
  return `O produto ${produto.nome} custa R$${produto.preco} e é da categoria ${produto.categoria}`;
}

console.log(productDetails({ nome: 'teste', preco: 22.0, categoria: 'livro' }));
