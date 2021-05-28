import { createContext, useState } from 'react';

import type { Produtos } from '../types/produtos';

type ProdutoContextProps = {
  produtoList: Produtos[];
  setProdutoList: any;
};

export type ProdutoProps = {
  children: React.ReactNode;
};
export const ProdutoContext = createContext({} as ProdutoContextProps);

const ProdutoContextProvider = ({ children }: ProdutoProps) => {
  const [produtoList, setProdutoList] = useState([]);
  return (
    <ProdutoContext.Provider value={{ produtoList, setProdutoList }}>
      {children}
    </ProdutoContext.Provider>
  );
};

export default ProdutoContextProvider;
