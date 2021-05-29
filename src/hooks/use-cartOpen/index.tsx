/* eslint-disable @typescript-eslint/no-explicit-any */
import { createContext, useState } from 'react';

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

type ProdutoContextProps = {
  produtoList: Produtos[];
  setProdutoList: any;
};

export type ProdutoProps = {
  children: React.ReactNode;
};
export const ProdutoContext = createContext({} as ProdutoContextProps);

export const ProdutoContextProvider = ({ children }: ProdutoProps) => {
  const [produtoList, setProdutoList] = useState([]);
  return (
    <ProdutoContext.Provider value={{ produtoList, setProdutoList }}>
      {children}
    </ProdutoContext.Provider>
  );
};

export const Providers = ({ children }: ProdutoProps) => (
  <ProdutoContextProvider>{children}</ProdutoContextProvider>
);
