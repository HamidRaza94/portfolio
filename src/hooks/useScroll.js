import { useRef } from 'react';

const setting = {
  behavior: 'smooth',
};

const useScroll = () => {
  const htmlElRef = useRef(null);

  const scroll = () => {
    htmlElRef.current && htmlElRef.current.scrollIntoView(setting);
  }

  return [htmlElRef, scroll];
}

export default useScroll;
