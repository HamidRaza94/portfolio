import { useState, useEffect } from 'react';

import useCalculateDistance from './useCalculateDistance';

const INCREASED_MARGIN = 20;

const useCalculateMargin = (ref1, ref2) => {
  const [margin, setMargin] = useState(0);

  const distance = useCalculateDistance(ref1, ref2);

  useEffect(() => {
    if (distance > window.innerHeight + 25) {
      setMargin(INCREASED_MARGIN);
    }
  }, [distance]);

  return margin;
};

export default useCalculateMargin;
