import React, { useEffect, useRef } from 'react';
import Lottie from 'lottie-web';
import Maintanance from '../../../public/img/NotFound/Maintenance.json';

function NotFound() {
  const container = useRef(null);
  useEffect(() => {
    Lottie.loadAnimation({
      container: container.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: Maintanance,
    });
  }, []);
  return <div className="container mx-auto -mt-20 w-[850px]" ref={container} />;
}

export default NotFound;
