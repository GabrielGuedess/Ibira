import { createContext, useState } from 'react';

type SetMenuContextProps = {
  menuState: boolean;
  setMenuState: any;
};

export type MenuProps = {
  children: React.ReactNode;
};

export const SetMenuContext = createContext({} as SetMenuContextProps);

const SetMenuContextProvider = ({ children }: MenuProps) => {
  const [menuState, setMenuState] = useState(false);
  return (
    <SetMenuContext.Provider value={{ menuState, setMenuState }}>
      {children}
    </SetMenuContext.Provider>
  );
};

export default SetMenuContextProvider;
