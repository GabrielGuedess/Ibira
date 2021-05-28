import ProdutoContextProvider from '../ProdutoContext';

import type { ProdutoProps } from '../ProdutoContext';

const Providers = ({ children }: ProdutoProps) => (
  <ProdutoContextProvider>{children}</ProdutoContextProvider>
);

export default Providers;
