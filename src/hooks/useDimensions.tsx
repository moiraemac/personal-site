import { useState, useEffect, useCallback } from 'react';
type Dimensions = {
  width: number
  height: number
}

const getDimensions = (): Dimensions => ({
  width: window.innerWidth,
  height: window.innerHeight,
})

const useDimensions = (): Dimensions => {
  const [dimensions, setDimensions] = useState(getDimensions());
  const updateDimensions = useCallback(
    () => setDimensions(getDimensions()),
    [],
  );
  useEffect(
    () => {
      window.addEventListener('resize', updateDimensions);
      return () => window.removeEventListener('resize', updateDimensions);
    },
    [updateDimensions]
  );
  return dimensions;
}

export default useDimensions;
