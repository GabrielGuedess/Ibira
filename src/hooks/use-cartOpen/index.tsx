/* eslint-disable @typescript-eslint/no-empty-function */
import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from 'react';

export type CartOpenProps = {
  children?: React.ReactNode;
};

type CartValuesProps = { isOpen: boolean; setIsOpen: boolean };

type AppContextValue = {
  state: CartValuesProps;
  setState: Dispatch<SetStateAction<CartValuesProps>>;
};

const cartOpenDefaultValue: AppContextValue = {
  state: { isOpen: false, setIsOpen: false },
  setState: () => {},
};

export const CartOpen = createContext(cartOpenDefaultValue);

export const AppProvider = ({ children }: CartOpenProps) => {
  const [state, setState] = useState(cartOpenDefaultValue.state);

  return (
    <CartOpen.Provider value={{ state, setState }}>
      {children}
    </CartOpen.Provider>
  );
};

export function useCartOpen() {
  const context = useContext(CartOpen);
  const { state, setState }: AppContextValue = context;
  return { state, setState };
}
