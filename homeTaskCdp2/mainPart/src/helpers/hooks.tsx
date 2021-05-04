import React, { useCallback, useState } from 'react';

 // PATTERN: custom hook
const useToggle = (initialValue?: boolean): [flag: boolean, toggle: () => void] => {
  const init = initialValue || false;

  const [flag, setFlag] = useState(init);

  const toggle = useCallback(() => {
    setFlag(!flag);
  }, [flag]);

  return [flag, toggle];
};

export { useToggle };
