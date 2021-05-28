import { GetStaticProps } from 'next';

import Home from 'templates/Home';

import { api } from '../services/api';

export default function Index() {
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
