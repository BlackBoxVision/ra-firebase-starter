import { createContext, useContext, PropsWithChildren, FC } from "react";

let MenuItemsContext = createContext<any[]>([]);

type Props = PropsWithChildren & {
  items: any[];
};

export let MenuItemsProvider: FC<Props> = ({ children, items }) => {
  return (
    <MenuItemsContext.Provider value={items}>
      {children}
    </MenuItemsContext.Provider>
  );
};

export let useMenuItemsContext = (): any[] => {
  return useContext(MenuItemsContext);
};
