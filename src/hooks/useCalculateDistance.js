import { useState, useEffect } from 'react';

const useCalculateDistance = (ref1, ref2) => {
  const [distance, setDistance] = useState(0);

  useEffect(() => {
    if (ref1.current && ref2.current) {
      const rect1 = ref1.current.getBoundingClientRect();
      const rect2 = ref2.current.getBoundingClientRect();

      const distanceX = Math.abs(rect1.x - rect2.x);
      const distanceY = Math.abs(rect1.y - rect2.y);
      const distance = Math.sqrt(distanceX ** 2 + distanceY ** 2);

      setDistance(distance);
    }
  }, [ref1, ref2]);

  return distance;
};

export default useCalculateDistance;
