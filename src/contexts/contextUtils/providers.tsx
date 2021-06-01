import ProdutoContextProvider from '../ProdutoContext';
import SetMenuContextProvider from '../SetMenuContext';

import type { ProdutoProps } from '../ProdutoContext';

const Providers = ({ children }: ProdutoProps) => (
  <ProdutoContextProvider>
    <SetMenuContextProvider>{children}</SetMenuContextProvider>
  </ProdutoContextProvider>
);

export default Providers;
