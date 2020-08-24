import { useState, useLayoutEffect, useRef } from "react";

export const useWindowSize = () => {
  const [size, setSize] = useState([window.innerWidth, window.innerHeight]);
  let timer = useRef<any>(null);

  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }

    timer.current = setTimeout(() => {
      window.addEventListener("resize", updateSize);
      updateSize();
    }, 200);

    return () => {
      clearTimeout(timer.current);
      window.removeEventListener("resize", updateSize);
    };
  }, []);

  return size;
};
