import React, { useContext } from "react";

let MenuItemsContext = React.createContext<any[]>([]);

type Props = {
  items: any[];
};

export let MenuItemsProvider: React.FC<Props> = ({ children, items }) => {
  return (
    <MenuItemsContext.Provider value={items}>
      {children}
    </MenuItemsContext.Provider>
  );
};

export let useMenuItemsContext = (): any[] => {
  return useContext(MenuItemsContext);
};
