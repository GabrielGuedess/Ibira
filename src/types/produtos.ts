export type Produtos = {
  id: number;
  nome: string;
  preco: number;
  marca: string;
  categoria: string;
};

export type ProdutosProps = {
  produtos: Produtos[];
};
