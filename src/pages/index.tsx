import { GetStaticProps } from 'next';

import Home from 'templates/Home';

import { useContext } from 'react';
import { ProdutoContext } from '../contexts/ProdutoContext';
import { api } from '../services/api';

import type { ProdutosProps } from '../types/produtos';

export default function Index({ produtos }: ProdutosProps) {
  const { setProdutoList } = useContext(ProdutoContext);
  setProdutoList(produtos);
  return <Home />;
}
export const getStaticProps: GetStaticProps = async () => {
  const { data } = await api.get('produtos', {
    params: {
      _limit: 12,
      _order: 'desc',
    },
  });

  const produtos = data.map(produto => ({
    id: produto.id_produto,
    nome: produto.nome,
    preco: produto.preco,
    marca: produto.marca,
    categoria: produto.categoria,
  }));

  return {
    props: {
      produtos,
    },
  };
};
