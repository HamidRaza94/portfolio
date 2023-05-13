import { useState, createContext } from 'react';

const MenuContext = createContext(1);

const MenuProvider = (props) => {
  const { children } = props;

  const [menu, setMenu] = useState(1);

  return (
    <MenuContext.Provider value={{ menu, setMenu }}>
      {children}
    </MenuContext.Provider>
  );
};

export default MenuContext;

export { MenuProvider }
