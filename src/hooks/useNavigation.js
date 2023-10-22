import { useState, useEffect } from 'react';

import { BREAKPOINTS } from '@/utils/constants';

const useNavigation = () => {
  const [showMobileNavMenu, setShowMobileNavMenu] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > BREAKPOINTS.mobile) {
        setShowMobileNavMenu(false);
      } else if (window.innerWidth < BREAKPOINTS.mobile) {
        setShowMobileNavMenu(true);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return showMobileNavMenu;
};

export default useNavigation;
