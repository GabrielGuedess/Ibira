import { createContext, useState } from 'react';

type MenuProps = {
  children: React.ReactNode;
};

type MenuContextProps = {
  openState: boolean;
  setOpenState: any;

  isOpenUser: boolean;
  setIsOpenUser: any;

  isUserLogged: boolean;
  setIsUserLogged: any;
};
export type ProdutoProps = {
  children: React.ReactNode;
};
export const MenuContext = createContext({} as MenuContextProps);

const MenuContextProvider = ({ children }: MenuProps) => {
  const [openState, setOpenState] = useState(false);
  const [isOpenUser, setIsOpenUser] = useState(false);
  const [isUserLogged, setIsUserLogged] = useState(false);

  return (
    <MenuContext.Provider
      value={{
        openState,
        setOpenState,
        isOpenUser,
        setIsOpenUser,
        isUserLogged,
        setIsUserLogged,
      }}
    >
      {children}
    </MenuContext.Provider>
  );
};

export default MenuContextProvider;
