import { useState, createContext, useMemo } from 'react';

const MenuContext = createContext(1);

const MenuProvider = (props) => {
  const [menu, setMenu] = useState(1);

  const providerValue = useMemo(() => ({ menu, setMenu }), [menu]);

  return (
    <MenuContext.Provider value={providerValue}>
      {props.children}
    </MenuContext.Provider>
  );
};

export default MenuContext;

export { MenuProvider }
