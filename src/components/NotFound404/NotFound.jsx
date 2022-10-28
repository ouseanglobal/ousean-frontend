import Lottie from 'lottie-web';
import React, { useEffect, useRef } from 'react';

export default function NotFound() {
  const container = useRef(null);

  useEffect(() => {
    Lottie.loadAnimation({
      container: container.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      // eslint-disable-next-line global-require
      animationData: require('../../../public/img/404/404.json'),
    });
  }, []);
  return (
    <>
      {' '}
      <div className="container" ref={container} />
    </>
  );
}
