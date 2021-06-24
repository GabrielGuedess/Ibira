import MenuContextProvider from '../useMenu';
import ProdutoContextProvider from '../useProdutos';

import type { ProdutoProps } from '../useProdutos';

const Providers = ({ children }: ProdutoProps) => (
  <ProdutoContextProvider>
    <MenuContextProvider>{children}</MenuContextProvider>
  </ProdutoContextProvider>
);

export default Providers;
