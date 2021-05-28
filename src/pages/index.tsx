import NavBar from 'components/NavBar';

export default function Home() {
  return <NavBar />;
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
