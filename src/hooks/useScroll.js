import { useRef } from 'react';

const useScroll = () => {
  const htmlElRef = useRef(null);

  const scroll = () => {
    const setting = {
      top: htmlElRef.current.offsetTop,
      behavior: 'smooth',
    };

    htmlElRef.current && window.scrollTo(setting);
  }

  return [htmlElRef, scroll];
}

export default useScroll;
