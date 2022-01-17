import { useState, useEffect } from 'react';

const getWindowDimensions = () => {
  const { innerWidth: width, innerHeight: height } = window;
  return { width, height };
};

export default () => {
  const [windowDimensions, setWindowDimensions] = useState<{
    width: number;
    height: number;
  } | null>(null);

  useEffect(() => {
    function updateDimensions() {
      setWindowDimensions(getWindowDimensions());
    }

    updateDimensions();

    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  return windowDimensions;
};
