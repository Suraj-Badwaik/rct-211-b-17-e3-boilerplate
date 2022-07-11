import { useState } from "react";

export const useCounter = (init) => {
  const { initialValue, maxValue, minValue } = init;
  const [count, setCount] = useState(initialValue);

  const incCount = (a) => {
    if (count >= maxValue) {
      return false;
    } else {
      a ? setCount((c) => c + a) : setCount((c) => c + 1);
    }
  };

  const decCount = (a) => {
    if (count <= minValue) {
      return false;
    } else {
      setCount((c) => c - a);
    }
 
  };

  return { count, incCount, decCount };
};
