import { useLayoutEffect, useState } from "react";

export default function useResponsive() {
  const [windowSize, setWindowSize] = useState({
    // initial width & height
    width: 0,
    height: 0,
  });

  function handleResize() {
    // setting the current width & height of the window
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }
  useLayoutEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    // after mount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return windowSize;
}

 
